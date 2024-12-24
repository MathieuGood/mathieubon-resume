#!/bin/bash

source ./credentials.sh

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() {
  printf "${GREEN}$(date +"%Y-%m-%d %H:%M:%S") [INFO]${NC} %s\n" "$1"
}

warn() {
  printf "${YELLOW}$(date +"%Y-%m-%d %H:%M:%S") [WARNING]${NC} %s\n" "$1"
}

error() {
  printf "${RED}$(date +"%Y-%m-%d %H:%M:%S") [ERROR]${NC} %s\n" "$1"
}


cd ..

find public -type f -exec chmod 644 {} \;

log "Building the project..."
npm run build || {
  error "Build failed"
  exit 1
}

log "Building the Docker image..."
docker build --platform linux/amd64 -t $DOCKER_IMAGE . || {
  error "Docker build failed"
  exit 1
}

log "Saving the Docker image to a tar file..."
docker save $DOCKER_IMAGE -o $TAR_FILE || {
  error "Failed to save Docker image"
  exit 1
}

log "Transferring the tar file to the remote server..."
scp $TAR_FILE $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR || {
  error "SCP transfer failed"
  exit 1
}

log "Removing the local tar file..."
rm $TAR_FILE

log "Connecting to the remote server..."
ssh $REMOTE_USER@$REMOTE_HOST <<EOF

  export TAR_FILE=$TAR_FILE
  export REMOTE_DIR=$REMOTE_DIR
  export DOCKER_IMAGE=$DOCKER_IMAGE
  export REMOTE_CONTAINER_NAME=$REMOTE_CONTAINER_NAME
  export PORT=$PORT
  
  log() {
    echo -e "${GREEN}\$(date +"%Y-%m-%d %H:%M:%S") [INFO]${NC} \$1"
  }

  warn() {
    echo -e "${YELLOW}\$(date +"%Y-%m-%d %H:%M:%S") [WARNING]${NC} \$1"
  }

  error() {
    echo -e "${RED}\$(date +"%Y-%m-%d %H:%M:%S") [ERROR]${NC} \$1"
  }

  log "Checking if Docker is running..."
  if ! systemctl is-active --quiet docker; then
    warn "Docker is not running. Starting Docker..."
    sudo systemctl start docker
  fi
  
  log "Removing the existing Docker image..."
  docker rmi -f \$DOCKER_IMAGE || true

  log "Checking if port \$PORT is in use by any container..."
  CONTAINER_ID=\$(docker ps -q -f "publish=\$PORT")
  if [ -n "\$CONTAINER_ID" ]; then
    warn "Stopping the container using port \$PORT..."
    docker kill \$CONTAINER_ID || { error "Failed to kill the container using port \$PORT"; }
    docker rm \$CONTAINER_ID || { error "Failed to remove the container using port \$PORT";  }
  fi

  log "Checking if port \$PORT is still in use by a non-Docker process..."
  if lsof -i :\$PORT; then
    warn "Port \$PORT is still in use by another process. Stopping the process..."
    kill -9 \$(lsof -t -i :\$PORT)
  fi

  log "Killing the existing container..."
  docker kill \$REMOTE_CONTAINER_NAME || { error "Failed to stop container"; }

  log "Removing the existing container..."
  docker rm -f \$REMOTE_CONTAINER_NAME || { error "Failed to remove container"; }
  
  log "Cleaning up unused Docker networks..."
  docker network prune -f || { error "Failed to prune Docker networks"; }

  log "Loading the Docker image..."
  docker load -i \$REMOTE_DIR/\$TAR_FILE || { error "Failed to load Docker image"; }

  log "Running the Docker container..."
  docker run -d --name \$REMOTE_CONTAINER_NAME -p \$PORT:80 \$DOCKER_IMAGE

  docker ps

  if docker ps -q -f name=\$REMOTE_CONTAINER_NAME; then
    log "Container \$REMOTE_CONTAINER_NAME is running successfully."
  else
    error "Failed to start the container \$REMOTE_CONTAINER_NAME."
  fi

  log "Removing the tar file from the remote server..."
  rm \$REMOTE_DIR/\$TAR_FILE
EOF

log "Deployment completed successfully!"

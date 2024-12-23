export interface Photo {
	imgSrc: string
	alt: string
}

export interface Contact {
	text: string
	imgSrc: string
}

export interface Technology {
	text: string
	imgSrc: string
}

export interface Language {
	text: string
	imgSrc: string
}

export interface Hobby {
	text: string
	imgSrc: string
}

export interface ProfileData {
	photo: Photo
	contact: Contact[]
	presentation: string
	technologies: Technology[]
	languages: Language[]
	hobbies: Hobby[]
}

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

export interface Header {
	name : string
	title : string
}

export interface ProfileData {
	header : Header
	photo: Photo
	contact: Contact[]
	presentation: string
	technologies: Technology[]
	languages: Language[]
	hobbies: Hobby[]
}

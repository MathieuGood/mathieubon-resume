export interface ContactItem {
	text: string
	imgSrc: string
}

export interface Basics {
	name: string
	label: string
	image: string
	summary: string
	contact: ContactItem[]
}

export interface WorkEntry {
	company: string
	position: string
	location: string
	startDate: string
	endDate: string
	summary: string
	highlights: string[]
	keywords?: string[]
}

export interface EducationEntry {
	institution: string
	diploma: string
	startDate: string
	endDate: string
	additionalInfo?: string
}

export interface Skill {
	name: string
	imgSrc: string
}

export interface Language {
	name: string
	fluency: string
	imgSrc: string
}

export interface Interest {
	name: string
	imgSrc: string
}

export interface ResumeData {
	basics: Basics
	work: WorkEntry[]
	education: EducationEntry[]
	skills: Skill[]
	languages: Language[]
	interests: Interest[]
}

import LeftColumnSection from "./LeftColumnSection"
import LeftColumnTitle from "./LeftColumnTitle"
import resumeData from "../data/resume.json"
import { type ResumeData } from "../interfaces/resume"
import IconWithText from "./IconWithText"

const LeftColumn = () => {
	const { basics, skills, languages, interests } = resumeData as unknown as ResumeData

	return (
		<div className="left-column h-full flex-1 bg-custom-yellow px-5 py-5 overflow-hidden">
			<LeftColumnSection className="photo flex justify-center">
				<img src={basics.image} className="w-48" />
			</LeftColumnSection>
			<LeftColumnSection className="contact">
				<LeftColumnTitle>Contact</LeftColumnTitle>
				{basics.contact.map(item => (
					<IconWithText iconSrc={item.imgSrc} text={item.text} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="presentation">
				<LeftColumnTitle>Présentation</LeftColumnTitle>
				<p className="text-sm font-source">{basics.summary}</p>
			</LeftColumnSection>
			<LeftColumnSection className="technologies">
				<LeftColumnTitle>Technologies</LeftColumnTitle>
				{skills.map(skill => (
					<IconWithText iconSrc={skill.imgSrc} text={skill.name} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="languages">
				<LeftColumnTitle>Langues étrangères</LeftColumnTitle>
				{languages.map(lang => (
					<IconWithText iconSrc={lang.imgSrc} text={`${lang.name} ${lang.fluency}`} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="hobbies">
				<LeftColumnTitle>Centres d'intérêt</LeftColumnTitle>
				{interests.map(interest => (
					<IconWithText iconSrc={interest.imgSrc} text={interest.name} />
				))}
			</LeftColumnSection>
		</div>
	)
}

export default LeftColumn

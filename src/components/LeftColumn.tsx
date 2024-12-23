import LeftColumnSection from "./LeftColumnSection"
import LeftColumnTitle from "./LeftColumnTitle"
import profileData from "../data/profileData.json"
import { ProfileData } from "../interfaces/profileData"
import IconWithText from "./IconWithText"

const LeftColumn: React.FC = () => {
	const { contact, presentation, technologies, languages, hobbies } =
		profileData[0] as ProfileData

	return (
		<div className="left-column bg-custom-yellow px-5 py-5 ">
			<LeftColumnSection className="photo flex justify-center">
				<img src="images/photo-mathieu.jpg" className="w-48" />
			</LeftColumnSection>
			<LeftColumnSection className="contact">
				<LeftColumnTitle>Contact</LeftColumnTitle>
				{contact.map(contactItem => (
					<IconWithText iconSrc={contactItem.imgSrc} text={contactItem.text} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="presentation">
				<LeftColumnTitle>Présentation</LeftColumnTitle>
				<p className="text-sm font-source">{presentation}</p>
			</LeftColumnSection>
			<LeftColumnSection className="technologies">
				<LeftColumnTitle>Technologies</LeftColumnTitle>
				{technologies.map(technology => (
					<IconWithText iconSrc={technology.imgSrc} text={technology.text} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="languages">
				<LeftColumnTitle>Langues étrangères</LeftColumnTitle>
				{languages.map(language => (
					<IconWithText iconSrc={language.imgSrc} text={language.text} />
				))}
			</LeftColumnSection>
			<LeftColumnSection className="hobbies">
				<LeftColumnTitle>Centres d'intérêt</LeftColumnTitle>
				{hobbies.map(hobby => (
					<IconWithText iconSrc={hobby.imgSrc} text={hobby.text} />
				))}
			</LeftColumnSection>
		</div>
	)
}

export default LeftColumn

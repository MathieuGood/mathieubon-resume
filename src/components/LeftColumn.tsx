import LeftColumnContentBlock from "./LeftColumnContentBlock"
import LeftColumnTitle from "./LeftColumnTitle"

const LeftColumn: React.FC = () => {
	return (
		<div className="left-column bg-custom-yellow px-3 py-5 ">
			<LeftColumnContentBlock className="photo">
				<img src="" />
			</LeftColumnContentBlock>
			<LeftColumnContentBlock className="contact">
				{" "}
				<LeftColumnTitle>Contact</LeftColumnTitle>
			</LeftColumnContentBlock>
			<LeftColumnContentBlock className="presentation">
				{" "}
				<LeftColumnTitle>Présentation</LeftColumnTitle>
			</LeftColumnContentBlock>
			<LeftColumnContentBlock className="technologies">
				{" "}
				<LeftColumnTitle>Technologies</LeftColumnTitle>
			</LeftColumnContentBlock>
			<LeftColumnContentBlock className="languages">
				{" "}
				<LeftColumnTitle>Langues étrangères</LeftColumnTitle>
			</LeftColumnContentBlock>
			<LeftColumnContentBlock className="hobbies">
				{" "}
				<LeftColumnTitle>Centres d'intérêt</LeftColumnTitle>
			</LeftColumnContentBlock>
		</div>
	)
}

export default LeftColumn

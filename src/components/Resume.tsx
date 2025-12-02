import SectionTitle from "./SectionTitle"
import Job from "./Job"
import workExperienceData from "../data/workExperienceData.json"
import educationData from "../data/educationData.json"
import Degree from "./Degree"
import LeftColumn from "./LeftColumn"
import { ProfileData } from "../interfaces/profileData"
import profileData from "../data/profileData.json"

const Resume: React.FC = () => {
	const { header } = profileData as ProfileData

	return (
		<div className="resume page flex h-max bg-green-300">
			<div className="left-column w-1/3 h-full bg-red">
				<LeftColumn />
			</div>
			<div
				// TODO:  Add bg-red-600 to the className to see what zone is overlapping
				className="main-column w-2/3 h-full bg-[red]">
				<div className="hero bg-custom-gray h-36 pr-8 py-6 font-mono text-right text-custom-yellow">
					<h1 className=" text-5xl mb-2">{header.name}</h1>
					<p className="text-xl">{header.title}</p>
				</div>
				<div className="content bg-white px-5 py-5">
					<div className="experiences bg-white">
						<SectionTitle>Parcours professionnel</SectionTitle>
						{workExperienceData.map(experience => (
							<Job data={experience} />
						))}
					</div>
					<div className="education bg-white">
						<SectionTitle>Formations</SectionTitle>
						{educationData.map(degree => (
							<Degree data={degree} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume

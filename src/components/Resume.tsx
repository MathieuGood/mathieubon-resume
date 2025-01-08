import SectionTitle from "./SectionTitle"
import Job from "./Job"
import workExperienceData from "../data/workExperienceData.json"
import educationData from "../data/educationData.json"
import Degree from "./Degree"
import LeftColumn from "./LeftColumn"

const Resume: React.FC = () => {
	return (
		<div className="resume page flex h-max">
			<div className="left-column w-1/3 h-full bg-white">
				<LeftColumn />
			</div>
			<div
				// TODO:  Add bg-red-600 to the className to see what zone is overlapping
				className="main-column w-2/3 h-full bg-[white]">
				<div className="hero bg-custom-gray h-36 pr-8 py-6 font-mono text-right text-custom-yellow">
					<h1 className=" text-5xl mb-2">Mathieu Bon</h1>
					<p className="text-xl">Consultant Développeur</p>
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

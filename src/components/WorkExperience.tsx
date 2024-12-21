interface Company {
	name: string
	imgSrc: string
}

interface Location {
	city: string
	country: string
}

interface WorkExperienceData {
	position: string
	company: Company
	location: Location
	startDate: string
	endDate?: string
	description: string
	achievements: string[]
	technologies: string[]
}

interface WorkExperienceProps {
	data: WorkExperienceData
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
	return (
		<div className="work-experience mb-3">
			<p>
				{data.endDate === ""
					? `Depuis ${data.startDate} `
					: `${data.startDate} à ${data.endDate}`}
			</p>
			<h3>
				<span className="font-bold">
					{data.company.name}, {data.position}
				</span>{" "}
				- {data.location.city}
			</h3>
			<p>
				{data.description}
				<ul className="list-disc">
					{data.achievements.map(achievement => (
						<li className="ml-5">{achievement}</li>
					))}
				</ul>
			</p>
		</div>
	)
}

export default WorkExperience

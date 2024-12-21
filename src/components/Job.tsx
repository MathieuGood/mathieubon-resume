import DateRange from "./DateRange"

interface Company {
	name: string
	imgSrc: string
}

interface Location {
	city: string
	country: string
}

interface JobData {
	position: string
	company: Company
	location: Location
	startDate: string
	endDate?: string
	description: string
	achievements: string[]
	technologies: string[]
}

const Job: React.FC<{ data: JobData }> = ({ data }) => {
	return (
		<div className="job mb-3 text-sm">
			<h3>
				<span className="font-bold">
					{data.company.name}, {data.position}
				</span>{" "}
				{data.location.city}{" "}
				<DateRange startDate={data.startDate} endDate={data.endDate!} />
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

export default Job

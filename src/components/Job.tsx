import DateRange from "./DateRange"
import { type WorkEntry } from "../interfaces/resume"

const Job = ({ data }: { data: WorkEntry }) => {
	return (
		<div className="job mb-3 text-sm">
			<h3>
				<span className="font-bold">
					{data.company}, {data.position}
				</span>{" "}
				{data.location}{" "}
				<DateRange startDate={data.startDate} endDate={data.endDate} />
			</h3>

			<p>
				{data.summary}
				<ul className="list-disc">
					{data.highlights.map(highlight => (
						<li className="ml-5">{highlight}</li>
					))}
				</ul>
			</p>
		</div>
	)
}

export default Job

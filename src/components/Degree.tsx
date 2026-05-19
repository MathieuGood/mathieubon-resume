import DateRange from "./DateRange"
import { type EducationEntry } from "../interfaces/resume"

const Degree = ({ data }: { data: EducationEntry }) => {
	return (
		<div className="degree mb-3 text-sm">
			<h3>
				<span className="font-bold">{data.institution}</span>{" "}
				<DateRange startDate={data.startDate} endDate={data.endDate} />
			</h3>

			<p>{data.diploma}</p>
			{data.additionalInfo && <p>{data.additionalInfo}</p>}
		</div>
	)
}

export default Degree

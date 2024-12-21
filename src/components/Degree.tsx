import DateRange from "./DateRange"

interface DegreeData {
	school: string
	startDate: string
	endDate: string
	diploma: string
	additionalInfo?: string
}

const Degree: React.FC<{ data: DegreeData }> = ({ data }) => {
	return (
		<div className="degree mb-3 text-sm">
			<h3>
				<span className="font-bold">{data.school}</span>{" "}
				<DateRange startDate={data.startDate} endDate={data.endDate} />
			</h3>

			<p>{data.diploma}</p>
			{data.additionalInfo && <p>{data.additionalInfo}</p>}
		</div>
	)
}

export default Degree

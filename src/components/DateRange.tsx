import { dateToYear } from "../utils/dateUtils"

interface DateRangeProps {
	startDate: string
	endDate: string
}

const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate }) => {
	return (
		<span>
			{endDate === ""
				? `${dateToYear(startDate)} - Présent`
				: dateToYear(endDate) === dateToYear(startDate)
				? `${dateToYear(endDate)}`
				: `${dateToYear(startDate!)} - ${dateToYear(endDate!)}`}
		</span>
	)
}

export default DateRange

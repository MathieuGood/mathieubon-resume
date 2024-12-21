interface TimelineEvent {
	year: number
	title: string
	description: string
	image?: string
}

const timelineData: TimelineEvent[] = [
	{
		year: 1998,
		title: "Dolor Anetis",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "/path/to/image1.jpg"
	},
	{
		year: 2003,
		title: "Lorem Ipsum",
		description: "Aenean commodo ligula eget dolor.",
		image: "/path/to/image2.jpg"
	},
	{
		year: 2007,
		title: "Vestibun Eli",
		description: "Nullam dictum felis eu pede mollis pretium."
	},
	{
		year: 2012,
		title: "Alice Smith",
		description: "Integer tincidunt. Cras dapibus.",
		image: "/path/to/image3.jpg"
	},
	{
		year: 2019,
		title: "Dolor Anetis",
		description: "Etiam rhoncus. Maecenas tempus, tellus eget."
	},
	{
		year: 2023,
		title: "Lorem Ipsum Dolor Sit Name",
		description: "Sed consequat, leo eget bibendum."
	}
]

const Timeline: React.FC = () => {
	return (
		<div className="relative flex flex-col items-center w-11/12 mx-auto">
			{/* Vertical line */}
			<div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

			{timelineData.map((event, index) => (
				<div
					key={index}
					className={`flex flex-col md:flex-row items-center mb-10 w-full ${
						index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
					}`}>
					{/* Content */}
					<div className="md:w-1/2 p-4 text-center md:text-left">
						<h3 className="text-2xl font-bold text-yellow-500">{event.year}</h3>
						<h4 className="text-xl font-semibold mt-2">{event.title}</h4>
						<p className="text-gray-600 mt-2">{event.description}</p>
					</div>

					{/* Image */}
					{event.image && (
						<div className="md:w-1/2 p-4 flex justify-center">
							<img
								src={event.image}
								alt={event.title}
								className="w-36 h-36 object-cover rounded-lg shadow-lg"
							/>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default Timeline

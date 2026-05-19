import { useState, useEffect, useRef } from "react"
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
	const [scale, setScale] = useState(1)
	const resumeRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = resumeRef.current
		if (!el) return
		// 1123px is approx 297mm at 96dpi — 1080px gives a safety buffer
		if (el.scrollHeight > 1080) {
			setScale(Math.max(0.85, 1080 / el.scrollHeight))
		}
	}, [])

	return (
		<div ref={resumeRef} className="resume page flex print:h-auto">
			<div className="left-column w-1/3 flex flex-col">
				<LeftColumn />
			</div>
			<div className="main-column w-2/3 h-full">
				<div className="hero bg-custom-gray h-36 pr-8 py-6 font-mono text-right text-custom-yellow">
					<h1 className=" text-5xl mb-2">{header.name}</h1>
					<p className="text-xl">{header.title}</p>
				</div>
				<div className="content bg-white px-5 py-5" style={{ zoom: scale }}>
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

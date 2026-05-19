import { type ReactNode } from "react"

const SectionTitle = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<h2 className="font-bold smallcaps">{children}</h2>
			<hr className="border-t-4 border-yellow-500 mb-2" />
		</>
	)
}

export default SectionTitle

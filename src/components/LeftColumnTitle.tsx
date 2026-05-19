import { type ReactNode } from "react"

const LeftColumnTitle = ({ children }: { children: ReactNode }) => {
	return <h2 className="font-bold uppercase mb-1">{children}</h2>
}

export default LeftColumnTitle

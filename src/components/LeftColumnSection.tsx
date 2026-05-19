import { type ReactNode } from "react"

const LeftColumnSection = ({ children, className }: { children: ReactNode; className: string }) => {
	return <div className={`py-1 ${className}`}>{children}</div>
}
export default LeftColumnSection

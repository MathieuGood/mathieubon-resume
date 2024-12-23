const LeftColumnSection: React.FC<{ children: React.ReactNode; className: string }> = ({
	children,
	className
}) => {
	return <div className={`py-2 ${className}`}>{children}</div>
}
export default LeftColumnSection

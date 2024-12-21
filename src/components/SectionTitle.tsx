const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<h2 className="font-bold smallcaps">{children}</h2>
			<hr className="border-t-4 border-yellow-500 mb-2" />
		</>
	)
}

export default SectionTitle

import React from "react"

const LeftColumnTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <h2 className="font-bold uppercase mb-2">{children}</h2>
}

export default LeftColumnTitle
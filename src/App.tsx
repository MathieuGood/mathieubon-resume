import Resume from "./components/Resume"

function App() {
	const handlePrint = () => {
		window.print()
	}

	return (
		<div className="relative max-w-[800px] mx-auto">
			<div className="no-print absolute top-4 left-4 xl:-left-32 flex gap-2 flex-row md:flex-col z-10">
				<button
					onClick={handlePrint}
					className="bg-gray-800 text-white text-xs md:text-sm px-4 py-2 rounded hover:bg-gray-700"
				>
					Imprimer
				</button>
			</div>
			<Resume />
		</div>
	)
}

export default App

import Resume from "./components/Resume"
import { Previewer } from "pagedjs"

function App() {
	const handlePrint = () => {
		window.print()
	}

	const handlePaged = () => {
		const previewer = new Previewer()
		const content = document.querySelector(".resume")?.outerHTML
		if (content) {
			document.body.innerHTML = ""
			previewer.preview(content, ["/src/index.css"], document.body)
		}
	}

	return (
		<>
			<div className="no-print fixed top-4 right-4 flex gap-2">
				<button
					onClick={handlePrint}
					className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
					Print
				</button>
				<button
					onClick={handlePaged}
					className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
					Paged.js Preview
				</button>
			</div>
			<Resume />
		</>
	)
}

export default App

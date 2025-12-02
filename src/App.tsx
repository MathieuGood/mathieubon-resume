import Resume from "./components/Resume"
import html2pdf from "html2pdf.js"

function App() {
	const handlePrint = () => {
		window.print()
	}

	const handleSavePDF = () => {
		const element = document.querySelector(".resume")
		if (!element) return

		const pad = (n: number) => String(n).padStart(2, "0")
		const today = new Date()
		const dateStr = `${today.getFullYear()}.${pad(today.getMonth() + 1)}.${pad(
			today.getDate()
		)}`

		const pdfOptions = {
			margin: 0,
			filename: `CV Mathieu Bon ${dateStr}.pdf`,
			image: { type: "jpeg", quality: 0.98 },
			html2canvas: { scale: 2, useCORS: true },
			jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
		}
		// @ts-expect-error - html2pdf types are not perfect
		html2pdf().set(pdfOptions).from(element).save()
	}

	return (
		<div className="relative max-w-[800px] mx-auto">
			<div className="no-print absolute top-4 left-4 xl:-left-32 flex gap-2 flex-row md:flex-col z-10">
				<button
					onClick={handlePrint}
					className="bg-gray-800 text-white text-xs md:text-sm px-4 py-2 rounded hover:bg-gray-700">
					Imprimer
				</button>
				<button
					onClick={handleSavePDF}
					className="bg-gray-800 text-white text-xs md:text-sm px-4 py-2 rounded hover:bg-gray-700">
					PDF
				</button>
			</div>
			<Resume />
		</div>
	)
}

export default App

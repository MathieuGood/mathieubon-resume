import Resume from "./components/Resume"
import html2pdf from "html2pdf.js"

function App() {
	const handlePrint = () => {
		window.print()
	}

	const handleSavePDF = async () => {
		const resume = document.querySelector(".resume") as HTMLElement | null
		const content = resume?.querySelector(".content") as HTMLElement | null
		if (!resume) return

		const previousZoom = content?.style.zoom ?? ""
		if (content) content.style.zoom = "1"

		const pad = (n: number) => String(n).padStart(2, "0")
		const today = new Date()
		const dateStr = `${today.getFullYear()}.${pad(today.getMonth() + 1)}.${pad(today.getDate())}`

		try {
			await html2pdf()
				.set({
					margin: 0,
					filename: `CV Mathieu Bon ${dateStr}.pdf`,
					image: { type: "jpeg", quality: 0.98 },
					html2canvas: { scale: 2, useCORS: true },
					jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
				})
				.from(resume)
				.save()
		} finally {
			if (content) content.style.zoom = previousZoom
		}
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
				<button
					onClick={handleSavePDF}
					className="bg-gray-800 text-white text-xs md:text-sm px-4 py-2 rounded hover:bg-gray-700"
				>
					PDF
				</button>
			</div>
			<Resume />
		</div>
	)
}

export default App

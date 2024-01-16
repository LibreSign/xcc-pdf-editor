import 'pdfjs-dist/build/pdf.worker.min'

/**
 *
 * @param file
 */
export function readAsArrayBuffer(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsArrayBuffer(file)
	})
}

/**
 *
 * @param src
 */
export function readAsImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = reject
		if (src instanceof Blob) {
			const url = window.URL.createObjectURL(src)
			img.src = url
		} else {
			img.setAttribute('crossOrigin', 'anonymous')
			img.src = src
		}
	})
}

/**
 *
 * @param file
 */
export function readAsDataURL(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsDataURL(file)
	})
}

/**
 *
 * @param file
 */
export async function readAsPDF(file) {
	const pdfjsLib = require('pdfjs-dist')
	const pdfjsWorker = require('pdfjs-dist/build/pdf.worker.entry')
	pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker
	return pdfjsLib.getDocument(file).promise
}
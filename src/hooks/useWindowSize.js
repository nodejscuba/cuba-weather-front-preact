import { useEffect, useState, useCallback } from 'react'

export function useWindowSize() {
	const getWindowSize = () => ({
		innerHeight: window.innerHeight,
		innerWidth: window.innerWidth,
		outerHeight: window.outerHeight,
		outerWidth: window.outerWidth,
	})

	const [windowSize, setWindowSize] = useState(getWindowSize())

	const handleResize = useCallback(() => {
		setWindowSize(getWindowSize())
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [handleResize])

	return windowSize
}

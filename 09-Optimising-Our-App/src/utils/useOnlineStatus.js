export const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(second)

	useEffect(() => {
		document.addEventListener('offline', () => {
			setOnlineStatus(false)
		})
		document.addEventListener('online', () => {
			setOnlineStatus(true)
		})
	}, [onlineStatus])

	return onlineStatus
}

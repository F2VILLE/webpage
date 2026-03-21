import { useEffect, useState } from "react"

export function Playerctl() {
	const [nowPlaying, setNowPlaying] = useState<{
		title: string,
		artist: string,
		status: "Playing" | "Paused"
	} | null>(null)

	useEffect(() => {
		const hostname = window.location.hostname
		const port = window.location.port
		const ws = new WebSocket(`wss://f2ville.dev/musica`)


		ws.onmessage = (event) => {
			console.log(event)
			try {
				const data = JSON.parse(event.data)
				setNowPlaying(data)
			} catch (error) {
				// console.log(error)				
			}
		}

		return () => ws.close()
	}, [])

	return (
		<div className="flex justify-center items-center absolute top-0 mt-8 left-0 w-full h-fit z-20">
			{nowPlaying && nowPlaying.status == "Playing" && (
				<div className="scale-90 w-fit opacity-50 hover:opacity-75 transition-all text-nowrap text-xs p-2 rounded-full border border-white/10 m-2 flex flex-row justify-between items-center">
					<p className="text-lg mr-2">🔊</p>
					<div className="w-fit pr-2">
						<p className="">{nowPlaying?.title} - {nowPlaying?.artist}</p>
					</div>
				</div>
			)}
		</div>
	)
}
import { exec } from "child_process";
import { promisify } from "util";
import "dotenv/config";

const execAsync = promisify(exec);

let lastTrack = "";
let lastStatus = "Paused";

async function getCurrentTrack(): Promise<string> {
	try {
		const { stdout } = await execAsync("playerctl -p spotify metadata --format '{{artist}} - {{title}}'");
		return stdout.trim();
	} catch {
		return "";
	}
}

async function getCurrentStatus(): Promise<string> {
	try {
		const { stdout } = await execAsync("playerctl -p spotify status");
		return stdout.trim();
	} catch {
		return "Paused";
	}
}

async function sendTrackUpdate(track: string, status: string): Promise<void> {
	const [artist, title] = track.split(" - ");
	const data = JSON.stringify({ title, artist, status });

	console.log("Sending track update:", data);
	await fetch("https://f2ville.dev/api/musica", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": process.env.MUSICA_SECRETE || ""
		},
		body: data,
	});
}

async function pollTrack(): Promise<void> {
	const currentTrack = await getCurrentTrack();
	const currentStatus = await getCurrentStatus();

	if (currentTrack !== lastTrack || currentStatus !== lastStatus) {
		lastTrack = currentTrack;
		lastStatus = currentStatus;
		await sendTrackUpdate(currentTrack, currentStatus);
	}
}

setInterval(pollTrack, 1000);
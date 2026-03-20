export function Work() {
	return (
		<div className="w-full min-h-[90vh] p-16 flex flex-col items-center" id="resume">
			<p className="text-xl border-b border-[#e0bfff] w-fit pb-2">Work Experience</p>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
					<div className="p-6 border-l border-[#e0bfff]/50">
						<p className="text-base font-semibold text-[#e0bfff] mb-2">System Administration</p>
						<p className="text-sm text-gray-400">Through my HomeLab and self-hosting journey, I worked with Proxmox to host multiple VM's and LXC's (Debian / Ubuntu / Alpine) running Media services (jellyfin, navidrome), game servers (Pterodactyl), cloud services (NextCloud, Bitwarden), IoT (Home Assistant, Netbird), and about anything I could run myself.</p>
					</div>
					<div className="p-6 border-l border-[#e0bfff]/50">
						<p className="text-base font-semibold text-[#e0bfff] mb-2">Web Development</p>
						<p className="text-sm text-gray-400">I started my programming journey with Web dev, starting with static pages, going through PHP, and finally finding my place in JavaScript based application. I have a lot of experience using Express.js, and more recently Next.js. React is my frontend go to for dynamic applications.</p>
					</div>
					<div className="p-6 border-l border-[#e0bfff]/50">
						<p className="text-base font-semibold text-[#e0bfff] mb-2">Cybersecurity</p>
						<p className="text-sm text-gray-400">Even though it started as a hobby, I am exploring cybersecurity through CTF competitions and knowledge from my developer experience.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
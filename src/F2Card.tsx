import ghLogo from "./GitHub Logos/SVG/GitHub_Invertocat_White.svg"
import mastoLogo from "./mastodon.svg"
import letterLogo from "./letter.svg"
import gpg from "./gpg.txt"
import { useState } from "react";

export function F2Card() {
	const [selected, setSelected] = useState(false)
	const [showGPG, setShowGPG] = useState(false)
	const [copied, setCopied] = useState(false)
	const selectMatrix = () => {
		const element = document.getElementById("matrix");
		if (element) {
			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(element);
			selection?.addRange(range);
			navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob(["@f2ville:matrix.urlab.be"], { type: "text/plain" }) })])
			setTimeout(() => {
				setSelected(true)
			}, 200);
		}
	}
	const unselectMatrix = (e: MouseEvent) => {
		if (document.getSelection && selected) {
			document.getSelection()?.removeAllRanges();
			setSelected(false)
		}

		const gpgDisplay = document.getElementById("gpg-display");
		if (showGPG && e.target && gpgDisplay && !gpgDisplay.contains(e.target as Node)) {
			setShowGPG(false);
		}
	}
	const toggleGPG = () => {
		setShowGPG(!showGPG)
	}
	const copyGPG = () => {
		navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob([gpg], { type: "text/plain" }) })])
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 400);
	}

	return (
		<div className="w-full h-[95vh] p-8 text-center flex justify-center items-center z-10 relative" onClick={(e) => unselectMatrix(e)}>
			<div className="w-fit">
				<h1 className="text-xl text-white">F2VILLE</h1>
				<p id="matrix" className="text-sm select-text opacity-50 cursor-pointer" onClick={() => selectMatrix()}>@f2ville:matrix.urlab.be</p>
				<div className="mt-2 flex flex-row justify-between text-sm gap-2 separators">
					<span className="highlight">Web dev</span>
					<span>•</span>
					<span className="highlight">Software</span>
					<span>•</span>
					<span className="highlight">Security</span>
				</div>
				<div>
					<div className="mt-2 flex flex-row justify-center items-center relative">
						<a href="https://github.com/F2Ville" className="m-2 opacity-75 hover:opacity-100 transition-all">
							<img alt="GitHub" className="w-6" src={ghLogo} />
						</a>
						<a href="mailto:contact@f2ville.dev" className="m-2 opacity-75 hover:opacity-100 transition-all">
							<img alt="Mail" className="w-8" src={letterLogo} />
						</a>

						<a rel="me" href="https://mastodon.social/@f2ville" className="m-2 opacity-75 hover:opacity-100 transition-all">
							<img alt="Mastodon" className="w-6" src={mastoLogo} />
						</a>
					</div>
					<div className="flex flex-row justify-center items-center relative">
						<div className="">
							<p onClick={() => toggleGPG()} className="text-white cursor-pointer opacity-75 hover:opacity-100">GPG</p>
							<div id="gpg-display" hidden={!showGPG} className="absolute flex justify-center items-center top-42.5 left-0 right-0 bottom-0 text-xs">
								<div className="bg-[#151515] select-text p-2 text-left text-nowrap border border-white/10 relative">
									<p className="absolute top-2 right-2 select-none cursor-pointer border border-white/10 p-1 bg-[#151515] hover:bg-[#251d33]" onClick={() => copyGPG()}>{copied ? "Copied" : "Copy"}</p>
									<pre className="p-2 max-w-[80vw] w-fit overflow-x-scroll">
										<code>
											{gpg}
										</code>
									</pre>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="absolute bottom-10 left-0 right-0 mx-auto w-fit cursor-pointer py-4 px-8" onClick={(e) => {
				e.stopPropagation();
				document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
			}}>
				<div className="flex flex-col justify-center items-center opacity-60">
					<div className="gradwhite w-1 h-8"></div>
					<div className="bg-white w-4 h-4 rounded-full mt-1 flex justify-center items-center">
					<div className="bg-[#242424] w-2 h-2 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
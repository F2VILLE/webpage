export function PlayingAnim() {
	return (
		<svg className="w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="3" y="9" width="2" height="6" fill="currentColor">
				<animate attributeName="height" values="6;10;6" dur="1s" repeatCount="indefinite" />
				<animate attributeName="y" values="9;7;9" dur="1s" repeatCount="indefinite" />
			</rect>
			<rect x="8" y="9" width="2" height="6" fill="currentColor">
				<animate attributeName="height" values="6;14;6" dur="1s" repeatCount="indefinite" begin="0.2s" />
				<animate attributeName="y" values="9;5;9" dur="1s" repeatCount="indefinite" begin="0.2s" />
			</rect>
			<rect x="13" y="9" width="2" height="6" fill="currentColor">
				<animate attributeName="height" values="6;18;6" dur="1s" repeatCount="indefinite" begin="0.4s" />
				<animate attributeName="y" values="9;3;9" dur="1s" repeatCount="indefinite" begin="0.4s" />
			</rect>
			<rect x="18" y="9" width="2" height="6" fill="currentColor">
				<animate attributeName="height" values="6;12;6" dur="1s" repeatCount="indefinite" begin="0.6s" />
				<animate attributeName="y" values="9;5;9" dur="1s" repeatCount="indefinite" begin="0.6s" />
			</rect>
		</svg>
	)
}
import * as React from 'react'
import { SVGProps } from 'react'
const ArbitraryMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.5083 7.30676H2V19.9626H6.13717V23.9716L11.4003 19.9626H20.2912V14.3554"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M19.6729 13.9608C23.095 13.9608 25.8691 11.1866 25.8691 7.76457C25.8691 4.3425 23.095 1.56836 19.6729 1.56836C16.2508 1.56836 13.4767 4.3425 13.4767 7.76457C13.4767 11.1866 16.2508 13.9608 19.6729 13.9608Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M17.0001 8.05677L18.7652 9.56836L22.0001 6.56836"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M7.01814 14.0181L7 14"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M11.0181 14.0181L11 14"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M15.0544 14.0181L15.0363 14"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default ArbitraryMessage

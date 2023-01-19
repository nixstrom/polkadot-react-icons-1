import * as React from 'react'
import { SVGProps } from 'react'
const Proxy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 6.28348C2 8.64918 3.91778 10.567 6.28348 10.567H21.6409C24.0066 10.567 25.9244 8.64918 25.9244 6.28348C25.9244 3.91778 24.0066 2 21.6409 2H6.28348C3.91778 2 2 3.91778 2 6.28348Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.9685 26H6.28348C3.91778 26 2 24.0822 2 21.7165C2 19.3508 3.91778 17.433 6.28348 17.433H13.9559H21.6409C24.0066 17.433 25.9244 19.3508 25.9244 21.7165C25.9244 24.0822 24.0066 26 21.6409 26H13.9685Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.9872 17.4341L13.9872 10.5681"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Proxy

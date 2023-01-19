import * as React from 'react'
import { SVGProps } from 'react'
const Collective = (props: SVGProps<SVGSVGElement>) => (
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
			d="M23.8277 19.1904C25.5298 15.9686 25.5343 12.0847 23.8414 8.85944M19.139 4.17209C15.8766 2.47308 11.9466 2.50626 8.71031 4.27164M4.18173 8.88422C2.50178 12.1046 2.51068 15.9769 4.20841 19.1904M19.152 23.8449C15.9452 25.5204 12.0909 25.5204 8.88413 23.8449"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<circle
			cx={21.8596}
			cy={6.1703}
			r={3.32689}
			transform="rotate(45 21.8596 6.1703)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={6.17678}
			cy={21.8533}
			r={3.32689}
			transform="rotate(45 6.17678 21.8533)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={6.17645}
			cy={6.1703}
			r={3.32689}
			transform="rotate(45 6.17645 6.1703)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={21.8596}
			cy={21.8535}
			r={3.32689}
			transform="rotate(45 21.8596 21.8535)"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Collective

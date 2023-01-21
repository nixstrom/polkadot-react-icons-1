import * as React from 'react'
import { SVGProps } from 'react'
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26.7344 8.67865C27.004 8.38685 27.0754 7.96313 26.9161 7.59916C26.7569 7.23518 26.3972 7 26 7H1.99996C1.60285 7 1.24337 7.23497 1.08401 7.5987C0.924654 7.96242 0.995613 8.38598 1.26482 8.67791L13.2528 21.6779C13.442 21.8831 13.7083 21.9999 13.9874 22C14.2665 22.0001 14.533 21.8836 14.7224 21.6786L26.7344 8.67865Z"
			stroke="none"
		/>
	</svg>
)
export default Dropdown

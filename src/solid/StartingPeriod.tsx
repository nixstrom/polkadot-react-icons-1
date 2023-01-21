import * as React from 'react'
import { SVGProps } from 'react'
const StartingPeriod = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14ZM15.0001 5.96477C15.0001 5.41248 14.5524 4.96477 14.0001 4.96478C13.4478 4.96478 13.0001 5.41251 13.0001 5.96479L13.0002 14.093C13.0002 14.6452 13.448 15.0929 14.0002 15.0929C14.5525 15.0929 15.0002 14.6452 15.0002 14.0929L15.0001 5.96477Z"
			stroke="none"
		/>
	</svg>
)
export default StartingPeriod

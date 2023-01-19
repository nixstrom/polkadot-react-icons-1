import * as React from 'react'
import { SVGProps } from 'react'
const Share = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M16.177 5.8259L8.4267 11.2527" stroke="black" strokeWidth={2.5} />
		<path
			d="M8.38375 15.455L16.3078 21.0035"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M18.4763 7.05535C20.0072 7.05535 21.2482 5.81437 21.2482 4.28354C21.2482 2.7527 20.0072 1.51172 18.4763 1.51172C16.9455 1.51172 15.7045 2.7527 15.7045 4.28354C15.7045 5.81437 16.9455 7.05535 18.4763 7.05535Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M18.4763 25.5117C20.0072 25.5117 21.2482 24.2707 21.2482 22.7399C21.2482 21.2091 20.0072 19.9681 18.4763 19.9681C16.9455 19.9681 15.7045 21.2091 15.7045 22.7399C15.7045 24.2707 16.9455 25.5117 18.4763 25.5117Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M7.90533 15.9753C9.36066 14.52 9.36066 12.1604 7.90533 10.7051C6.45 9.24977 4.09044 9.24977 2.63511 10.7051C1.17978 12.1604 1.17978 14.52 2.63511 15.9753C4.09044 17.4307 6.45 17.4307 7.90533 15.9753Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Share

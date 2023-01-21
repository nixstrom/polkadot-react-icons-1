import * as React from 'react'
import { SVGProps } from 'react'
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
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
			d="M21.7589 26.6511C21.3993 27.0703 20.768 27.1185 20.3488 26.7589L6.34881 14.7469C6.12726 14.5568 5.99984 14.2794 5.99998 13.9875C6.00013 13.6955 6.12783 13.4182 6.34957 13.2284L20.3496 1.24041C20.7691 0.881191 21.4003 0.930067 21.7596 1.34957C22.1188 1.76908 22.0699 2.40035 21.6504 2.75957L8.53657 13.9887L21.6511 25.241C22.0703 25.6007 22.1185 26.232 21.7589 26.6511Z"
			stroke="none"
		/>
	</svg>
)
export default ArrowBack

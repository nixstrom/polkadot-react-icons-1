import * as React from 'react'
import { SVGProps } from 'react'
const Genesis = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect x={2} y={2} width={17} height={18} stroke="black" strokeWidth={2.5} />
		<path d="M26 11L12 11" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Genesis

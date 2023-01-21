import * as React from 'react'
import { SVGProps } from 'react'
const HashFunction = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M11.4824 2L11.4824 4.41076" />
		<path d="M11.4824 23.5892L11.4824 26" />
		<path d="M16.1909 2L16.1909 4.41076" />
		<path d="M6.77387 2L6.77387 4.41076" />
		<path d="M9.52651 16.8856L2 8.21664L20.4938 8.21665L13.5408 16.8856L13.5408 19.7753L9.51312 19.7753L9.52651 16.8856Z" />
	</svg>
)
export default HashFunction

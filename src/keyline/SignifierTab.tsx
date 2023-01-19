import * as React from 'react'
import { SVGProps } from 'react'
const SignifierTab = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 3"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M1.98828 1.51172H25.9883" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default SignifierTab

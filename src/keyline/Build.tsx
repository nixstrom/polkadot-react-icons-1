import * as React from 'react'
import { SVGProps } from 'react'
const Build = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 21.5743V11.0632L11.0655 15.4888V26L2 21.5743Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M24.16 21.5743V11.0632L15.0945 15.4888V26L24.16 21.5743Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M11.0268 2.97772L13.08 2L15.1332 2.97772M11.0268 10.7994L13.08 11.7772L15.1332 10.7994M20.9017 8.05252L23.346 6.88858L20.9017 5.72463M5.25825 5.72463L2.81396 6.88858L5.25825 8.05252"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default Build

import * as React from 'react'
import { SVGProps } from 'react'
const NotAbleToUpgrade = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.9998 6.94277L13.9998 21.0572M13.9998 6.94277L10.7449 10.1977M13.9998 6.94277L17.2547 10.1977"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M7.35387 23.6934L22.1447 5.61578"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default NotAbleToUpgrade

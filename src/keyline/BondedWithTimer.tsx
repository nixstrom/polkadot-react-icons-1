import * as React from 'react'
import { SVGProps } from 'react'
const BondedWithTimer = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M7.55817 8.82291L7.55818 6.82267V6.82267C7.55818 4.15918 9.71736 2 12.3808 2V2C15.0443 2 17.2035 4.15918 17.2035 6.82267V6.82267L17.2035 8.82291" />
		<path d="M21.7615 13.2941V8.82581H3V22.4706H13.9412" />
		<path d="M19.941 26C23.4496 26 26.294 23.1557 26.294 19.6471C26.294 16.1384 23.4496 13.2941 19.941 13.2941C16.4324 13.2941 13.5881 16.1384 13.5881 19.6471C13.5881 23.1557 16.4324 26 19.941 26Z" />
		<path d="M20.063 17.1428V19.853L19 21.1428" />
	</svg>
)
export default BondedWithTimer

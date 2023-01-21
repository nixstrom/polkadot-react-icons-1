import * as React from 'react'
import { SVGProps } from 'react'
const Consensus = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M14 2C20.6274 2 26 6.00877 26 10.9538C26 13.3124 24.7688 15.392 22.7711 16.9912L24.4427 23.6403L18.283 19.247C17.7411 19.3992 16.9172 19.5922 16.2083 19.6813L14.0407 24.6403L11.5962 19.657C10.9222 19.5699 10.2602 19.3957 9.72631 19.248L3.55603 23.6431L5.23852 16.9971C3.24087 15.3979 2 13.3124 2 10.9538C2 6.00877 7.37258 2 14 2Z" />
		<path d="M9.38666 11.0673L13.0277 14.468L19.7007 7.71863" />
	</svg>
)
export default Consensus

import * as React from 'react'
import { SVGProps } from 'react'
const Tools = (props: SVGProps<SVGSVGElement>) => (
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
			d="M3 2C3 1.44772 3.44772 1 4 1H11C11.5523 1 12 1.44772 12 2V6H3V2ZM3 8V20.2857C3 20.4701 3.05096 20.6508 3.14725 20.808L6.64725 26.5223C6.82901 26.8191 7.15199 27 7.5 27C7.84801 27 8.17099 26.8191 8.35275 26.5223L11.8528 20.808C11.949 20.6508 12 20.4701 12 20.2857V8H3Z"
			stroke="none"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16 2C16 1.44772 16.4477 1 17 1H24C24.5523 1 25 1.44772 25 2V26C25 26.5523 24.5523 27 24 27H17C16.4477 27 16 26.5523 16 26V20.6435H20.5001C21.0524 20.6435 21.5001 20.1957 21.5001 19.6435C21.5001 19.0912 21.0524 18.6435 20.5001 18.6435H16V14.9999L20.4998 14.9999C21.0521 14.9999 21.4998 14.5522 21.4998 13.9999C21.4998 13.4476 21.0521 12.9999 20.4998 12.9999L16 12.9999V9H20.5001C21.0524 9 21.5001 8.55228 21.5001 8C21.5001 7.44772 21.0524 7 20.5001 7H16V2Z"
			stroke="none"
		/>
	</svg>
)
export default Tools

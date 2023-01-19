import * as React from 'react'
import { SVGProps } from 'react'
const Gift = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M10.8229 2C11.6591 2 12.461 2.32869 13.0522 2.91376C13.6435 3.49883 13.9756 4.29236 13.9756 5.11977V8.23954H10.8229C9.98674 8.23954 9.18483 7.91085 8.59358 7.32578C8.00233 6.74071 7.67017 5.94719 7.67017 5.11977C7.67017 4.29236 8.00233 3.49883 8.59358 2.91376C9.18483 2.32869 9.98674 2 10.8229 2V2Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M17.1283 2C17.9645 2 18.7664 2.32869 19.3576 2.91376C19.9489 3.49883 20.2811 4.29236 20.2811 5.11977C20.2811 5.94719 19.9489 6.74071 19.3576 7.32578C18.7664 7.91085 17.9645 8.23954 17.1283 8.23954H13.9756V5.11977C13.9756 4.29236 14.3077 3.49883 14.899 2.91376C15.4903 2.32869 16.2922 2 17.1283 2V2Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path d="M4 14V25H24.5V14" stroke="black" strokeWidth={2.5} />
		<path
			d="M13.9756 14L13.9756 24.5"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M2 8.23946H26V13.8389H2V8.23946Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Gift

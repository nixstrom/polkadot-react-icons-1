import * as React from 'react'
import { SVGProps } from 'react'
const Copy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.4585 2.125C7.4585 1.43464 8.01814 0.875 8.7085 0.875H25.0002C25.6905 0.875 26.2502 1.43464 26.2502 2.125V18.4167C26.2502 19.107 25.6905 19.6667 25.0002 19.6667H19.5417V25.1252C19.5417 25.8155 18.982 26.3752 18.2917 26.3752H2C1.30964 26.3752 0.75 25.8155 0.75 25.1252V8.8335C0.75 8.14314 1.30964 7.5835 2 7.5835H7.4585V2.125ZM19.5417 17.1667V8.8335C19.5417 8.14314 18.982 7.5835 18.2917 7.5835H9.9585V3.375H23.7502V17.1667H19.5417Z"
		/>
	</svg>
)
export default Copy

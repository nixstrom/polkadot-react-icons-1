import * as React from 'react'
import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={26}
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 1C0 0.447715 0.447715 0 1 0H25C25.5523 0 26 0.447715 26 1V14.1698L0 14.1698V1ZM0 16.1698L26 16.1698V18.5C26 19.0523 25.5523 19.5 25 19.5H14L14 23.375H17.3333C17.8856 23.375 18.3333 23.8227 18.3333 24.375C18.3333 24.9273 17.8856 25.375 17.3333 25.375H8.66663C8.11434 25.375 7.66663 24.9273 7.66663 24.375C7.66663 23.8227 8.11434 23.375 8.66663 23.375H12L12 19.5H1C0.447716 19.5 0 19.0523 0 18.5V16.1698Z"
		/>
	</svg>
)
export default Monitor

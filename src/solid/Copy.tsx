import * as React from 'react'
import { SVGProps } from 'react'
const Copy = (props: SVGProps<SVGSVGElement>) => (
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
			d="M7.99414 2C7.99414 1.44772 8.44186 1 8.99414 1H25.9941C26.5464 1 26.9941 1.44772 26.9941 2V19C26.9941 19.5523 26.5464 20 25.9941 20H19.9941V26C19.9941 26.5523 19.5464 27 18.9941 27H1.99414C1.44186 27 0.994141 26.5523 0.994141 26V9C0.994141 8.44772 1.44186 8 1.99414 8H7.99414V2ZM19.9941 18V9C19.9941 8.44772 19.5464 8 18.9941 8H9.99414V3H24.9941V18H19.9941Z"
			stroke="none"
		/>
	</svg>
)
export default Copy

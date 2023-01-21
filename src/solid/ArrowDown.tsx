import * as React from 'react'
import { SVGProps } from 'react'
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
			d="M13.9914 26C13.4391 26 12.9914 25.5523 12.9914 25L12.9914 2C12.9914 1.44772 13.4391 1 13.9914 1C14.5437 1 14.9914 1.44772 14.9914 2L14.9914 25C14.9914 25.5523 14.5437 26 13.9914 26Z"
			stroke="none"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.30023 15.0859C3.69476 14.6994 4.32789 14.706 4.71437 15.1005L13.992 24.5716L23.2862 15.0999C23.6731 14.7057 24.3062 14.6997 24.7004 15.0865C25.0946 15.4733 25.1006 16.1065 24.7138 16.5007L14.7051 26.7004C14.517 26.8921 14.2596 27.0001 13.9909 27C13.7223 26.9999 13.465 26.8917 13.277 26.6998L3.28563 16.5C2.89916 16.1055 2.90569 15.4724 3.30023 15.0859Z"
			stroke="none"
		/>
	</svg>
)
export default ArrowDown

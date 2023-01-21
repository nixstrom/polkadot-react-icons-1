import * as React from 'react'
import { SVGProps } from 'react'
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
			d="M12.8995 4.71437C13.294 4.32789 13.3006 3.69476 12.9141 3.30023C12.5276 2.90569 11.8945 2.89916 11.5 3.28563L1.30023 13.277C1.10832 13.465 1.00012 13.7223 1 13.9909C0.999884 14.2596 1.10786 14.517 1.29961 14.7051L11.4993 24.7138C11.8935 25.1006 12.5267 25.0946 12.9135 24.7004C13.3003 24.3062 13.2943 23.6731 12.9001 23.2862L4.44671 14.9912L26 14.9912C26.5523 14.9912 27 14.5435 27 13.9912C27 13.4389 26.5523 12.9912 26 12.9912L4.45005 12.9912L12.8995 4.71437Z"
			stroke="none"
		/>
	</svg>
)
export default ArrowLeft

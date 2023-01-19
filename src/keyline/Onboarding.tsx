import * as React from 'react'
import { SVGProps } from 'react'
const Onboarding = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1.9021 25.7822L25.5969 25.7822"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M9.27793 18.6974L23.2046 14.101C25.8036 13.2432 24.7124 9.92991 22.1134 10.7877L16.6215 12.6003C12.7966 10.2046 9.10109 7.55184 5.34434 5.04545L11.5374 14.2676C9.62981 14.8972 8.18674 15.3841 8.18674 15.3841L7.11546 15.7377L2.60026 14.1959L6.59565 19.6081L8.24002 19.0498L9.27793 18.6974Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M11.1794 13.7601L5.34448 5.04547L15.9691 12.1339"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Onboarding

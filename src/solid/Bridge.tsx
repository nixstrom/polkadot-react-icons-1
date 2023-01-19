import * as React from 'react'
import { SVGProps } from 'react'
const Bridge = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M27.1078 19.2501L27.1092 8.25016C27.1093 7.69783 26.6616 7.25003 26.1092 7.25003L2.10938 7.25C1.5571 7.25 1.10938 7.69772 1.10938 8.25001L1.10947 19.25C1.10947 19.8023 1.55718 20.25 2.10946 20.25L3.86196 20.25C4.17526 20.25 4.46948 20.105 4.68114 19.874C5.65957 18.8062 8.86017 15.8319 14.1555 15.8319C19.4336 15.8319 22.5689 18.7868 23.5361 19.8635C23.7486 20.1001 24.0472 20.25 24.3652 20.25L26.1078 20.25C26.66 20.25 27.1077 19.8024 27.1078 19.2501Z" />
	</svg>
)
export default Bridge

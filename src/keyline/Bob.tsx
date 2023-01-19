import * as React from 'react'
import { SVGProps } from 'react'
const Bob = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M9.02969 9.58746L8.12147 8.53609C6.67139 6.85746 6.78596 4.33823 8.38243 2.79815C10.001 1.23677 12.5651 1.23677 14.1837 2.79815C15.7801 4.33823 15.8947 6.85746 14.4446 8.53609L13.5366 9.58716C13.0621 10.1365 13.2218 10.9845 13.8636 11.3235L15.4551 12.1643C18.6036 13.8277 20.5735 17.0963 20.5735 20.6572L20.5736 24H2.00006L2.00004 20.6523C2.00002 17.094 3.96791 13.8274 7.11361 12.1642L8.703 11.3238C9.34465 10.9845 9.50416 10.1367 9.02969 9.58746Z"
			fill="white"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Bob

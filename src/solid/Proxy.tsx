import * as React from 'react'
import { SVGProps } from 'react'
const Proxy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.4934 0H4.47607C2.004 0 0 2.1986 0 4.91071C0 7.62283 2.004 9.82143 4.47606 9.82143H11.2569C11.2546 9.84923 11.2534 9.87736 11.2534 9.90576V16.0714H4.47607C2.004 16.0714 0 18.27 0 20.9821C0 23.6942 2.004 25.8928 4.47606 25.8928H12.4934H12.5066H20.5239C22.996 25.8928 25 23.6942 25 20.9821C25 18.27 22.996 16.0714 20.5239 16.0714H13.2534V9.90576C13.2534 9.87736 13.2522 9.84923 13.2499 9.82143H20.5239C22.996 9.82143 25 7.62283 25 4.91071C25 2.1986 22.996 0 20.5239 0H12.5066H12.4934Z"
		/>
	</svg>
)
export default Proxy

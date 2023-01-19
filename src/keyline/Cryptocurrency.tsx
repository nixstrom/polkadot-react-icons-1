import * as React from 'react'
import { SVGProps } from 'react'
const Cryptocurrency = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M19.8885 11.3879C23.3217 11.3879 26.1049 14.1711 26.1049 17.6043C26.1049 21.0375 23.3217 23.8207 19.8885 23.8207C17.3384 23.8207 15.1469 22.2851 14.1882 20.0882"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M13.8626 15C14.2286 15.7922 14.4328 16.6744 14.4328 17.6044C14.4328 21.0376 11.6496 23.8208 8.21643 23.8208C4.78322 23.8208 2.00006 21.0376 2.00006 17.6044C2.00006 14.2107 4.71949 11.4522 8.09809 11.3891"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M13.9888 14.4327C17.422 14.4327 20.2051 11.6496 20.2051 8.21637C20.2051 4.78316 17.422 2 13.9888 2C10.5556 2 7.7724 4.78316 7.7724 8.21637C7.7724 11.6496 10.5556 14.4327 13.9888 14.4327Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Cryptocurrency

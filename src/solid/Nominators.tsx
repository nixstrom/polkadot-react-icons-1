import * as React from 'react'
import { SVGProps } from 'react'
const Nominators = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20.9251 5.32275H2C1.30964 5.32275 0.75 5.8824 0.75 6.57275V26.0001C0.75 26.6904 1.30964 27.2501 2 27.2501H21.4273C22.1177 27.2501 22.6773 26.6904 22.6773 26.0001V7.15021L13.2979 19.5433C13.0853 19.8243 12.7639 20.0025 12.4129 20.034C12.0619 20.0654 11.7139 19.9473 11.4546 19.7086L6.27276 14.9385C5.76484 14.4709 5.73213 13.6801 6.19969 13.1722C6.66725 12.6643 7.45803 12.6316 7.96595 13.0991L12.1351 16.9371L20.9251 5.32275Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26.0041 2.75441C26.4208 2.20394 26.3122 1.41996 25.7618 1.00334C25.2113 0.58673 24.4273 0.695248 24.0107 1.24572L20.925 5.32282H21.4273C22.1177 5.32282 22.6773 5.88247 22.6773 6.57282V7.15021L26.0041 2.75441Z"
			fill="black"
		/>
	</svg>
)
export default Nominators

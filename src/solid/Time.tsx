import * as React from 'react'
import { SVGProps } from 'react'
const Time = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14ZM15.0002 6.34783C15.0001 5.79554 14.5524 5.34783 14.0001 5.34784C13.4479 5.34784 13.0001 5.79556 13.0002 6.34785L13.0002 14.9227C13.0002 15.283 13.194 15.6154 13.5075 15.7929C13.821 15.9704 14.2058 15.9656 14.5147 15.7802L19.1301 13.0112C19.6037 12.727 19.7573 12.1128 19.4732 11.6392C19.189 11.1656 18.5748 11.012 18.1012 11.2961L15.0002 13.1566L15.0002 6.34783Z"
			stroke="none"
		/>
	</svg>
)
export default Time

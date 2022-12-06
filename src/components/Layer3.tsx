import * as React from 'react'
import { SVGProps } from 'react'
const Layer3 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_1960)">
			<path
				d="M22.4835 10.2245L14.3224 18.3861L6.16418 10.2272L14.3227 2.06894L22.4835 10.2245Z"
				stroke="black"
				strokeWidth={2.5}
				strokeMiterlimit={10}
				strokeLinejoin="round"
			/>
			<path
				d="M18.4044 14.3067L22.4884 18.3932L14.3223 26.5463L6.16211 18.3861L10.2402 14.3079"
				stroke="black"
				strokeWidth={2.5}
				strokeMiterlimit={10}
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_1960">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.325195 0.307617)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Layer3

import * as React from 'react'
import { SVGProps } from 'react'
const Proxy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_1963)">
			<path
				d="M14.3053 1.8269H6.14819C3.63716 1.8269 1.60156 3.8625 1.60156 6.37353C1.60156 8.88456 3.63715 10.9202 6.14819 10.9202H14.3053M14.2919 1.8269H22.449C24.9601 1.8269 26.9957 3.8625 26.9957 6.37353C26.9957 8.88456 24.9601 10.9202 22.449 10.9202H14.2919"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
			/>
			<path
				d="M14.3053 27.3013H6.14819C3.63716 27.3013 1.60156 25.2657 1.60156 22.7546C1.60156 20.2436 3.63715 18.208 6.14819 18.208H14.3053M14.2919 27.3013H22.449C24.9601 27.3013 26.9957 25.2657 26.9957 22.7546C26.9957 20.2436 24.9601 18.208 22.449 18.208H14.2919"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
			/>
			<path
				d="M14.3252 18.2092L14.3252 10.9214"
				stroke="black"
				strokeWidth={2.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_1963">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.325195 0.56543)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Proxy

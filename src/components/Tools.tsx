import * as React from 'react'
import { SVGProps } from 'react'
const Tools = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_2470)">
			<path
				d="M11.5146 6.86865H4.43701M11.5146 20.3015V5.35201C11.5146 3.3976 9.9302 1.81323 7.97579 1.81323V1.81323C6.02138 1.81323 4.43701 3.3976 4.43701 5.35201L4.43701 20.3015L7.97579 26.0791L11.5146 20.3015Z"
				stroke="black"
				strokeWidth={2.5}
				strokeLinejoin="round"
			/>
			<path
				d="M21.12 7.87964L17.5811 7.87964M21.1196 13.946H17.5811M21.12 19.6521H17.5811M17.5811 1.81323L24.6586 1.81323V26.0791H17.5811V1.81323Z"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_2470">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.547852 0.571289)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Tools

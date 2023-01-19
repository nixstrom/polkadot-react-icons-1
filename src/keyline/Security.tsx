import * as React from 'react'
import { SVGProps } from 'react'
const Security = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1.35229 5.23344V19.7167L11.9277 26.529L22.6478 19.6202V5.23344L11.9952 1.33521L1.35229 5.23344Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M9.26489 12.4983V11.1572C9.26489 10.4318 9.55304 9.73611 10.066 9.22319C10.5789 8.71027 11.2746 8.42212 11.9999 8.42212C12.7235 8.42491 13.4164 8.7143 13.9271 9.22691C14.4377 9.73953 14.7244 10.4336 14.7244 11.1572V12.4983"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M16.3612 12.4983H7.63867V18H16.3612V12.4983Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Security

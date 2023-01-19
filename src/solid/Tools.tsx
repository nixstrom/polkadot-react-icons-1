import * as React from 'react'
import { SVGProps } from 'react'
const Tools = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 0.999998C0 0.447713 0.447715 0 1 0H6.28319C6.83548 0 7.28319 0.447715 7.28319 1V5.23135H0V0.999998ZM0 7.23135H7.28319V19.7726C7.28319 19.957 7.23223 20.1377 7.13595 20.2949L4.49435 24.6077C4.10424 25.2447 3.17895 25.2447 2.78884 24.6077L0.147246 20.2949C0.0509586 20.1377 0 19.957 0 19.7726V7.23135ZM13.5259 0.999999C13.5259 0.447714 13.9736 0 14.5259 0H19.8091C20.3614 0 20.8091 0.447715 20.8091 1V23.9709C20.8091 24.5232 20.3614 24.9709 19.8091 24.9709H14.5259C13.9736 24.9709 13.5259 24.5232 13.5259 23.9709V19.3572H13.5259H17.1677C17.72 19.3572 18.1677 18.9095 18.1677 18.3572C18.1677 17.8049 17.72 17.3572 17.1677 17.3572H13.5259H13.5259V13.4853H13.5259H17.1673C17.7196 13.4853 18.1673 13.0376 18.1673 12.4853C18.1673 11.933 17.7196 11.4853 17.1673 11.4853H13.5259H13.5259V7.24266H13.5259H17.1677C17.72 7.24266 18.1677 6.79494 18.1677 6.24266C18.1677 5.69037 17.72 5.24266 17.1677 5.24266H13.5259H13.5259V0.999999Z"
		/>
	</svg>
)
export default Tools

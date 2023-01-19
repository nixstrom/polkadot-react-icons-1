import * as React from 'react'
import { SVGProps } from 'react'
const MoreVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 7 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.38259 6.76537C1.51444 6.75387 0 5.23007 0 3.36188C0 1.4937 1.51444 -0.0114408 3.38259 6.55348e-05C5.25074 0.0115719 6.76518 1.53537 6.76518 3.40355C6.76518 5.27174 5.25074 6.77688 3.38259 6.76537ZM3.38259 24.3796C1.51444 24.3681 0 22.8443 0 20.9761C0 19.108 1.51444 17.6028 3.38259 17.6143C5.25074 17.6258 6.76518 19.1496 6.76518 21.0178C6.76518 22.886 5.25074 24.3911 3.38259 24.3796ZM0 12.169C0 14.0372 1.51444 15.561 3.38259 15.5725C5.25074 15.584 6.76518 14.0789 6.76518 12.2107C6.76518 10.3425 5.25074 8.8187 3.38259 8.80719C1.51444 8.79569 0 10.3008 0 12.169Z"
		/>
	</svg>
)
export default MoreVertical

import * as React from 'react'
import { SVGProps } from 'react'
const Stake = (props: SVGProps<SVGSVGElement>) => (
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
			d="M22.735 16.924V19.5202C22.735 23.3374 18.0933 25.9999 12.3675 25.9999C6.64169 25.9999 2 23.3374 2 19.5202V16.924"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.3675 22.9761C18.0933 22.9761 22.735 19.8817 22.735 16.0644C22.735 12.2472 18.0933 9.15277 12.3675 9.15277C6.64169 9.15277 2 12.2472 2 16.0644C2 19.8817 6.64169 22.9761 12.3675 22.9761Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.3673 15.3903L12.3673 3M15.4273 5.05979L12.3675 2.00006L9.30781 5.05979"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Stake

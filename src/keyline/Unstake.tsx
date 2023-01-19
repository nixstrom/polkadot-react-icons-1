import * as React from 'react'
import { SVGProps } from 'react'
const Unstake = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M22.735 14.924V17.5202C22.735 21.3374 18.0933 23.9999 12.3675 23.9999C6.64169 23.9999 2 21.3374 2 17.5202V14.924"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.3675 20.9761C18.0933 20.9761 22.735 17.8817 22.735 14.0644C22.735 10.2472 18.0933 7.15277 12.3675 7.15277C6.64169 7.15277 2 10.2472 2 14.0644C2 17.8817 6.64169 20.9761 12.3675 20.9761Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.3678 1.99997L12.3678 14.3903M9.3078 12.3305L12.3676 15.3902L15.4273 12.3305"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Unstake

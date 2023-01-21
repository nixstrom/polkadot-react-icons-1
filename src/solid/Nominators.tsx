import * as React from 'react'
import { SVGProps } from 'react'
const Nominators = (props: SVGProps<SVGSVGElement>) => (
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
			d="M25.6109 1.20267C26.0513 1.53596 26.1381 2.16315 25.8048 2.60353L22.4273 7.06625V26.0001C22.4273 26.5523 21.9796 27.0001 21.4273 27.0001H2C1.44772 27.0001 1 26.5523 1 26.0001V6.57275C1 6.02047 1.44772 5.57275 2 5.57275H21.0493L12.1683 17.3074L7.79663 13.283C7.39029 12.9089 6.75767 12.9351 6.38362 13.3414C6.00957 13.7478 6.03574 14.3804 6.44208 14.7544L11.6239 19.5246C11.8314 19.7155 12.1097 19.81 12.3905 19.7849C12.6713 19.7597 12.9285 19.6171 13.0986 19.3923L22.4273 7.06617V6.57275C22.4273 6.02047 21.9796 5.57275 21.4273 5.57275H21.0494L24.21 1.39658C24.5433 0.956198 25.1705 0.869384 25.6109 1.20267Z"
			stroke="none"
		/>
	</svg>
)
export default Nominators

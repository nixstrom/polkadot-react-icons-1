import * as React from 'react'
import { SVGProps } from 'react'
const LayerTwo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={27}
		height={20}
		viewBox="0 0 27 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M25.4487 8.21439C26.1814 7.8489 26.1883 6.80584 25.4605 6.43067L13.2004 0.111135C12.9171 -0.0349044 12.5811 -0.03713 12.2959 0.105143L0.553647 5.96216C-0.179095 6.32765 -0.186004 7.37072 0.54183 7.74588L4.29492 9.68044L1.12852 11.2598C0.791398 11.428 0.577391 11.7713 0.574895 12.1481C0.5724 12.5248 0.781839 12.871 1.1167 13.0436L12.7507 19.0404C13.034 19.1864 13.37 19.1886 13.6552 19.0464L24.8846 13.4451C25.2217 13.277 25.4358 12.9336 25.4383 12.5569C25.4407 12.1802 25.2313 11.834 24.8964 11.6614L21.7694 10.0496L25.4487 8.21439ZM19.551 11.1561L13.7064 14.0714C13.4212 14.2137 13.0852 14.2115 12.8019 14.0654L6.49851 10.8163L3.78588 12.1693L13.2163 17.0303L22.2273 12.5356L19.551 11.1561Z"
		/>
	</svg>
)
export default LayerTwo

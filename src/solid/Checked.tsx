import * as React from 'react'
import { SVGProps } from 'react'
const Checked = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H26C26.6904 0.75 27.25 1.30964 27.25 2V26C27.25 26.6904 26.6904 27.25 26 27.25H2C1.30964 27.25 0.75 26.6904 0.75 26V2ZM20.1094 11.8788C20.5948 11.3879 20.5903 10.5965 20.0993 10.1111C19.6084 9.62573 18.817 9.63023 18.3316 10.1212L12.5731 15.9456L9.85287 13.4049C9.34835 12.9336 8.55736 12.9606 8.08613 13.4651C7.6149 13.9697 7.64189 14.7606 8.14641 15.2319L11.7545 18.6019C12.2489 19.0637 13.021 19.0483 13.4967 18.5672L20.1094 11.8788Z"
		/>
	</svg>
)
export default Checked

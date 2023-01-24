import * as React from 'react'
import { SVGProps } from 'react'
const Unbond = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M20.3038 6.43753C20.3038 8.88855 17.3237 10.8756 13.6467 10.8756C10.0357 10.8756 7.10374 8.95739 7 6.56673V9.92591C7 12.3769 9.98008 14.364 13.6571 14.364C17.3341 14.364 20.3142 12.3769 20.3142 9.92591C20.3142 9.62319 20.3915 6.72328 20.3047 6.43658L20.3038 6.43753Z" />
		<path d="M13.673 10.8761C17.349 10.8761 20.33 8.88907 20.33 6.43805C20.33 3.98703 17.35 2 13.673 2C9.99596 2 7.01588 3.98703 7.01588 6.43805C7.01588 8.88907 9.99596 10.8761 13.673 10.8761Z" />
		<path
			d="M13.6119 18.4733L13.6119 24.9733M17.2399 22.3721L13.612 26L9.98407 22.3721"
			strokeMiterlimit={10}
			fill="none"
		/>
	</svg>
)
export default Unbond

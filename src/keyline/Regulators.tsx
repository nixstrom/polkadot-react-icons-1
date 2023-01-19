import * as React from 'react'
import { SVGProps } from 'react'
const Regulators = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M6.95403 17.4102L5.92378 14.4867C5.53027 13.3702 5.76224 12.1275 6.53047 11.2296C7.84622 9.69195 10.2185 9.69195 11.5343 11.2296C12.3034 12.1284 12.5345 13.3702 12.141 14.4867L11.1117 17.4093C10.8402 18.18 11.1426 19.0364 11.8367 19.4642L16.0713 22.0702V25.9868H2V22.0693L6.229 19.4642C6.92303 19.0364 7.22544 18.18 6.95403 17.4093V17.4102Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M3 21.9131L15.3942 21.9131" stroke="black" strokeWidth={2.5} />
		<path
			d="M19.532 2H7.57003V10.4193L7.57191 10.4296C8.87545 9.78236 10.518 10.0415 11.5342 11.2295C12.3034 12.1284 12.5344 13.3702 12.1409 14.4866L11.1116 17.4093C10.8402 18.18 11.1426 19.0364 11.8366 19.4641L16.0712 22.0702L16.075 26H25.9718V8.46143L19.532 2Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M25 8.46143H19.5321V3" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Regulators

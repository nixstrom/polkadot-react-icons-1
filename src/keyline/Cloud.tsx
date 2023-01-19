import * as React from 'react'
import { SVGProps } from 'react'
const Cloud = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M21.4647 19.2436H8.06277C4.71439 19.2436 2 16.5292 2 13.1809C2 9.83249 4.71439 7.1181 8.06277 7.1181C8.50272 7.1181 8.93174 7.16496 9.34509 7.25397C9.5 5.85565 10.9169 4.05177 12.0652 3.24989C15.1449 1.09916 19.3438 1.79319 21.4436 4.80005C22.7349 6.64905 22.5 8.85565 22.256 10.7969C23.2553 10.8564 24.2376 11.2679 25.0011 12.0315C26.6574 13.6877 26.6574 16.373 25.0011 18.0292C24.0632 18.9671 22.741 19.2495 21.5711 19.2495"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.7635 9.35175C11.9098 8.30487 10.7132 7.54857 9.34509 7.25397M19.0034 12.0315C19.8961 11.1388 21.0877 10.7273 22.2561 10.7969"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Cloud

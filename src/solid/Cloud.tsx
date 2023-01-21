import * as React from 'react'
import { SVGProps } from 'react'
const Cloud = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.06277 23.2437H22.462C22.4978 23.2475 22.5343 23.2495 22.5711 23.2495C23.8687 23.2495 25.5039 22.9407 26.7083 21.7363C28.755 19.6896 28.755 16.3711 26.7082 14.3244C26.0339 13.6501 25.2203 13.1976 24.3603 12.9676C24.5403 11.2131 24.5592 9.08298 23.2635 7.22752C20.8346 3.74946 16.0065 2.97611 12.4926 5.43005C11.8075 5.9085 11.0882 6.64781 10.5181 7.44813C10.1575 7.95436 9.82031 8.53576 9.59817 9.13816C9.42131 9.12488 9.24276 9.11812 9.06277 9.11812C5.16211 9.11812 2 12.2802 2 16.1809C2 20.0815 5.16211 23.2437 9.06277 23.2437Z"
				stroke="none"
			/>
		</g>
	</svg>
)
export default Cloud

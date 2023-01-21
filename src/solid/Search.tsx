import * as React from 'react'
import { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
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
				d="M4.99414 11.8043C4.99414 6.35876 9.40844 1.94336 14.8551 1.94336C20.3017 1.94336 24.716 6.35876 24.716 11.8043C24.716 14.414 23.7021 16.7872 22.0466 18.5511L25.2958 24.1831C25.5717 24.6613 25.4078 25.2727 24.9297 25.5488L20.8744 27.8904C20.6447 28.0231 20.3717 28.059 20.1155 27.9904C19.8593 27.9217 19.6408 27.7541 19.5082 27.5243L16.0828 21.5895C15.6806 21.6395 15.2708 21.6652 14.8551 21.6652C9.40947 21.6652 4.99414 17.2499 4.99414 11.8043ZM18.117 21.1129L20.7404 25.6583L23.0639 24.3167L20.5074 19.8855C19.777 20.3973 18.974 20.8126 18.117 21.1129Z"
				stroke="none"
			/>
		</g>
	</svg>
)
export default Search

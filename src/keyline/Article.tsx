import * as React from 'react'
import { SVGProps } from 'react'
const Article = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.19507 27.0057V1.5332H14.9313L21.7893 8.39118V27.0057H2.19507Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M21.5 8.85798H15V2" stroke="black" strokeWidth={2.5} />
		<path
			d="M11.0125 5.45215H6.11389V10.3507H11.0125V5.45215Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M6.11382 17.2087H17.8704"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M6.11382 23.0869H17.8704"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Article

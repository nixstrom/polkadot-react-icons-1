import * as React from 'react'
import { SVGProps } from 'react'
const Menu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1.98242 0.669922C1.43014 0.669922 0.982422 1.11764 0.982422 1.66992C0.982422 2.22221 1.43014 2.66992 1.98242 2.66992H25.9824C26.5347 2.66992 26.9824 2.22221 26.9824 1.66992C26.9824 1.11764 26.5347 0.669922 25.9824 0.669922H1.98242ZM0.982422 8.96161C0.982422 8.40932 1.43014 7.96161 1.98242 7.96161H25.9824C26.5347 7.96161 26.9824 8.40932 26.9824 8.96161C26.9824 9.51389 26.5347 9.96161 25.9824 9.96161H1.98242C1.43014 9.96161 0.982422 9.51389 0.982422 8.96161ZM0.982422 16.2532C0.982422 15.7009 1.43014 15.2532 1.98242 15.2532H25.9824C26.5347 15.2532 26.9824 15.7009 26.9824 16.2532C26.9824 16.8055 26.5347 17.2532 25.9824 17.2532H1.98242C1.43014 17.2532 0.982422 16.8055 0.982422 16.2532Z"
		/>
	</svg>
)
export default Menu

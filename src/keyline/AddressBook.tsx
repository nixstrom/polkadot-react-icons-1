import * as React from 'react'
import { SVGProps } from 'react'
const AddressBook = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M5 19.6359L2 19.6359" stroke="black" strokeWidth={2.5} />
		<path d="M5 8.32184L2 8.32184" stroke="black" strokeWidth={2.5} />
		<path
			d="M25.9999 2.00003L25.9999 26.0031L5.22522 26.003L5.22522 2.00003L25.9999 2.00003Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M17.001 12.8205L17.5027 12.2248C18.4049 11.1536 18.333 9.56902 17.3374 8.58397C16.2905 7.54814 14.6048 7.54814 13.5579 8.58397C12.5623 9.56902 12.4904 11.1536 13.3926 12.2248L13.8942 12.8203C14.2261 13.2144 14.0379 13.8197 13.5411 13.9561L12.8161 14.1552C10.8827 14.6862 9.54258 16.444 9.54258 18.449V20.3358H21.3479V18.4457C21.3479 16.4423 20.0092 14.686 18.0775 14.1551L17.3539 13.9563C16.8572 13.8197 16.6691 13.2145 17.001 12.8205Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default AddressBook

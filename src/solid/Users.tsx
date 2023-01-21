import * as React from 'react'
import { SVGProps } from 'react'
const Users = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.4468 2.41515C15.9897 -0.0465857 12.001 -0.0465854 9.54379 2.41515C7.24884 4.71435 7.08245 8.38301 9.15985 10.8805L10.1835 12.1112C10.3733 12.3394 10.2646 12.6874 9.97867 12.767L8.59494 13.1521C4.36911 14.3281 1.44531 18.1767 1.44531 22.5631V26.3709C1.44531 26.9232 1.89303 27.3709 2.44531 27.3709H25.5547C26.107 27.3709 26.5547 26.9232 26.5547 26.3709V22.5697C26.5547 18.1799 23.6282 14.3284 19.3988 13.1523L18.0122 12.7667C17.7263 12.6871 17.6175 12.3391 17.8073 12.111L18.8308 10.8805C20.9082 8.38301 20.7418 4.71435 18.4468 2.41515Z"
			stroke="none"
		/>
	</svg>
)
export default Users

import * as React from 'react'
import { SVGProps } from 'react'
const MobileApp = (props: SVGProps<SVGSVGElement>) => (
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
			d="M5 2.33008C5 1.77779 5.44772 1.33008 6 1.33008H22.5109C23.0632 1.33008 23.5109 1.77779 23.5109 2.33008V26.3301C23.5109 26.8824 23.0632 27.3301 22.5109 27.3301H6C5.44772 27.3301 5 26.8824 5 26.3301V2.33008ZM13.3052 22.0425C12.753 22.0425 12.3052 22.4902 12.3052 23.0425C12.3052 23.5948 12.753 24.0425 13.3052 24.0425H15.205C15.7573 24.0425 16.205 23.5948 16.205 23.0425C16.205 22.4902 15.7573 22.0425 15.205 22.0425H13.3052Z"
			stroke="none"
		/>
	</svg>
)
export default MobileApp

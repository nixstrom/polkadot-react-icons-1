import * as React from 'react'
import { SVGProps } from 'react'
const DeriveAnAddress = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M12.1663 20.3708L6.57475 11.5642" />
		<path d="M16.0958 20.3709L21.6328 11.748" />
		<path d="M14.1048 11.7479L14.1048 19.6567" />
		<path d="M14.1354 19.6568C15.7109 19.6568 16.9881 20.9339 16.9881 22.5094C16.9881 24.0849 15.7109 25.3621 14.1354 25.3621C12.56 25.3621 11.2828 24.0849 11.2828 22.5094C11.2828 20.9339 12.56 19.6568 14.1354 19.6568Z" />
		<path d="M6.74805 7H2V11.7481H6.74805V7Z" strokeMiterlimit={10} />
		<path d="M16.5096 7H11.7615V11.7481H16.5096V7Z" strokeMiterlimit={10} />
		<path d="M26 7H21.2519V11.7481H26V7Z" strokeMiterlimit={10} />
	</svg>
)
export default DeriveAnAddress

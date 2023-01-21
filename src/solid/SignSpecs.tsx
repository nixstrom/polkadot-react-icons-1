import * as React from 'react'
import { SVGProps } from 'react'
const SignSpecs = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.739 11.226L15.7202 14.2448L15.7202 2.93311H26.9941C27.5464 2.93311 27.9941 3.38082 27.9941 3.93311V24.1521C27.9941 24.7044 27.5464 25.1521 26.9941 25.1521H2.99414C2.44186 25.1521 1.99414 24.7044 1.99414 24.1521V3.93311C1.99414 3.38082 2.44186 2.93311 2.99414 2.93311H13.7202V14.24L10.7005 11.2254C10.3097 10.8352 9.67652 10.8357 9.28632 11.2266C8.89612 11.6174 8.89665 12.2506 9.2875 12.6408L14.0175 17.3629C14.4081 17.7529 15.0408 17.7526 15.4311 17.3623L20.1532 12.6402C20.5437 12.2497 20.5437 11.6165 20.1532 11.226C19.7627 10.8355 19.1295 10.8355 18.739 11.226Z"
			stroke="none"
		/>
	</svg>
)
export default SignSpecs

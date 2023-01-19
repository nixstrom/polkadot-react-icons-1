import * as React from 'react'
import { SVGProps } from 'react'
const BootNode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.76626 17.2598C10.0322 17.9219 11.4724 18.2963 13 18.2963C14.5799 18.2963 16.0662 17.8958 17.363 17.1908L19.1268 19.7587C18.6068 20.4154 18.2963 21.2455 18.2963 22.1481C18.2963 24.2755 20.0208 26 22.1481 26C24.2755 26 26 24.2755 26 22.1481C26 20.0208 24.2755 18.2963 22.1481 18.2963C21.6485 18.2963 21.171 18.3914 20.7329 18.5646L19.0053 16.0494C20.931 14.3723 22.1481 11.9023 22.1481 9.14815C22.1481 4.09577 18.0524 0 13 0C7.94762 0 3.85185 4.09577 3.85185 9.14815C3.85185 11.9549 5.11584 14.4664 7.10563 16.1445L5.37872 18.6108C4.91056 18.4084 4.3943 18.2963 3.85185 18.2963C1.72453 18.2963 0 20.0208 0 22.1481C0 24.2755 1.72453 26 3.85185 26C5.97917 26 7.7037 24.2755 7.7037 22.1481C7.7037 21.2897 7.42287 20.4968 6.94807 19.8564L8.76626 17.2598ZM9.31053 8.89155C9.70105 8.50102 10.3342 8.50101 10.7247 8.89152L12.0783 10.245V5.63979C12.0783 5.0875 12.526 4.63979 13.0783 4.63979C13.6306 4.63979 14.0783 5.0875 14.0783 5.63979V10.245L15.4317 8.89154C15.8222 8.50101 16.4554 8.50101 16.8459 8.89154C17.2365 9.28206 17.2365 9.91523 16.8459 10.3058L13.7854 13.3663C13.3949 13.7568 12.7617 13.7568 12.3712 13.3663L9.31056 10.3058C8.92003 9.91525 8.92002 9.28208 9.31053 8.89155Z"
		/>
	</svg>
)
export default BootNode

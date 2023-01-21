import * as React from 'react'
import { SVGProps } from 'react'
const DerivationPath = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.7458 5.72424C18.7458 3.11512 16.6307 1 14.0215 1C11.4124 1 9.29729 3.11512 9.29729 5.72424C9.29729 7.99024 10.8927 9.88362 13.0215 10.3424V13.3726H5.57671C5.02443 13.3726 4.57671 13.8203 4.57671 14.3726L4.57671 17.7937C2.52212 18.3063 1 20.1642 1 22.3776C1 24.9867 3.11512 27.1018 5.72424 27.1018C8.33337 27.1018 10.4485 24.9867 10.4485 22.3776C10.4485 20.0595 8.77894 18.1314 6.57672 17.73V15.3726L21.2757 15.3726V17.7594C19.1469 18.2182 17.5515 20.1116 17.5515 22.3776C17.5515 24.9867 19.6666 27.1018 22.2758 27.1018C24.8849 27.1018 27 24.9867 27 22.3776C27 20.1115 25.4046 18.2181 23.2757 17.7594V14.3726C23.2757 13.8203 22.828 13.3726 22.2757 13.3726H15.0215V10.3425C17.1503 9.88369 18.7458 7.99028 18.7458 5.72424Z"
			stroke="none"
		/>
	</svg>
)
export default DerivationPath

import * as React from 'react'
import { SVGProps } from 'react'
const Utility = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M20.9399 24.3129L17.2934 26.4121L14.7854 23.6251H13.1634L10.6254 26.3721L4.90338 23.0681L6.07737 19.4751L5.28137 18.1021L1.60938 17.2661V10.6581L5.31138 9.88206L6.09737 8.50906L4.99237 4.90606L10.7144 1.61206L13.2124 4.39906H14.8344L17.3824 1.66206L23.0944 4.95606L21.9504 8.49906L22.7764 9.93206L26.3894 10.7581V18.2621L22.7564 19.0281L22.3441 19.2979" />
		<path
			d="M16.3475 19.3776C15.5643 19.7935 14.6777 20.0435 13.736 20.0666C10.4945 20.1462 7.80311 17.5839 7.72349 14.3424C7.69987 13.3808 7.91538 12.463 8.30208 11.6501L12.212 15.3629L14.9484 12.4886L11.1299 8.86291C11.8361 8.53808 12.6148 8.34042 13.4475 8.31997C16.6889 8.24034 19.3803 10.8027 19.46 14.0442C19.4807 14.8868 19.3219 15.6941 19.0126 16.4257L26.1316 23.3577L23.3952 26.2319L16.3475 19.3776Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Utility

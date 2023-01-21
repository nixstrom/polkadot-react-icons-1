import * as React from 'react'
import { SVGProps } from 'react'
const ArchiveNode = (props: SVGProps<SVGSVGElement>) => (
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
			d="M23.2282 19.4399C25.3113 19.4399 27 21.1286 27 23.2118C27 25.2949 25.3113 26.9836 23.2282 26.9836C21.1451 26.9836 19.4564 25.2949 19.4564 23.2118C19.4564 22.3414 19.7512 21.5399 20.2463 20.9017L18.226 17.9604C16.9661 18.6308 15.5281 19.0108 14.0013 19.0108C12.4801 19.0108 11.047 18.6336 9.79035 17.9676L7.74432 20.8897C8.24514 21.5298 8.54364 22.3359 8.54364 23.2118C8.54364 25.2949 6.85494 26.9836 4.77182 26.9836C2.68871 26.9836 1.00001 25.2949 1.00001 23.2118C1.00001 21.1286 2.68871 19.4399 4.77182 19.4399C5.25405 19.4399 5.71513 19.5304 6.13903 19.6954L8.13793 16.8406C6.21439 15.1891 4.99593 12.7395 4.99593 10.0054C4.99593 5.03185 9.02778 0.999999 14.0013 0.999999C18.9749 1 23.0067 5.03185 23.0067 10.0054C23.0067 12.734 21.7932 15.1792 19.8764 16.8306L21.8477 19.7006C22.2752 19.5323 22.7409 19.4399 23.2282 19.4399ZM16.8765 7.37703C17.267 7.76755 17.267 8.40072 16.8765 8.79124L15.5858 10.082L16.8764 11.3726C17.2669 11.7632 17.2669 12.3963 16.8764 12.7869C16.4859 13.1774 15.8527 13.1774 15.4622 12.7869L14.1715 11.4962L12.8807 12.787C12.4902 13.1775 11.857 13.1775 11.4665 12.787C11.076 12.3965 11.076 11.7633 11.4665 11.3728L12.7573 10.082L11.4664 8.79109C11.0759 8.40057 11.0759 7.7674 11.4664 7.37688C11.857 6.98635 12.4901 6.98635 12.8807 7.37688L14.1715 8.66776L15.4623 7.37703C15.8528 6.9865 16.486 6.9865 16.8765 7.37703Z"
			stroke="none"
		/>
	</svg>
)
export default ArchiveNode

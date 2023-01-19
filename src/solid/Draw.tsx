import * as React from 'react'
import { SVGProps } from 'react'
const Draw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.3244 2.87182C18.7249 2.46023 18.7934 1.82873 18.4905 1.34084C18.1877 0.852946 17.5913 0.634186 17.0448 0.810486L3.75907 5.0962C3.10206 5.30814 2.74125 6.01257 2.95319 6.66959C3.16513 7.32661 3.86956 7.68741 4.52658 7.47547L13.0242 4.7343L1.10406 16.9856C0.745169 17.3544 0.649033 17.9056 0.861848 18.3742C1.07466 18.8427 1.55293 19.133 2.06684 19.1055L4.96705 18.9501L3.61007 24.5969C3.50842 25.0199 3.63398 25.4653 3.94158 25.7729C4.24918 26.0805 4.69457 26.206 5.11754 26.1044L11.4279 24.5879C11.652 24.5341 11.8568 24.4194 12.0197 24.2564L18.0256 18.2505L22.4782 18.012L17.8872 22.0628C17.3696 22.5196 17.3202 23.3095 17.777 23.8271C18.2337 24.3448 19.0236 24.3942 19.5413 23.9374L26.827 17.5088C27.226 17.1568 27.3584 16.5908 27.1569 16.0983C26.9555 15.6059 26.4644 15.2949 25.9331 15.3233L19.8427 15.6496L13.6729 9.47985L6.80466 16.3481L5.12485 16.4381L18.3244 2.87182ZM19.7487 5.17178C19.2606 4.68363 18.4691 4.68363 17.981 5.17178L15.4407 7.71208L22.0024 14.2738L24.5427 11.7335C25.0308 11.2453 25.0308 10.4539 24.5427 9.96572L19.7487 5.17178Z"
		/>
	</svg>
)
export default Draw

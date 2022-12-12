import * as React from "react";
import { SVGProps } from "react";
const Teleport = (props: SVGProps<SVGSVGElement>) => <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.21137 8.83656L10.5766 10.5552C8.32027 10.4154 6.32551 10.0854 4.79689 9.63573C3.76201 9.33127 2.99737 8.98818 2.51403 8.65197C2.2746 8.48542 2.13696 8.34301 2.06476 8.2392C1.9991 8.14478 1.99993 8.10201 2 8.09876L2 8.09861V8.09854C2 8.09403 2 8.07225 2.02425 8.02466C2.05087 7.97244 2.10614 7.89129 2.2146 7.78667C2.43787 7.57129 2.81792 7.32204 3.38577 7.06897C4.48197 6.58044 6.08554 6.16177 8.04138 5.89163C8.13473 6.94134 8.52267 7.97093 9.21137 8.83656ZM21.2031 9.63573C19.7586 10.0607 17.8978 10.3787 15.7934 10.5304L17.1395 8.83656C17.8172 7.98472 18.2037 6.97412 18.3048 5.9418C20.1013 6.21187 21.5792 6.60868 22.61 7.06726C23.1793 7.32056 23.5606 7.57017 23.7846 7.78597C23.8935 7.8908 23.9489 7.97215 23.9757 8.0245C24 8.07221 24 8.09403 24 8.09854V8.09861L24 8.09876C24.0001 8.10201 24.0009 8.14478 23.9352 8.2392C23.863 8.34301 23.7254 8.48542 23.486 8.65197C23.0026 8.98818 22.238 9.33127 21.2031 9.63573ZM23.4229 5.23994C22.0723 4.63904 20.2316 4.18022 18.1304 3.8968C17.8967 3.04737 17.4602 2.24788 16.8245 1.58217C14.8099 -0.527389 11.541 -0.527389 9.5263 1.58217C8.90271 2.2352 8.47081 3.01697 8.234 3.84833L7.96266 3.88412C5.82009 4.16675 3.94285 4.63109 2.57164 5.24217C1.8888 5.54648 1.27949 5.90985 0.82609 6.34721C0.370861 6.78632 0 7.37572 0 8.09861C0 9.07989 0.670198 9.80567 1.37196 10.2938C2.10307 10.8024 3.09575 11.22 4.23242 11.5544C6.51887 12.2271 9.61837 12.629 13 12.629C16.3816 12.629 19.4811 12.2271 21.7676 11.5544C22.9042 11.22 23.8969 10.8024 24.628 10.2938C25.3298 9.80567 26 9.07989 26 8.09861C26 7.37475 25.6282 6.78481 25.1721 6.3455C24.7178 5.9079 24.1072 5.54436 23.4229 5.23994ZM6.84756 17.9802C6.09784 18.1175 5.40988 18.2786 4.79689 18.4589C3.76201 18.7634 2.99737 19.1065 2.51403 19.4427C2.2746 19.6093 2.13696 19.7517 2.06476 19.8555C1.9991 19.9499 1.99993 19.9927 2 19.9959L2 19.9961L2.00006 19.9968L2.00079 20.0009C2.00175 20.0052 2.00437 20.0149 2.01135 20.0305C2.02579 20.0626 2.05854 20.1191 2.12865 20.1968C2.27441 20.3584 2.53304 20.5588 2.93943 20.7753C3.66316 21.161 4.70901 21.5215 5.99999 21.8144V20.6802C5.99999 19.6891 6.30954 18.7573 6.84756 17.9802ZM5.99999 23.8609C4.42489 23.5337 3.03025 23.09 1.99887 22.5404C1.47584 22.2617 0.999887 21.9315 0.643425 21.5362C0.282468 21.136 0 20.6162 0 19.9961C0 19.0148 0.670198 18.289 1.37196 17.8009C2.10307 17.2923 3.09575 16.8747 4.23242 16.5403C6.51887 15.8676 9.61837 15.4656 13 15.4656C16.3816 15.4656 19.4811 15.8676 21.7676 16.5403C22.9042 16.8747 23.8969 17.2923 24.628 17.8009C25.3298 18.289 26 19.0148 26 19.9961C26 20.6151 25.7189 21.1346 25.3586 21.5352C25.0029 21.9308 24.5278 22.2611 24.0055 22.54C23.1979 22.9712 22.167 23.3372 21 23.6329V25C21 25.5523 20.5523 26 20 26H6.99999C6.4477 26 5.99999 25.5523 5.99999 25V23.8609ZM21 21.5624V20.6802C21 19.7901 20.7503 18.9478 20.3096 18.2225C20.6225 18.2969 20.9208 18.3759 21.2031 18.4589C22.238 18.7634 23.0026 19.1065 23.486 19.4427C23.7254 19.6093 23.863 19.7517 23.9352 19.8555C24.0009 19.9499 24.0001 19.9927 24 19.9959L24 19.9961L23.9999 19.9972C23.9999 19.9978 23.9997 19.9993 23.9991 20.0016C23.9981 20.006 23.9955 20.0159 23.9885 20.0315C23.9741 20.0638 23.9414 20.1202 23.8716 20.1978C23.7265 20.3592 23.4688 20.5593 23.0635 20.7757C22.5372 21.0568 21.8396 21.3245 21 21.5624Z" fill="black" /></svg>;
export default Teleport;
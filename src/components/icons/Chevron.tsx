import { SVGProps } from "react"

const Chevron = (props: SVGProps<SVGSVGElement>) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 -960 960 960"
   height="42"
   width="42"
   fill="currentColor"
   {...props}
  >
   <path
    d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
   />
  </svg>
 )
}

export default Chevron
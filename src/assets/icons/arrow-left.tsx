import { SVGProps, memo } from 'react'

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path d={'m10.3 11-3-3 3-3-1-1-4 4 4 4 1-1Z'} fill={'currentColor'} />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'var(--light-100)'} />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(ArrowLeft)

export { Memo as ReactComponent }

import { SVGProps } from 'react'

export const DotsIcon = ({ height = 24, width = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={height} viewBox={'0 0 24 24'} width={width} {...props}>
    <path
      d={
        'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      }
      fill={'currentColor'}
    />
  </svg>
)

import { ReactNode } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

import { ImageOutline } from '../../assets'

type AvatarPropsType = {
  className?: string
  defaultImage?: ReactNode
  name?: string
  photo?: string
  size?: number
}

export const Avatar = ({
  className,
  defaultImage = <ImageOutline />,
  photo,
  size = 204,
}: AvatarPropsType) => {
  const rootClass = clsx(s.avatarRoot, className)

  return (
    <AvatarRadix.Root className={rootClass}>
      <AvatarRadix.Image
        alt={` avatar`}
        className={s.avatarImage}
        height={size}
        src={photo}
        title={` avatar`}
        width={size}
      />
      <AvatarRadix.Fallback
        className={s.avatarFallback}
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        {defaultImage}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}

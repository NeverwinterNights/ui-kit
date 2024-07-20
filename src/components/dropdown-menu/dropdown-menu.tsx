import { ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownRadixMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

import { DotsIcon } from '../../assets'
import { Button } from '../button'

type PropsType = {
  buttonIcon?: ReactNode
} & DropdownRadixMenu.DropdownMenuContentProps &
  DropdownRadixMenu.DropdownMenuProps

export const DropdownMenu = forwardRef<ElementRef<typeof DropdownRadixMenu.Root>, PropsType>(
  (props: PropsType, ref) => {
    const { align = 'end', buttonIcon = <DotsIcon />, children, className, sideOffset } = props
    const classNames = {
      mainIcon: clsx(className, s.mainIcon),
    }

    return (
      <DropdownRadixMenu.Root>
        <DropdownRadixMenu.Trigger asChild>
          <Button className={classNames.mainIcon} variant={'withIcon'}>
            {buttonIcon}
          </Button>
        </DropdownRadixMenu.Trigger>

        <DropdownRadixMenu.Portal>
          <DropdownRadixMenu.Content
            align={align}
            className={s.content}
            ref={ref}
            sideOffset={sideOffset}
          >
            {children}
          </DropdownRadixMenu.Content>
        </DropdownRadixMenu.Portal>
      </DropdownRadixMenu.Root>
    )
  }
)

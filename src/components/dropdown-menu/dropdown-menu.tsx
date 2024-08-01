import { CSSProperties, ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownRadixMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

import { DotsIcon } from '../../assets'
import { Button } from '../button'
import { Typography } from '../typography'

type PropsType = {
  buttonIcon?: ReactNode
  onClickDropDown?: (value: boolean) => void
} & DropdownRadixMenu.DropdownMenuContentProps &
  DropdownRadixMenu.DropdownMenuProps

export const DropdownMenu = forwardRef<ElementRef<typeof DropdownRadixMenu.Root>, PropsType>(
  (props: PropsType, ref) => {
    const {
      align = 'end',
      buttonIcon = <DotsIcon />,
      children,
      className,
      onClickDropDown,
      sideOffset,
    } = props
    const classNames = {
      mainIcon: clsx(className, s.mainIcon),
    }

    const onOpenChangeHandler = (value: boolean) => {
      onClickDropDown && onClickDropDown(value)
    }

    return (
      <DropdownRadixMenu.Root onOpenChange={onOpenChangeHandler}>
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

export type DropdownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect: (event: Event) => void
  style?: CSSProperties
}

export const DropdownItem = ({
  children,
  className,
  disabled,
  onSelect,
  style,
}: DropdownItemProps) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownRadixMenu.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
    >
      {children}
    </DropdownRadixMenu.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}: DropdownItemWithIconProps) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: clsx(s.itemIcon, disabled && s.disabled),
  }

  return (
    <DropdownRadixMenu.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <div>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'medium_text_14'}>{text}</Typography>
      </div>
    </DropdownRadixMenu.Item>
  )
}

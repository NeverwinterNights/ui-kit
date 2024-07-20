import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './../radio-button.module.scss'

import { Typography } from '../../typography'

type RadioItemProps = {
  title: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = forwardRef<ElementRef<typeof RadioGroup.Item>, RadioItemProps>(
  ({ className, id, title, value }, ref) => {
    const classNames = {
      indicator: clsx(s.indicator),
      item: clsx(s.item, className),
    }

    return (
      <div className={s.container}>
        <RadioGroup.Item className={classNames.item} id={id} ref={ref} value={value}>
          <RadioGroup.Indicator className={classNames.indicator} />
        </RadioGroup.Item>
        <Typography
          asComponent={'label'}
          className={s.label}
          htmlFor={id}
          variant={'regular_text_14'}
        >
          {title}
        </Typography>
      </div>
    )
  }
)

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import { RadioItem } from './radio-item/radio-item'

type Options = {
  title: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  options: Options[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioButton = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupProps>(
  ({ className, defaultValue, onValueChange, options, value }, ref) => {
    const buttons = options.map(el => (
      <RadioItem id={el.value} key={el.title} title={el.title} value={el.value} />
    ))

    return (
      <RadioGroup.Root
        className={className}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
      >
        {buttons}
      </RadioGroup.Root>
    )
  }
)

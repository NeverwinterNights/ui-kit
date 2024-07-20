import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { Check } from '../../assets'
import { Typography } from '../typography'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  onBlur?: () => void
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  errorMessage,
  id,
  label,
  onBlur,
  onChange,
  position,
  required,
}: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography asComponent={'label'} className={s.wrap} variant={'regular_text_14'}>
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                checked={checked}
                className={classNames.root}
                disabled={disabled}
                id={id}
                onBlur={onBlur}
                onCheckedChange={onChange}
                required={required}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check disabled={disabled ? disabled : false} />
                  </CheckboxRadix.Indicator>
                )}
              </CheckboxRadix.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
      {errorMessage && (
        <Typography className={s.errorMessage} color={'error'} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

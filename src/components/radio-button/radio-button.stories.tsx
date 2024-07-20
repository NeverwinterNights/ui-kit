import { useState } from 'react'

import { Meta } from '@storybook/react'

import { RadioButton, RadioGroupProps } from './radio-button'

const options = [
  { title: 'cat', value: 'cat' },
  { title: 'dog', value: 'dog' },
  { title: 'frog', value: 'frog' },
]

export default {
  component: RadioButton,
  tags: ['autodocs'],
  title: 'UI Components/RadioButton',
} satisfies Meta<typeof RadioButton>

export const RadioButtonWithState = {
  args: {
    defaultValue: 'cat',
    options: options,
  },

  render: (args: RadioGroupProps) => {
    const [value, setValue] = useState('')
    const radioButtonHandler = (item: string) => {
      setValue(item)
    }

    return <RadioButton {...args} onValueChange={radioButtonHandler} value={value} />
  },
}

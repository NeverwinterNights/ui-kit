import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './index'

const meta = {
  argTypes: {
    label: [''],
  },
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=5783-12902&mode=dev',
    },
  },
  tags: ['autodocs'],
  title: 'UI Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: { label: 'Click me' },
  render: () => {
    const [value, setValue] = useState(false)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return <Checkbox checked={value} label={'Click me'} onChange={onChange} />
  },
}
export const CheckboxControlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(false)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return <Checkbox checked={value} onChange={onChange} />
  },
}

export const CheckboxControlledWithLabel: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(true)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return (
      <Checkbox
        checked={value}
        errorMessage={'Error message'}
        label={'Click me'}
        onChange={onChange}
      />
    )
  },
}

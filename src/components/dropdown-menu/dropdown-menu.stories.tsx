import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './index'

const meta = {
  args: {
    align: 'start',
  },
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'UI Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

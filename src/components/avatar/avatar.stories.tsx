import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './avatar'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'UI Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
export type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithUserPhoto: Story = {
  args: {
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-P8bA7CjEhkhrfV_4YB-nrGOFRs0gB4OOw&usqp=CAU',
    size: 136,
  },
}

export const WithoutUserPhoto: Story = {
  args: {},
}

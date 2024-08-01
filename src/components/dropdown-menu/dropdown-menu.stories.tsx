import type { Meta, StoryObj } from '@storybook/react'

import { Edit, Play, Trash } from '../../assets'
import { DropdownItemWithIcon } from './dropdown-menu'
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

// export const Default: Story = {}

export const Default: Story = {
  render: args => {
    return (
      <div>
        <DropdownMenu {...args}>
          <DropdownItemWithIcon icon={<Play />} onSelect={() => {}} text={'Learn'} />
          <DropdownItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Edit'} />
          <DropdownItemWithIcon icon={<Trash />} onSelect={() => {}} text={'Delete'} />
        </DropdownMenu>
      </div>
    )
  },
}
export const WithAlign: Story = {
  args: {
    align: 'center',
    children: <></>,
  },
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DropdownMenu {...args}>
          <>
            <DropdownItemWithIcon icon={<Play />} onSelect={() => {}} text={'Learn'} />
            <DropdownItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Edit'} />
            <DropdownItemWithIcon icon={<Trash />} onSelect={() => {}} text={'Delete'} />
          </>
        </DropdownMenu>
      </div>
    )
  },
}
export const AllDisabled: Story = {
  args: {
    align: 'center',
    children: <></>,
  },
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DropdownMenu {...args}>
          <>
            <DropdownItemWithIcon disabled icon={<Play />} onSelect={() => {}} text={'Learn'} />
            <DropdownItemWithIcon disabled icon={<Edit />} onSelect={() => {}} text={'Edit'} />
            <DropdownItemWithIcon disabled icon={<Trash />} onSelect={() => {}} text={'Delete'} />
          </>
        </DropdownMenu>
      </div>
    )
  },
}

// export const WithTriggerButton: Story = {
//   render: args => {
//     return (
//       <div>
//         <DropdownMenu
//           trigger={
//             <button>
//               <Button variant={'primary'}>Trigger?</Button>
//             </button>
//           }
//           {...args}
//         >
//           <>
//             <DropdownRadixMenu.Item onClick={() => {}}>
//               <Typography variant={'regular_text_14'}>Follow</Typography>
//             </DropdownRadixMenu.Item>
//             <DropdownRadixMenu.Item onClick={() => {}}>
//               <Typography variant={'regular_text_14'}>Copy Link</Typography>
//             </DropdownRadixMenu.Item>
//           </>
//         </DropdownMenu>
//       </div>
//     )
//   },
// }

import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button } from '../button'
import { Typography } from '../typography'
import { FixModal, FixModalType, HeaderContent } from './fix-modal'

export default {
  component: FixModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'UI Components/FixModal',
} satisfies Meta<typeof FixModal>

const commonArgs = {
  children: (
    <>
      <Typography variant={'regular_text_16'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
    </>
  ),
  open: true,
}

export const DefaultModal = {
  args: {
    ...commonArgs,
    title: 'Default modal',
  },
  render: (args: FixModalType) => {
    const [open, setOpen] = useState(false)

    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened} variant={'primary'}>
          Open modal
        </Button>
        <FixModal {...args} onOpenChange={handleModalClosed} open={open}>
          <Typography variant={'regular_text_16'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </FixModal>
      </>
    )
  },
}

export const ModalWithSaveButton = {
  args: {
    ...commonArgs,
    title: 'With One Button',
  },
  render: (args: FixModalType) => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened} variant={'primary'}>
          Open modal
        </Button>
        <FixModal {...args} onOpenChange={setOpen} open={open}>
          <>
            <Typography variant={'regular_text_16'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleModalClosed} variant={'primary'}>
                Save
              </Button>
            </div>
          </>
        </FixModal>
      </>
    )
  },
}

export const ModalWithDoubleButton = {
  args: {
    ...commonArgs,
    title: 'With two Buttons',
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    const headerTitle: HeaderContent = {
      title: 'close',
      type: 'title',
    }

    return (
      <>
        <Button onClick={handleModalOpened} variant={'primary'}>
          Open modal
        </Button>
        <FixModal headerContent={headerTitle} onOpenChange={setOpen} open={open}>
          <>
            <Typography variant={'regular_text_16'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleModalClosed} variant={'primary'}>
                Save
              </Button>
              <Button onClick={handleModalClosed} variant={'secondary'}>
                Cancel
              </Button>
            </div>
          </>
        </FixModal>
      </>
    )
  },
}

import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Typography } from '../typography'
import { Modal, ModalType } from './index'

export default {
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'UI Components/Modal',
} satisfies Meta<typeof Modal>

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
  render: (args: ModalType) => {
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
        <Modal {...args} isOpen={open} onOpenChange={handleModalClosed}>
          <Typography variant={'regular_text_16'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Modal>
      </>
    )
  },
}

export const ModalWithSaveButton = {
  args: {
    ...commonArgs,
    title: 'With One Button',
  },
  render: (args: ModalType) => {
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
        <Modal {...args} isOpen={open} onOpenChange={handleModalClosed}>
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
        </Modal>
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

    return (
      <>
        <Button onClick={handleModalOpened} variant={'primary'}>
          Open modal
        </Button>
        <Modal isOpen={open} onOpenChange={handleModalClosed} title={'With two Buttons'}>
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
        </Modal>
      </>
    )
  },
}

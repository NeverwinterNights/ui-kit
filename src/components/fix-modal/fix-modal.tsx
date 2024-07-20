import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './fix-modal.module.scss'

import { CloseModal } from '../../assets'
import { Card } from '../card'
import { Typography } from '../typography'

type TitleContent = { title: string; type: 'title' }
type NodeContent = { node: ReactNode; type: 'node' }

export type HeaderContent = NodeContent | TitleContent

export type FixModalType = {
  className?: string
  headerContent?: HeaderContent
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const FixModal = forwardRef<ElementRef<typeof Dialog.Content>, FixModalType>(
  ({ children, className, headerContent, open, ...restProps }, ref) => {
    const classNames = {
      closeButton: clsx(s.iconButton),
      container: clsx(s.dialogContent),
      content: clsx(className ? className : s.content),
    }

    return (
      <Dialog.Root open={open} {...restProps}>
        {open && (
          <Dialog.Portal>
            <Dialog.Overlay className={s.dialogOverlay} />
            <Dialog.Content className={classNames.container} ref={ref}>
              <Card>
                <div className={s.header}>
                  {headerContent?.type === 'title' && (
                    <>
                      <Dialog.Title>
                        <Typography variant={'h1'}>{headerContent.title}</Typography>
                      </Dialog.Title>
                      <Dialog.Close aria-label={'Close'} className={classNames.closeButton}>
                        <CloseModal />
                      </Dialog.Close>
                    </>
                  )}
                  {headerContent?.type === 'node' && <>{headerContent.node}</>}
                </div>
                <div className={classNames.content}>{children}</div>
              </Card>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    )
  }
)

FixModal.displayName = 'FixModal'

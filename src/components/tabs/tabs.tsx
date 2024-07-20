import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type SwitcherOptions = {
  disabled: boolean
  label: string
  value: string
}

//Тут изменил onChange на onValueChange так как ругался TS когда передавал в onChange свою функцию
type TabsProps = {
  className?: string
  content?: ReactNode
  disabled?: boolean
  tabs: SwitcherOptions[]
} & ComponentPropsWithoutRef<typeof TabsRadixUI.Root>

export const Tabs = ({
  children,
  className,
  content,
  defaultValue,
  tabs,
  value,
  ...rest
}: TabsProps) => {
  return (
    <TabsRadixUI.Root className={className} defaultValue={defaultValue} value={value} {...rest}>
      <TabsRadixUI.List className={s.tabsList}>
        {tabs?.map(tab => (
          <TabsRadixUI.Trigger
            className={`${s.item} ${tab.disabled ? s.disabled : ''}`}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      <div>{children}</div>
    </TabsRadixUI.Root>
  )
}

type ContentForTabsProps = {} & ComponentPropsWithoutRef<typeof TabsRadixUI.Content>
export const TabsContent = ({ children, value, ...rest }: ContentForTabsProps) => {
  return (
    <TabsRadixUI.Content value={value} {...rest}>
      {children}
    </TabsRadixUI.Content>
  )
}

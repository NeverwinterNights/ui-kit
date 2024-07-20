import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Card } from '../card'
import { Tabs, TabsContent } from './tabs'

const meta = {
  component: Tabs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-7411&mode=dev',
    },
  },
  tags: ['autodocs'],
  title: 'UI Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabsList = [
  { disabled: false, label: 'Account', value: 'tab1' },
  { disabled: false, label: 'Submit', value: 'tab2' },
  { disabled: false, label: 'Change', value: 'tab3' },
  { disabled: true, label: 'Password', value: 'tab4' },
  { disabled: true, label: 'Email', value: 'tab5' },
]

export const Large: Story = {
  args: {
    tabs: tabsList,
  },
}

export const TabsWithContent = {
  render: () => {
    const [tabsContentValue, setTabsContentValue] = useState('1')

    const tabsList = [
      { disabled: false, label: 'General information', value: '1' },
      { disabled: false, label: 'Devices', value: '2' },
      { disabled: false, label: 'Account Management', value: '3' },
      { disabled: false, label: 'My payments', value: '4' },
    ]

    const onTabsChangeHandler = (value: string) => {
      setTabsContentValue(value)
    }

    return (
      <Tabs onValueChange={onTabsChangeHandler} tabs={tabsList} value={tabsContentValue}>
        <Card
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '500px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <TabsContent value={'1'}>
            <div>General information</div>
          </TabsContent>
          <TabsContent value={'2'}>
            <div>Devices</div>
          </TabsContent>
          <TabsContent value={'3'}>
            <div>Account Management</div>
          </TabsContent>
          <TabsContent value={'4'}>
            <div>My payments</div>
          </TabsContent>
        </Card>
      </Tabs>
    )
  },
}

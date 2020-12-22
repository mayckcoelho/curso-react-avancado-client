import { Story, Meta } from '@storybook/react/types-6-0'
import Main from 'components/Main'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = args => <Main {...args} />

// import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from 'components/Logo'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story<LogoProps> = args => <Logo {...args} />
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: 'CSSToJs/Button',
  component: Button,
  argTypes: { handleOnClickButton: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Convert = Template.bind({})
Convert.args = {
  title: 'Convert',
  type: 'convert',
}

export const Clear = Template.bind({})
Clear.args = {
  title: 'Clear',
  type: 'clear',
}

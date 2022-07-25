import { ComponentStory, ComponentMeta } from '@storybook/react'
import Area from '../components/Area'

export default {
  title: 'CSSToJs/Areas',
  component: Area,
} as ComponentMeta<typeof Area>

const Template: ComponentStory<typeof Area> = (args) => <Area {...args} />

export const Convert = Template.bind({})
Convert.args = {
  disable: false,
  type: 'convert',
}

export const Clear = Template.bind({})
Clear.args = {
  disable: true,
  type: 'clear',
}

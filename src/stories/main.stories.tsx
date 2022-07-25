import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent, fireEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HomePage from '../pages/main'

export default {
  title: 'CSSToJs/Pages/Home Page',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const EmptyTextAreas = Template.bind({})

export const FilledTextAreas = Template.bind({})

FilledTextAreas.play = async ({ canvasElement }) => {
  const code = `  .main-wrapper {
    flex-direction: row;
    display: flex;
    flex: 1;
  }
  #content {
    flex: 1;
  }
  ul {
    padding: 20px 0;
    flex: 1;
  }
  li {
    font-family:'Lato';
    color: whitesmoke;
    line-height: 44px;
  }`
  const canvas = within(canvasElement)
  const areaConvert = canvas.getByPlaceholderText('Enter css code')
  await fireEvent.change(areaConvert, { target: { value: code } })
  const convertBtn = await canvas.getByRole('button', { name: /CONVERT/i })
  await userEvent.click(convertBtn)
  await expect(canvas.getByText('Transform successfully')).toBeInTheDocument()
}

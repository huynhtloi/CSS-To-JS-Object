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
  const code = `  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-weight: 600;
    min-height: 100vh;
  }
  
  .stopwatch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:min(80%,30rem);
    height:min(30vh,10rem) ;
    padding: 1rem;
    margin: 1rem;
    background: white;
    border-radius: 2rem;
    border-top: 5px solid royalblue;
    border-bottom: 5px solid royalblue;
  }
  #stopwatch__timer {
    width: 60%;
    margin-top: -5px;
    text-align: left;
    font-size:min(10vw,4rem) ;
  }`
  const canvas = within(canvasElement)
  const areaConvert = canvas.getByPlaceholderText('Enter css code')
  await fireEvent.change(areaConvert, { target: { value: code } })
  const convertBtn = await canvas.getByRole('button', { name: /CONVERT/i })
  await userEvent.click(convertBtn)
  await expect(canvas.getByText('Transform successfully')).toBeInTheDocument()
}

import { memo } from 'react'
import { ButtonInterface } from '../../interface/main.interface'
import { button } from '../../styles/main.style'

// eslint-disable-next-line react/display-name
const Button = (props: Partial<ButtonInterface>) => {
  const { title, type, handleOnClickButton } = props
  console.log(`button ${type} component`)
  return (
    <button data-type={type} className={button({ variant: type })} onClick={handleOnClickButton}>
      {title}
    </button>
  )
}

export default memo(Button)

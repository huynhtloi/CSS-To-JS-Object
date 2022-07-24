import { memo } from 'react'
import { ButtonInterface } from '../../interface/main.interface'
import { StyledDefaultButton } from '../../styles/main.style'

// eslint-disable-next-line react/display-name
const Button = (props: Partial<ButtonInterface>) => {
  const { title, type, handleOnClickButton } = props
  return (
    <button
      data-type={type}
      className={StyledDefaultButton({ variant: type })}
      onClick={handleOnClickButton}
    >
      {title}
    </button>
  )
}

export default memo(Button)

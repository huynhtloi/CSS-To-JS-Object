import { forwardRef, memo } from 'react'
import { AreaInterface } from '../../interface/main.interface'
import { StyledArea } from '../../styles/main.style'

const Area = forwardRef<HTMLTextAreaElement, Partial<AreaInterface>>((props, ref) => {
  const { type, disable, value } = props
  return (
    <textarea
      ref={ref}
      className={StyledArea({ variant: type })}
      disabled={disable}
      value={value}
    />
  )
})

Area.displayName = 'Area'
export default memo(Area)

import { forwardRef, memo } from 'react'
import { AreaInterface } from '../../interface/main.interface'
import { StyledArea } from '../../styles/main.style'

const Area = forwardRef<HTMLTextAreaElement, Partial<AreaInterface>>((props, ref) => {
  const { type, disable, value, holder } = props
  return (
    <textarea
      ref={ref}
      className={StyledArea({ variant: type })}
      disabled={disable}
      value={value}
      placeholder={holder}
    />
  )
})

Area.displayName = 'Area'
export default memo(Area)

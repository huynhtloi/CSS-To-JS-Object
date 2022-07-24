import { forwardRef, memo } from 'react'
import { AreaInterface } from '../../interface/main.interface'
import { area } from '../../styles/main.style'

const Area = forwardRef<HTMLTextAreaElement, Partial<AreaInterface>>((props, ref) => {
  const { type, disable, value } = props
  console.log(`area ${type} component`)
  return <textarea ref={ref} className={area({ variant: type })} disabled={disable} value={value} />
})

Area.displayName = 'Area'
export default memo(Area)

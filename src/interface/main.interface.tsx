export interface MainInterface {
  title: string
  type: 'clear' | 'convert'
}

export interface ButtonInterface extends MainInterface {
  handleOnClickButton?: () => void
}

export interface AreaInterface extends MainInterface {
  value: string
  disable: boolean
  holder?: string
}

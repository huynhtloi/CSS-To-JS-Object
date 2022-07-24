import { createContext, useContext } from 'react'

interface MainType {
  hour: number
  minute: number
  second: number
  idInterval?: ReturnType<typeof setInterval>
  updateSecond: (s?: number) => void
  updateHour: (s?: number) => void
  setIdInterval: (s?: ReturnType<typeof setInterval>) => void
  resetAll: () => void
}

export const MainContext = createContext<MainType>({
  hour: 0,
  minute: 0,
  second: 0,
  idInterval: undefined,
  updateSecond: () => {},
  updateHour: () => {},
  setIdInterval: () => {},
  resetAll: () => {},
})

export const useMainContext = () => useContext(MainContext)

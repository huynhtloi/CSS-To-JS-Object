import { camelCase } from 'lodash'
import { useRef, useState } from 'react'
import Area from '../components/Area'
import Button from '../components/Button'
import {
  StyledBlock,
  StyledMain,
  StyledMainTitle,
  StyledButtonToast,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '../styles/main.style'

const tokenizer = (data: string) => {
  const tokens = []
  let token = ''
  const text = data.replace(/\r\n/g, '\n')
  const lineFeed = '\n'
  const specialChar: string[] = ['{', '}', ':', ';']
  for (const char of text) {
    if (~lineFeed.indexOf(char)) continue
    if (~specialChar.indexOf(char)) {
      tokens.push(token.trim())
      tokens.push(char)
      token = ''
      continue
    }
    token += char
  }
  if (token) tokens.push(token)
  return tokens
}

const convertToJs = (tokens: string[]) => {
  const specialEvent = ['active', 'hover', 'visited', 'focus', 'target']
  let convertJs = ''
  let isInsideBlock = false
  let isEvent = false
  let numAttr = -1
  for (let i = 0; i < tokens.length; i++) {
    numAttr++
    tokens[i] = tokens[i].replace('\n', '\n  ').replace(';', ',\n  ')
    if (tokens[i] === '{') {
      if (isEvent) {
        tokens[i - numAttr] = `"${tokens[i - numAttr]}`
        tokens[i] = `": ${tokens[i]}\n  `
      } else tokens[i] = `: ${tokens[i]}\n  `
      isInsideBlock = true
    }
    if (tokens[i] === '}') {
      // Reset block
      isInsideBlock = false
      isEvent = false
      numAttr = -1
    }
    // Inside block
    if (!isInsideBlock) {
      // Event
      if (~specialEvent.indexOf(tokens[i]) || ~tokens[i].indexOf(',') || ~tokens[i].indexOf(':')) {
        isEvent = true
        continue
      }
      // Class or id
      if (
        !~tokens[i].indexOf(',') &&
        (tokens[i].indexOf('.') === 0 || tokens[i].indexOf('#') === 0)
      ) {
        tokens[i] = `"${tokens[i]}"`
      }
    } else {
      // Kebab to camel of attribute
      if (~tokens[i].indexOf('-')) {
        tokens[i] = camelCase(tokens[i])
      }
      // Is a number
      if (tokens[i] === ':' && isNaN(Number(tokens[i + 1])) && !tokens[i + 1].includes('"'))
        tokens[i + 1] = ` "${tokens[i + 1]}"`
    }
  }
  tokens.map((t) => {
    if (t === '}') t = `\n${t},\n`
    convertJs = convertJs.concat(t)
  })
  return convertJs
}

const HomePage = () => {
  const convertRef = useRef<HTMLTextAreaElement>(null)
  const [convertVal, setConvertVal] = useState<string | undefined>('')
  const [open, setOpen] = useState(false)

  const handleOnClickClear = () => {
    setConvertVal('')
  }

  const handleOnClickConvert = () => {
    const data = convertToJs(tokenizer(convertRef.current ? convertRef.current.value : ''))
    setConvertVal(data)
    setOpen(true)
  }

  return (
    <>
      <h1 className={StyledMainTitle({ variant: 'main' })}>Transform</h1>
      <h2 className={StyledMainTitle()}>CSS to JS Object</h2>
      <div className={StyledMain()}>
        <div className={StyledBlock({ variant: 'left' })}>
          <Area ref={convertRef} type='convert' disable={false} />
          <Button type='convert' title='Convert' handleOnClickButton={handleOnClickConvert} />
        </div>
        <div className={StyledBlock({ variant: 'right' })}>
          <Area type='clear' disable={true} value={convertVal} />
          <Button type='clear' title='Clear' handleOnClickButton={handleOnClickClear} />
        </div>
      </div>
      <ToastProvider swipeDirection='right'>
        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Notification:</ToastTitle>
          <ToastDescription asChild className='hello'>
            <div>Transform successfully</div>
          </ToastDescription>
          <ToastAction asChild altText='Go to close'>
            <button className={StyledButtonToast({ size: 'small', variant: 'green' })}>
              Close
            </button>
          </ToastAction>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </>
  )
}

export default HomePage

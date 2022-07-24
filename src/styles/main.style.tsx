import { globalCss, css, keyframes, styled } from '@stitches/react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { blackA, green, mauve, slate, violet } from '@radix-ui/colors'

const VIEWPORT_PADDING = 25

export const globalStyles = globalCss({
  body: {
    margin: '0',
    fontFamily: '"Edu VIC WA NT Beginner", cursive',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: '#31394c',
    color: '#ffffff',
  },
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
})

export const StyledMainTitle = css({
  textAlign: 'center',
  variants: {
    variant: {
      main: {
        fontWeight: 900,
        color: '#e4cd89',
        textShadow: '0 0 0px #fff, 0 0 50px #f8dc89',
      },
    },
  },
})

export const StyledMain = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  marginTop: '2.5rem',
})

export const StyledBlock = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  alignContent: 'center',
  variants: {
    variant: {
      left: {
        marginRight: '1rem',
      },
      right: {
        marginLeft: '1rem',
      },
    },
  },
})

export const StyledDefaultButton = css({
  marginTop: '1rem',
  padding: '0.5rem 0rem',
  textTransform: 'uppercase',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    variant: {
      clear: {
        backgroundColor: 'Red',
        color: 'White',
      },
      convert: {
        backgroundColor: 'Grey',
        color: 'White',
      },
    },
  },
})

export const StyledButtonToast = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '0 10px',
        lineHeight: '25px',
        height: 25,
      },
    },
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: '0 0 0 2px black' },
      },
      green: {
        backgroundColor: green.green2,
        color: green.green11,
        boxShadow: `inset 0 0 0 1px ${green.green7}`,
        '&:hover': { boxShadow: `inset 0 0 0 1px ${green.green8}` },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green8}` },
      },
    },
  },
})

export const StyledArea = css({
  height: '32rem',
  width: '30rem',
  variants: {
    variant: {
      clear: {},
      convert: {},
    },
  },
})

// Toast

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: slate.slate12,
  fontSize: 15,
})

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: slate.slate11,
  fontSize: 13,
  lineHeight: 1.3,
})

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
})

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const Toast = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastClose = ToastPrimitive.Close

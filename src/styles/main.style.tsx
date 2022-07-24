import { globalCss, css } from '@stitches/react'

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

export const title = css({
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

export const main = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  marginTop: '2.5rem',
})

export const block = css({
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

export const button = css({
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

export const area = css({
  height: '32rem',
  width: '30rem',
  variants: {
    variant: {
      clear: {},
      convert: {},
    },
  },
})

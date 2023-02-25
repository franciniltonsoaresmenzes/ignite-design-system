import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:focus-within': {
    borderColor: '$ignite300',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
  // '&:has(input:focus)': {
  //   borderColor: '$ignite300',
  // },
  //
  // '&:has(input:disabled)': {
  //   opacity: 0.5,
  //   cursor: 'not-allowed',
  // },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  color: '$white',
  background: 'transparent',

  border: 0,
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    outline: 0,
  },
  '&:placeholder': {
    color: '$gray400',
  },
})

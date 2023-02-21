import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$md',
  height: '$64',
})

export function App() {
  return <Button>Hello Word</Button>
}

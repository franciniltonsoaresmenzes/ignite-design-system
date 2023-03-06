var c=Object.defineProperty;var r=(t,e)=>c(t,"name",{value:e,configurable:!0});import{a as p,j as a}from"./jsx-runtime-4ca556c9.js";import{B as m,a as l,d as u}from"./index-b2996e62.js";import{r as s}from"./index-be0b9e81.js";import{w as f,u as T,a as d,e as y}from"./index-74a46384.js";import"./index-21c6bad0.js";import"./iframe-2d86a3d5.js";import"./index-4cb24bae.js";import"./index-a9ad9f17.js";import"./es.map.constructor-a9919389.js";const i=r(t=>{const[e,n]=s.useState(!1),o=s.useRef(0);return s.useEffect(()=>()=>clearTimeout(o.current),[]),p(m,{css:{display:"flex",flexDirection:"row"},children:[a(l,{onClick:()=>{n(!1),window.clearTimeout(o.current),o.current=window.setTimeout(()=>{n(!0)},100)},children:"Salvar"}),a(u,{open:e,onOpenChange:n,...t})]})},"DemoToas"),D={parameters:{storySource:{source:`import type { StoryObj, Meta, ComponentStory } from '@storybook/react'
import {
  Box,
  Button,
  Toast,
  ToastProps,
} from '@ignite-ui-designer-system/react'
import { useEffect, useRef, useState } from 'react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const DemoToas = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])
  return (
    <Box css={{ display: 'flex', flexDirection: 'row' }}>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Salvar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </Box>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToas,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

const Template: ComponentStory<typeof DemoToas> = (args) => (
  <DemoToas {...args} />
)

export const firtsTest = Template.bind({})

firtsTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.click(canvas.getByRole('button'))

  await waitFor(() =>
    expect(canvas.getAllByText('Agendamento realizado')).toBeTruthy(),
  )
}
`,locationsMap:{"firts-test":{startLoc:{col:50,line:50},endLoc:{col:1,line:52},startBody:{col:50,line:50},endBody:{col:1,line:52}}}}},title:"Surfaces/Toast",component:i,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},argTypes:{}},P={},x=r(t=>a(i,{...t}),"Template"),g=x.bind({});g.play=async({canvasElement:t})=>{const e=f(t);T.click(e.getByRole("button")),await d(()=>y(e.getAllByText("Agendamento realizado")).toBeTruthy())};const j=["Primary","firtsTest"];export{P as Primary,j as __namedExportsOrder,D as default,g as firtsTest};
//# sourceMappingURL=Toast.stories-6fd81ab1.js.map

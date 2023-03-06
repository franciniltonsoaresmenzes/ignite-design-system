var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{j as n}from"./jsx-runtime-4ca556c9.js";import{w as l,u as p,a as c,e as m}from"./index-74a46384.js";import{e as a,B as y}from"./index-b2996e62.js";import"./index-be0b9e81.js";import"./iframe-2d86a3d5.js";import"./index-4cb24bae.js";import"./index-a9ad9f17.js";import"./es.map.constructor-a9919389.js";import"./index-21c6bad0.js";const S={parameters:{storySource:{source:`import type { StoryObj, Meta, ComponentStory } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Box, Tooltip, TooltipProps } from '@ignite-ui-designer-system/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    task: new Date(),
    available: true,
    holiday: false,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', background: '$gray100' }}
      >
        {Story()}
      </Box>
    ),
  ],
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const firtTest = Template.bind({})

firtTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const day = Intl.DateTimeFormat('pt-BR', { day: 'numeric' })
    .format(new Date())
    .toString()

  const date = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(new Date())

  await userEvent.hover(canvas.getByText(day))

  await waitFor(() =>
    expect(canvas.getAllByText(\`\${date} - Disponível\`)).toBeTruthy(),
  )
}
`,locationsMap:{"firt-test":{startLoc:{col:49,line:29},endLoc:{col:80,line:29},startBody:{col:49,line:29},endBody:{col:80,line:29}}}}},title:"Surfaces/Tooltip",component:a,args:{task:new Date,available:!0,holiday:!1},decorators:[t=>n(y,{as:"label",css:{display:"flex",flexDirection:"row",background:"$gray100"},children:t()})],argTypes:{}},k={},d=e(t=>n(a,{...t}),"Template"),T=d.bind({});T.play=async({canvasElement:t})=>{const o=l(t),r=Intl.DateTimeFormat("pt-BR",{day:"numeric"}).format(new Date).toString(),i=Intl.DateTimeFormat("pt-BR",{day:"numeric",month:"long"}).format(new Date);await p.hover(o.getByText(r)),await c(()=>m(o.getAllByText(`${i} - Disponível`)).toBeTruthy())};const F=["Primary","firtTest"];export{k as Primary,F as __namedExportsOrder,S as default,T as firtTest};
//# sourceMappingURL=Tooltip.stories-667b7598.js.map

import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data disĺay/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/franciniltonsoaresmenzes.png',
    alt: 'Francinilton Soares',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

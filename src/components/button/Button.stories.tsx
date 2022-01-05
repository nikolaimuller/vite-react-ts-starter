import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button, ButtonType } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    ...Button.defaultProps,
    disabled: false,
    loading: false,
    children: 'Button',
  },
  argTypes: {
    type: {
      options: Object.values(ButtonType),
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
    onBlur: { action: 'blured' },
    onFocus: { action: 'focused' },
  },
}

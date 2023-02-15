import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren ipsum.',
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testing...</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
}
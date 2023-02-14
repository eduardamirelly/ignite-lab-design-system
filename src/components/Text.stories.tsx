import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren ipsum.',
  },
} as Meta<TextProps>;

export const Default: StoryObj = {}

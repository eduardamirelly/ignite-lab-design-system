import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputProps, TextInputRootProps } from ".";

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Placeholder" />
      </>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}

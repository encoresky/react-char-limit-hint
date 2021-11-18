// src/components/CharLimitInput.stories.js
import React from "react";

import CharLimitInput from "./CharLimitInput";

export default {
  title: "Example/CharLimitInput",
  component: CharLimitInput,
  argTypes: {},
};

const Template = (args) => <CharLimitInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  charLimit: 10,
};

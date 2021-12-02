# Text Char limit Hint

## Installation

```
npm i @encoreskytech/text-char-limit-hint
or
yarn add @encoreskytech/text-char-limit-hint
```

## Examples

```
import NodeCharLimitInput from "@encoreskytech/react-char-limit-hint-input";

function App() {
  return (
    <NodeCharLimitInput charLimit={11} />
  );
}
```

## Props

| Property                 | Type `(Default)`                                                   | Description                                                                                                             |
| ------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| charLimit              | number                                                     | Length of string which you want to limit                                             |
| parentContainerStyle | string                                                     | ClassName for parent component of input component                                              |
| inputStyle | string                                                     | ClassName for input component                                              |
| hintStyle | string                                                     | ClassName for hint text component                                              |
| onChange               | (text) => void                      | callback function 

## Contributor
[Vishal Chaturvedi](https://github.com/vishai12345)
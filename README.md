# Text Char limit Hint

## Installation

```
npm i @encoreskytech/react-char-limit-hint
or
yarn add @encoreskytech/react-char-limit-hint
```

## Examples

```
import CharLimitInput from "@encoreskytech/react-char-limit-hint";

function App() {
  return (
    <CharLimitInput charLimit={11} />
  );
}
```

Example with textarea
```
import CharLimitInput from "@encoreskytech/react-char-limit-hint";

function App() {
  return (
    <CharLimitInput charLimit={11} asTextArea />
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
| asTextArea           | boolean (default false) | Enable to use it as textarea

## Contributor
[Vishal Chaturvedi](https://github.com/vishai12345)

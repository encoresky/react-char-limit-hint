import React from "react"
import PropTypes from "prop-types"

export default function CharLimitInput({
  onChange,
  charLimit,
  asTextArea,
  ...props
}) {
  const parsedIntCharLimit = parseInt(charLimit || 10) || 10;

  const [value, setValue] = React.useState("")
  const [remainingCount, setRemainingCount] = React.useState(parsedIntCharLimit)

  React.useEffect(() => {
    if (value.length > parsedIntCharLimit) {
      const remainingText = value.slice(0, parsedIntCharLimit)

      setValue(remainingText);
      onChange && onChange(remainingText);
      setRemainingCount(parsedIntCharLimit - remainingText.length);
    } else {
      const remaining_count = parsedIntCharLimit - value.length;
      setRemainingCount(remaining_count > -1 ? remaining_count : 0);
    }
  }, [parsedIntCharLimit])

  const onTextChange = event => {
    const remaining_count = parsedIntCharLimit - event.target.value.length;
    if (remaining_count < 0) return false;

    setRemainingCount(remaining_count);
    setValue(event.target.value)
    onChange && onChange(event.target.value);
  }

  const { hintStyle, inputStyle, parentContainerStyle, ...restProps } = props;

  const tagProps = {
    className: inputStyle,
    value,
    onChange: onTextChange,
    maxLength: parsedIntCharLimit,
    ...restProps
  }

  return (
    <div className={parentContainerStyle}>
      {asTextArea ? <textarea {...tagProps} /> : <input {...tagProps} />}
      <span className={hintStyle}>{remainingCount} words are remaining</span>
    </div>
  );
}

CharLimitInput.propTypes = {
  charLimit: PropTypes.number.isRequired,
  parentContainerStyle: PropTypes.string,
  inputStyle: PropTypes.string,
  hintStyle: PropTypes.string,
  onChange: PropTypes.func,
  asTextArea: PropTypes.number,
};

CharLimitInput.defaultProps = {
  onChange: undefined,
  asTextArea: false,
};

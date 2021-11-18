import React from "react";
import PropTypes from "prop-types";

export default function CharLimitInput({ onChange, charLimit, ...props }) {
  const parsedIntCharLimit = parseInt(charLimit || 0);

  const [value, setValue] = React.useState("")
  const [remainingCount, setRemainingCount] = React.useState(parsedIntCharLimit)

  const onTextChange = event => {
    const remaining_count = parsedIntCharLimit - event.target.value.length;
    if(remaining_count  < 0) return false;

    setRemainingCount(remaining_count);
    setValue(event.target.value)
    onChange(event.target.value);
  }

  const { hintStyle, inputStyle, parentContainerStyle, ...restProps } = props;

  return (
    <div className={parentContainerStyle}>
      <input className={inputStyle} value={value} onChange={onTextChange} maxLength={charLimit} {...restProps} />
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
};

CharLimitInput.defaultProps = {
  onChange: undefined,
};

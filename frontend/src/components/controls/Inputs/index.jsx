import { StyledCheckbox, StyledTextbox } from "./Inputs.styled";

// Textbox
export function Textbox({ type, ...args }) {
  return <StyledTextbox type={type} {...args} />;
}

// Checkbox
export function Checkbox({ ...args }) {
  return <StyledCheckbox type="checkbox" />;
}

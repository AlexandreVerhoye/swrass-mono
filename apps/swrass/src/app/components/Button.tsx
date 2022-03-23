import styled from 'styled-components';

type ButtonProps = {
  variant?: ['ghost' | 'primary'];
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 0;
`;

export default Button;

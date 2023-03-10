/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from '@emotion/react';

interface IProps {
  label: string;

  buttonCustomStyle?: SerializedStyles;
  [key: string]: any;
}

const buttonStyle = css({
  display: 'block',
  color: 'white',
  backgroundColor: '#03285A',

  fontSize: '1rem',
  fontWeight: '600',

  padding: '0.9em 1.6em',

  border: 'none',
  borderRadius: '0.5em',

  ':hover': {
    cursor: 'pointer',

    backgroundColor: '#174A8A',
  },

  '@media (max-width: 420px)': {
    fontSize: '0.9rem',
    padding: '0.9em 1.1em',
    borderRadius: '0.3em',
  },
});

const Button = ({ label, buttonCustomStyle, ...props }: IProps) => {
  return (
    <button css={[buttonStyle, buttonCustomStyle]} {...props}>
      {label}
    </button>
  );
};

export default Button;

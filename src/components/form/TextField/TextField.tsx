/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Field } from 'formik';
import ErrorField from '../ErrorField/ErrorField';

interface ITextFieldProps {
  label?: {
    name: string;
    id: string;
  };
  as?: string;
  name: string;
  [key: string]: any;
}

const textFieldStyle = css({
  padding: 12,
  fontWeight: 'bold',
  fontSize: 15,
  borderRadius: 8,
  border: '1px solid lightgray',
  width: '100%',
  outline: 0,
  color: '#032956',
  '::placeholder': {
    color: 'GrayText',
    opacity: 0.7,
  },
});

const textFieldContainer = css({
  maxWidth: 450,
  marginBottom: 20,
  label: {
    display: 'block',
    fontSize: 14,
    fontWeight: 500,
    color: '#032956',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const TextField = ({ name, label, ...props }: ITextFieldProps) => {
  return (
    <div css={textFieldContainer}>
      <div>
        {label && <label htmlFor={label.id}>{label.name}</label>}
        <ErrorField name={name} />
      </div>
      <Field name={name} css={textFieldStyle} id={label?.id} {...props} />
    </div>
  );
};

export default TextField;

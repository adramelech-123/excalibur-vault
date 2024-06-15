/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, InputGroup } from "react-bootstrap"
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  name: string;
  inputGroup?: boolean;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}


function TextInputField({
  children,
  name,
  inputGroup,
  register,
  registerOptions,
  error,
  ...props
}: TextInputFieldProps) {
  return (
    <>
      {inputGroup ? (
        <>
          <InputGroup>
            <Form.Control
              {...props}
              {...register(name, registerOptions)}
              isInvalid={!!error}
            />
            {children}
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>
        </>
      ) : (
        <>
          <Form.Control
            {...props}
            {...register(name, registerOptions)}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>
        </>
      )}
    </>
  );
}
export default TextInputField
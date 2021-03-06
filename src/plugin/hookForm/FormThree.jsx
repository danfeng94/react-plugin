import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required}) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label, register }) => (
  <>
    <label>{label}</label>
    <select name={label} ref={register}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export default function FormThree() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required/>
      <Select label="Age" register={register}/>
      <input type="submit" />
    </form>
  );
}

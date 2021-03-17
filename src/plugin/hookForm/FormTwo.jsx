import React from "react";
import { useForm } from "react-hook-form";

export default function FormTwo() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} defaultValue={26}/>
      {errors.age && <span>请输入18-99之间的数字</span>}
      <input type="submit" />
    </form>
  );
}
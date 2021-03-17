import React from 'react';
import { useForm } from 'react-hook-form';

const MyHookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch('example'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="GoldCoast" ref={register({ required: true })} />
      {errors.example && <span>This GoldCoast is required</span>}
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

export default MyHookForm;
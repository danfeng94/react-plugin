import React from 'react';
import { useForm } from 'react-hook-form';

const Form_0 = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'bill',
      lastName: 'luo',
    }
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default Form_0;
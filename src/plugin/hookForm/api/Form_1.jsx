import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

const Form_1 = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default Form_1;
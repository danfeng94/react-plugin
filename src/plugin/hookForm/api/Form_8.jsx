import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from 'antd';

const Form_8 = () => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="antdInput"
        as={AntdInput}
      />
      <input type="submit" />
    </form>
  );
};

export default Form_8;

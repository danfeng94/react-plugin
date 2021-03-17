import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";

const FormFour = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={AntdInput}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <Controller
        name="iceCreamType"
        as={Select}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        control={control}
        rules={{ required: true }}
      />
      <input type="submit"/>
    </form>
  )
};

export default FormFour;
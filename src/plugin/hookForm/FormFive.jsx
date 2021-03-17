import React from "react";
import { useForm } from "react-hook-form";
import { Input as InputField } from "antd";

export default function FormFive(){
  const {register, handleSubmit, setValue} = useForm();
  const onSubmit = data => console.log(data);

  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  };

  React.useEffect(() => {
    register("AntdInput")
  }, [register]);

  console.log(register);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange}/>
      <input type="submit"/>
    </form>
  )
}
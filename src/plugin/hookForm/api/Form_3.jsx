import * as React from "react";
import { useForm } from "react-hook-form";

export default function Form_3(){
  const { register, handleSubmit, setError, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        name="username"
        type="text"
        onChange={() => {
          setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!"
          });
        }}
        ref={register}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <input type="submit" />
    </form>
  );
};
import React from "react";
import { useForm } from "react-hook-form";

export default function Form_6() {
  const { register, getValues } = useForm();

  const getFormValues = () => {
    const values = getValues(); // { test: "test-input", test1: "test1-input" }
    console.log(values);
    const singleValue = getValues("test"); // "test-input"
    console.log(singleValue);
    const multipleValues = getValues(["test", "test1"]);
    console.log(multipleValues);
    // { test: "test-input", test1: "test1-input" }
  };

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />

      <button
        type="button"
        onClick={getFormValues}
      >
        Get Values
      </button>
    </form>
  );
}
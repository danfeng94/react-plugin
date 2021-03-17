import React from "react";
import { useForm } from "react-hook-form";
import './test.css';

const Test = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-form'>
      <div>
        <span>姓名</span>
        <input name="name" placeholder='请输入姓名' ref={register({ required: true })} className='base'/>
      </div>
      <div>
        <span>电话</span>
        <input name="phone" placeholder='请输入电话' ref={register({ required: true })} className='base'/>
      </div>
      <div>
        <span>地址</span>
        <input name="address" placeholder='请输入地址' ref={register({required: true})} className='base'/>
      </div>

      <input type="submit" className='my-submit'/>
    </form>
  );
};

export default Test;

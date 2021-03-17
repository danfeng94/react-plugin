import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox } from '@material-ui/core';

const App = () => {
  const {handleSubmit, control} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller as={TextField} name="TextField" control={control} defaultValue=""/>

      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{required: true}}
        render={props =>{
          console.log(props);
          return <Checkbox
              onChange={e => props.onChange(e.target.checked)}
              checked={props.value}
            />
          }
        }
      />
      <button type="submit">submit</button>
    </form>
  )
};

export default App;

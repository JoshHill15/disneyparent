import React, {useState} from "react";


export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);


  const handleChange = event => {
    const target = event.target
    setValues({ ...values, [target.name]:target.value });
  };
  return [values, handleChange];
}

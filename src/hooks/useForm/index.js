import { useState } from "react";

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%&*?]{8,}$/,
    message:
      "A senha deve conter, no mínimo, 8 caracteres, com uma letra maiúscula, uma letra minúscula e um número",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate() {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Este campo é obrigatório");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

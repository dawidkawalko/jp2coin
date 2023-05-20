import { ChangeEvent, useState } from "react";

const capitalizeFirstLetter = (source: string) => {
  return source.charAt(0).toUpperCase() + source.slice(1);
};

interface UseFormProps {
  initialData: Record<string, string>;
  onSubmit: (trimmedData: Record<string, string>) => void;
}

const useForm = ({ initialData, onSubmit }: UseFormProps) => {
  const [data, setData] = useState<Record<string, string>>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const checkErrors = (newData: Record<string, string>) => {
    const newErrors = { ...errors };
    Object.keys(newData).forEach((name) => {
      const value = newData[name];

      const error =
        value === "" ? `${capitalizeFirstLetter(name)} cannot be empty` : "";

      newErrors[name] = error;
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    value = value.trimStart();

    const newData = { ...data };
    newData[name] = value.trimStart();

    checkErrors({ [name]: value });
    setData(newData);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedData = { ...data };
    Object.keys(trimmedData).forEach(
      (name) => (trimmedData[name] = trimmedData[name].trim())
    );

    setData(trimmedData);
    const newErrors = checkErrors(trimmedData);

    const hasErrors = Object.values(newErrors).some((value) => !!value);
    if (!hasErrors) {
      onSubmit(trimmedData);
    }
  };

  const reset = () => {
    setData(initialData);
  };

  return { data, errors, handleChange, handleSubmit, reset };
};

export default useForm;

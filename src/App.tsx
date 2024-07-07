import { createContext, FormEvent, useState } from "react";
import Calculator from "./Calculator";
import Form from "./Form";
import Result from "./Result";

export const FormContext = createContext<FormData | null>(null);

export default function App() {
  const [form, setForm] = useState<FormData | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    setForm(formData);
  }

  return (
    <FormContext.Provider value={form}>
      <h1 className="sr-only">Mortgage Repayment Calculator</h1>
      <Form onSubmit={handleSubmit}>
        <Calculator />
        <Result />
      </Form>
    </FormContext.Provider>
  );
}

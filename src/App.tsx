import { FormEvent } from "react";
import Calculator from "./Calculator";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(Object.fromEntries(formData));
  }

  return (
    <>
      <h1 className="sr-only">Mortgage Repayment Calculator</h1>
      <Form onSubmit={handleSubmit}>
        <Calculator />
        <Result />
      </Form>
    </>
  );
}

import Calculator from "./Calculator";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  return (
    <>
      <h1 className="sr-only">Mortgage Repayment Calculator</h1>
      <Form>
        <Calculator />
        <Result />
      </Form>
    </>
  );
}

import { createContext, Dispatch, SetStateAction, useState } from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import type { Result as ResultType } from "./types";

export const ResultContext = createContext<{
  result: ResultType;
  setResult: Dispatch<SetStateAction<ResultType>>;
} | null>(null);

export default function App() {
  const [result, setResult] = useState({
    monthlyRepayment: "0",
    totalRepayment: "0",
  });

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      <h1 className="sr-only">Mortgage Repayment Calculator</h1>
      <article className="grid w-full max-w-[68.8rem] overflow-hidden bg-white tablet:rounded-[2.4rem] desktop:max-w-[100.8rem] desktop:grid-cols-2">
        <Calculator />
        <Result />
      </article>
    </ResultContext.Provider>
  );
}

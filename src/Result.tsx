import { useContext } from "react";
import { FormContext } from "./App";

export default function Result() {
  const form = useContext(FormContext);

  return (
    <section className="flex flex-col items-center justify-center gap-y-16 bg-slate-900 px-24 py-32 text-center tablet:p-40 desktop:rounded-es-[8rem]">
      <img src="./illustration-empty.svg" alt="" />
      <h3 className="text-white font-preset-2">Results shown here</h3>
      <p className="text-slate-300 font-preset-4">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
      {form ? JSON.stringify(Object.fromEntries(form)) : null}
    </section>
  );
}

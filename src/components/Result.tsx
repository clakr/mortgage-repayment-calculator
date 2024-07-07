import { HTMLAttributes, useContext } from "react";
import { ResultContext } from "../App";
import { twMerge } from "tailwind-merge";

export default function Result() {
  const resultContext = useContext(ResultContext);

  if (!resultContext) return null;

  if (
    resultContext.result.monthlyRepayment === "0" ||
    resultContext.result.totalRepayment === "0"
  ) {
    return (
      <Section className="items-center justify-center text-center">
        <img src="./illustration-empty.svg" alt="" />
        <h3 className="text-white font-preset-2">Results shown here</h3>
        <p className="text-slate-300 font-preset-4">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </Section>
    );
  }

  return (
    <Section>
      <h3 className="text-white font-preset-2">Your results</h3>
      <p className="text-slate-300 font-preset-4">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="flex flex-col gap-y-16 rounded-[.8rem] border-lime bg-black/25 px-16 py-24">
        <div className="flex flex-col gap-y-8">
          <h4 className="text-slate-300 font-preset-4">
            Your monthly repayments
          </h4>
          <strong className="text-lime font-preset-1">
            {resultContext.result.monthlyRepayment}
          </strong>
        </div>
        <hr className="border-none outline outline-1 outline-slate-300/25" />
        <div className="flex flex-col gap-y-8">
          <h4 className="text-slate-300 font-preset-4">
            Total you'll repay over the term
          </h4>
          <strong className="text-white font-preset-2">
            {resultContext.result.totalRepayment}
          </strong>
        </div>
      </div>
    </Section>
  );
}

function Section({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={twMerge(
        className,
        "flex flex-col gap-y-16 bg-slate-900 px-24 py-32 tablet:p-40 desktop:rounded-es-[8rem]",
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

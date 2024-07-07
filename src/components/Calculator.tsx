import {
  FormEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useContext,
} from "react";
import { twMerge } from "tailwind-merge";
import getRepayment from "../utils/getRepayment";
import getInterest from "../utils/getInterest";
import { ResultContext } from "../App";

export default function Calculator() {
  const resultContext = useContext(ResultContext);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!resultContext) return;

    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    resultContext.setResult(
      formData.get("type") === "repayment"
        ? getRepayment(formData)
        : getInterest(formData),
    );
  }

  return (
    <form
      className="flex flex-col gap-y-24 px-24 py-32 tablet:gap-y-40 tablet:p-40"
      onSubmit={handleSubmit}
    >
      <Header />
      <Body />
      <button className="flex items-center justify-center gap-x-16 rounded-full bg-lime py-16 text-slate-900 font-preset-3 tablet:self-start tablet:px-40">
        <img src="./icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-y-8 tablet:flex-row tablet:justify-between">
      <h2 className="text-slate-900 font-preset-2">Mortgage Calculator</h2>
      <button
        type="button"
        className="self-start text-slate-700 underline font-preset-4 tablet:self-auto"
      >
        Clear All
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="flex flex-col gap-y-24">
      <FormField>
        <Label htmlFor="principal">Mortgage Amount</Label>
        <Input type="number" name="principal" id="principal" content="£" />
      </FormField>
      <div className="grid gap-24 tablet:grid-cols-2">
        <FormField>
          <Label htmlFor="years">Mortgage Term</Label>
          <Input
            type="number"
            name="years"
            id="years"
            required
            content="years"
            contentPosition="right"
          />
        </FormField>
        <FormField>
          <Label htmlFor="annualRate">Interest Rate</Label>
          <Input
            type="number"
            name="annualRate"
            id="annualRate"
            step="0.01"
            required
            content="%"
            contentPosition="right"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="type">Mortgage Type</Label>
        <Label htmlFor="repayment" hasInputChild="radio">
          <Input
            type="radio"
            name="type"
            id="repayment"
            defaultValue="repayment"
            required
          />
          Repayment
        </Label>
        <Label htmlFor="interest" hasInputChild="radio">
          <Input
            type="radio"
            name="type"
            id="interest"
            defaultValue="interest"
            required
          />
          Interest Only
        </Label>
      </FormField>
    </div>
  );
}

function FormField({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col gap-y-12" {...rest}>
      {children}
    </div>
  );
}

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  hasInputChild?: InputProps["type"];
};
function Label({ children, hasInputChild, ...rest }: LabelProps) {
  return (
    <label
      className={twMerge(
        !hasInputChild && "text-slate-700 font-preset-4",
        hasInputChild === "radio" &&
          "flex gap-x-16 rounded-[.4rem] border border-slate-500 px-16 py-12 text-slate-900 font-preset-3 has-[:checked]:border-lime has-[:checked]:bg-lime/15",
      )}
      {...rest}
    >
      {children}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  content?: string;
  contentPosition?: "left" | "right";
};
function Input({
  type,
  content,
  contentPosition = "left",
  ...rest
}: InputProps) {
  if (type === "number") {
    return (
      <div className="flex overflow-hidden rounded-[.4rem] border border-slate-500">
        <span
          className={twMerge(
            contentPosition === "right" && "order-1",
            "bg-slate-100 px-16 py-12 text-slate-700 font-preset-3",
          )}
        >
          {content}
        </span>
        <input
          type={type}
          className="w-full px-16 py-12 text-slate-900 outline-none font-preset-3"
          {...rest}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      className={twMerge(type === "radio" && "accent-lime")}
      {...rest}
    />
  );
}

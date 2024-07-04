import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

export default function Calculator() {
  return (
    <section className="flex flex-col gap-y-24 px-24 py-32 tablet:gap-y-40">
      <Header />
      <Body />
      <button className="font-preset-3 flex items-center justify-center gap-x-16 rounded-full bg-lime py-16 text-slate-900 tablet:self-start tablet:px-40">
        <img src="./icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </section>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-y-8 tablet:flex-row tablet:justify-between">
      <h2 className="font-preset-2 text-slate-900">Mortgage Calculator</h2>
      <button
        type="button"
        className="font-preset-4 self-start text-slate-700 underline tablet:self-auto"
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
        <Label htmlFor="amount">Mortgage Amount</Label>
        <Input type="number" name="amount" id="amount" value="300000" />
      </FormField>
      <div className="grid gap-24 tablet:grid-cols-2">
        <FormField>
          <Label htmlFor="term">Mortgage Term</Label>
          <Input type="number" name="term" id="term" value="25" />
        </FormField>
        <FormField>
          <Label htmlFor="rate">Interest Rate</Label>
          <Input type="number" name="rate" id="rate" value="5.25" />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="type">Mortgage Type</Label>
        <Label htmlFor="repayment" hasInputChild="radio">
          <Input type="radio" name="type" id="repayment" />
          Repayment
        </Label>
        <Label htmlFor="interest" hasInputChild="radio">
          <Input type="radio" name="type" id="interest" />
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
        !hasInputChild && "font-preset-4 text-slate-700",
        hasInputChild === "radio" &&
          "font-preset-3 flex gap-x-16 rounded-[.4rem] border border-slate-500 px-16 py-12 text-slate-900 has-[:checked]:border-lime has-[:checked]:bg-lime/15",
      )}
      {...rest}
    >
      {children}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;
function Input({ type, ...rest }: InputProps) {
  return (
    <input
      className={twMerge(
        type === "number" &&
          "font-preset-3 rounded-[.4rem] border border-slate-500 px-16 py-12 text-slate-900",
        type === "radio" && "accent-lime",
      )}
      type={type}
      {...rest}
    />
  );
}

import { FormHTMLAttributes } from "react";

export default function Form({
  children,
  ...rest
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className="grid w-full max-w-[68.8rem] overflow-hidden bg-white tablet:rounded-[2.4rem] desktop:max-w-[100.8rem] desktop:grid-cols-2"
      {...rest}
    >
      {children}
    </form>
  );
}

import { PropsWithChildren } from "react";

export default function Form({ children }: PropsWithChildren) {
  return (
    <form className="desktop:max-w-[100.8rem] desktop:grid-cols-2 tablet:rounded-[2.4rem] grid w-full max-w-[68.8rem] overflow-hidden bg-white">
      {children}
    </form>
  );
}

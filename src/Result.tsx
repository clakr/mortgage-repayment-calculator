export default function Result() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-16 bg-slate-900 px-24 py-32 text-center tablet:p-40 desktop:rounded-es-[8rem]">
      <img src="./illustration-empty.svg" alt="" />
      <h3 className="font-preset-2 text-white">Results shown here</h3>
      <p className="font-preset-4 text-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}

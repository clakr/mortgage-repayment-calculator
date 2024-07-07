import { CURRENCY_OPTS, MONTHS_IN_A_YEAR } from ".";

export default function (formData: FormData) {
  const principal = +(formData.get("principal") ?? 0);
  const years = +(formData.get("years") ?? 0);
  const annualRate = +(formData.get("annualRate") ?? 0);

  const monthlyRate = annualRate / MONTHS_IN_A_YEAR / 100;
  const totalPayments = years * 12;

  const monthlyRepayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
  const totalRepayment = monthlyRepayment * totalPayments;

  return {
    monthlyRepayment: monthlyRepayment.toLocaleString("en-GB", CURRENCY_OPTS),
    totalRepayment: totalRepayment.toLocaleString("en-GB", CURRENCY_OPTS),
  };
}

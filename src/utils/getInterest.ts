import { CURRENCY_OPTS, MONTHS_IN_A_YEAR } from ".";
import { Result } from "../types";

export default function (formData: FormData): Result {
  const principal = +(formData.get("principal") ?? 0);
  const years = +(formData.get("years") ?? 0);
  const annualRate = +(formData.get("annualRate") ?? 0);

  const monthlyRate = annualRate / MONTHS_IN_A_YEAR / 100;

  const monthlyRepayment = principal * monthlyRate;
  const totalRepayment =
    monthlyRepayment * years * MONTHS_IN_A_YEAR + principal;

  return {
    monthlyRepayment: monthlyRepayment.toLocaleString("en-GB", CURRENCY_OPTS),
    totalRepayment: totalRepayment.toLocaleString("en-GB", CURRENCY_OPTS),
  };
}

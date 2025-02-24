import { BFMPalette } from "@/Theme";
import { BodyText, MediumBoldHeading } from "@/Typography";
import { Outflows } from "./outflows";
import { formatCurrency, formatKeys } from "@/utils";
import { HKD_EQUIVALANT } from "@/constants";

const getTextColor = (value: number) => {
  if (value === 0) return BFMPalette.gray200;
  if (value < 0) return BFMPalette.red600;
  return BFMPalette.purple375;
};

const renderMonthCell = (value: string | number) => {
  const numericValue = Number(value);
  const color = getTextColor(numericValue);
  const formattedValue = formatCurrency(`${HKD_EQUIVALANT}${value}`, 2);

  return numericValue === 0 ? (
    <BodyText color={color}>{formattedValue}</BodyText>
  ) : (
    <MediumBoldHeading color={color}>{formattedValue}</MediumBoldHeading>
  );
};

export const OutflowsStyles = {
  OUTFLOWS: (row: Outflows) =>
    ["totalExpense", "profitOrLoss"].includes(row.outflows) ? (
      <MediumBoldHeading color={BFMPalette.purple900}>
        {formatKeys(row.outflows)}
      </MediumBoldHeading>
    ) : (
      <BodyText color={BFMPalette.black800}>
        {formatKeys(row.outflows)}
      </BodyText>
    ),

  MONTH_1: (row: Outflows) => renderMonthCell(row.month1),
  MONTH_2: (row: Outflows) => renderMonthCell(row.month2),
  MONTH_3: (row: Outflows) => renderMonthCell(row.month3),
  MONTH_4: (row: Outflows) => renderMonthCell(row.month4),
};

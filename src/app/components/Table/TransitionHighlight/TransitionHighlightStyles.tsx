"use client";
import { BFMPalette } from "@/Theme";
import { TransitionHighlight } from "@/app/components/Table/TransitionHighlight/transitionHighlight";
import { BodyText, H3Secondary, H5 } from "@/Typography";
import styled from "styled-components";

const ReasonContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 2px 8px;
  border: 1px solid ${BFMPalette.skin300};
`;
export const TransitionCellStyles = {
  DATE: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.date}</BodyText>
  ),
  BANK: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.bank}</BodyText>
  ),
  ACCOUNT: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.account}</BodyText>
  ),
  DESCRIPTION: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.description}</BodyText>
  ),
  CATEGORY: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.category}</BodyText>
  ),
  PAYEE_MERCHANT: (row: TransitionHighlight) => (
    <BodyText color={BFMPalette.black800}>{row.payeeORMerchant}</BodyText>
  ),
  AMOUNT: (row: TransitionHighlight) => (
    <H3Secondary color={BFMPalette.purple375}>{row.amount}</H3Secondary>
  ),
  REASON: (row: TransitionHighlight) => (
    <ReasonContainer>
      <H5 color={BFMPalette.red700}>{row.reason}</H5>
    </ReasonContainer>
  ),
};

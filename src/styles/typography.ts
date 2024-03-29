import { colors } from "./color";
import { isSmallPhone } from "./dimensions";
import { TextStyle } from "react-native";

const adjFactorLarge = isSmallPhone ? 0.85 : 1;
const adjFactorSmall = isSmallPhone ? 0.9 : 1;

export const font = {
  regular: "Garnett-Regular",
  bold: "Garnett-Semibold",
  light: "Garnett-Light",
  fancy: "Doyle-BoldItalic",
  fancyAlt: "Doyle-BlackItalic",
};

export const typography = {
  h0: {
    fontFamily: font.regular,
    color: colors.blackBrand,
    fontSize: 48 * adjFactorLarge,
    lineHeight: 67 * adjFactorLarge,
  },
  h0SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 48 * adjFactorLarge,
    lineHeight: 67 * adjFactorLarge,
  },
  h0Display: {
    fontFamily: font.fancy,
    color: colors.blackBrand,
    fontSize: 40 * adjFactorLarge,
    lineHeight: 60 * adjFactorLarge,
  },
  h0DisplayAlt: {
    fontFamily: font.fancyAlt,
    color: colors.blackBrand,
    fontSize: 40 * adjFactorLarge,
    lineHeight: 60 * adjFactorLarge,
  },
  h1: {
    fontFamily: font.regular,
    color: colors.blackBrand,
    fontSize: 32 * adjFactorLarge,
    lineHeight: 45 * adjFactorLarge,
  },
  h1SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 32 * adjFactorLarge,
    lineHeight: 45 * adjFactorLarge,
  },
  h1Display: {
    color: colors.blackBrand,
    fontFamily: font.fancy,
    fontSize: 32 * adjFactorLarge,
    lineHeight: 47 * adjFactorLarge,
  },
  h1DisplayAlt: {
    color: colors.blackBrand,
    fontFamily: font.fancyAlt,
    fontSize: 36 * adjFactorLarge,
    lineHeight: 47 * adjFactorLarge,
  },
  h1Referral: {
    color: colors.blackBrand,
    fontFamily: font.fancyAlt,
    fontSize: 30 * adjFactorLarge,
    lineHeight: 45 * adjFactorLarge,
  },
  h2: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 24 * adjFactorLarge,
    lineHeight: 33 * adjFactorLarge,
  },
  h2SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 24 * adjFactorSmall,
    lineHeight: 33 * adjFactorSmall,
  },
  h2Display: {
    color: colors.blackBrand,
    fontFamily: font.fancy,
    fontSize: 24 * adjFactorSmall,
    lineHeight: 1.5 * 24 * adjFactorSmall,
  },
  h2DisplayAlt: {
    color: colors.blackBrand,
    fontFamily: font.fancyAlt,
    fontSize: 24 * adjFactorSmall,
    lineHeight: 1.5 * 24 * adjFactorSmall,
  },
  h3: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 20 * adjFactorLarge,
    lineHeight: 1.5 * 20,
  },
  h3SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 20,
    lineHeight: 1.5 * 20,
  },
  h3Display: {
    color: colors.blackBrand,
    fontFamily: font.fancy,
    fontSize: 20,
    lineHeight: 1.5 * 20,
  },
  h4: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 18,
    lineHeight: 1.5 * 18,
  },
  h4Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 18,
    lineHeight: 1.5 * 18,
  },
  h4SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 18,
    lineHeight: 1.5 * 18,
  },
  h4Display: {
    color: colors.blackBrand,
    fontFamily: font.fancy,
    fontSize: 16,
    lineHeight: 1.5 * 16,
  },
  h5: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 16,
    lineHeight: 1.5 * 16,
  },
  h5Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 16,
    lineHeight: 1.6 * 16,
  },
  h5SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 16,
    lineHeight: 1.5 * 16,
  },
  h5Underline: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 16,
    lineHeight: 1.5 * 16,
    textDecorationLine: "underline" as TextStyle["textDecorationLine"],
  },
  h5Display: {
    color: colors.blackBrand,
    fontFamily: font.fancy,
    fontSize: 14,
    lineHeight: 1.5 * 14,
  },
  h6: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 14,
    lineHeight: 1.5 * 14,
  },
  h6Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 14,
    lineHeight: 1.5 * 14,
  },
  h6SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 14,
    lineHeight: 1.5 * 14,
  },
  h7: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 13,
    lineHeight: 1.5 * 13,
  },
  h7Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 13,
    lineHeight: 1.5 * 13,
  },
  h7SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 13,
    lineHeight: 1.5 * 13,
  },
  h7SemiBoldUpperCase: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 13,
    lineHeight: 1.5 * 13,
    textTransform: "uppercase" as TextStyle["textTransform"],
  },
  h7Underline: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 13,
    lineHeight: 1.5 * 13,
    textDecorationLine: "underline" as TextStyle["textDecorationLine"],
  },
  h8: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 12,
    lineHeight: 1.5 * 12,
  },
  h8Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 12,
    lineHeight: 1.5 * 12,
  },
  h8SemiBold: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 12,
    lineHeight: 1.5 * 12,
  },
  h8SemiBoldUppercase: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 12,
    lineHeight: 1.5 * 12,
    textTransform: "uppercase" as TextStyle["textTransform"],
  },
  h9: {
    color: colors.blackBrand,
    fontFamily: font.regular,
    fontSize: 9,
    lineHeight: 13,
  },
  h9Light: {
    color: colors.blackBrand,
    fontFamily: font.light,
    fontSize: 9,
    lineHeight: 13,
  },
  h9SemiBoldUpperCase: {
    color: colors.blackBrand,
    fontFamily: font.bold,
    fontSize: 9,
    lineHeight: 13,
    textTransform: "uppercase" as TextStyle["textTransform"],
  },
};

import { Color } from './Color';

export const Font = {
  roboto: 'Inter, sans-serif',
};

export const FontSize: any = {
  xs: '.625rem', // 10
  sm: '.75rem', // 12
  md: '.875rem', // 14
  base: '1rem', // 16
  lg: '1.125rem', // 18
  xl: '1.25rem', // 20
  xl2: '1.375rem', // 22
  xl3: '1.5rem', // 24
  xl4: '1.625rem', // 26
  xl5: '1.75rem', // 28
  xl6: '1.875rem', // 30
  xl7: '2rem', // 32
  xl8: '2.125rem', // 34
  xl9: '2.25rem', // 36
  xl10: '2.625rem', // 42
  xl11: '3rem', // 48
  xl12: '3.5rem', // 56
  xl13: '4rem', // 64
  xl14: '4.5rem', // 72
  xl15: '5rem', // 80
};

export const FontWeight: any = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

FontWeight.w100 = 100;
FontWeight.w200 = 200;
FontWeight.w300 = 300;
FontWeight.w400 = 400;
FontWeight.w500 = 500;
FontWeight.w600 = 600;
FontWeight.w700 = 700;
FontWeight.w800 = 800;
FontWeight.w900 = 900;

export const LineHeight: any = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
};

export const LetterSpacing = {
  tightest: '-.075em',
  tighter: '-.05em',
  tight: '-.025em',
  normal: '0',
  wide: '.025em',
  wider: '.05em',
  widest: '.1em',
};

export const BaseTextStyle = {
  margin: 0,
  fontFamily: Font.roboto,
  letterSpacing: LetterSpacing.wide,
  placeholder: Color.placeholder,
};

export const TextStyle: Record<string, any> = {
  // <h* />
  h1: {
    marginBottom: 1,
    fontSize: [FontSize.xl6, FontSize.xl6, FontSize.xl6, FontSize.xl6],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.snug,
    color: Color.mineShaft,
  },
  h2: {
    marginBottom: 1,
    fontSize: [FontSize.xl, FontSize.xl, FontSize.xl, FontSize.xl],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.snug,
    color: Color.mineShaft,
  },
  h3: {
    marginBottom: 1,
    fontSize: [FontSize.base, FontSize.base, FontSize.base, FontSize.base],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.normal,
    color: Color.mineShaft,
  },
  h4: {
    marginBottom: 1,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.snug,
    color: Color.mineShaft,
  },
  h5: {
    marginBottom: 1,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.snug,
    color: Color.mineShaft,
  },
  h6: {
    marginBottom: 1,
    fontSize: [FontSize.sm, FontSize.sm, FontSize.sm, FontSize.sm],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.snug,
    color: Color.doveGray,
  },

  landingPageHeader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s32, FontSize.s40, FontSize.s56],
    fontWeight: [FontWeight.w500, FontWeight.w500, FontWeight.w700],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },

  landingPageSubheader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s26, FontSize.s36, FontSize.s48],
    fontWeight: [FontWeight.w500, FontWeight.w500, FontWeight.w700],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },

  landingSectionHeader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s24, FontSize.s30, FontSize.s36],
    fontWeight: [FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },

  landingSectionSubheader: {
    marginBottom: [3, 4],
    marginRight: [4],
    marginLeft: [0],
    textAlign: 'left',
    fontSize: [FontSize.s20, FontSize.s26, FontSize.s32],
    fontWeight: [FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },

  landingArticleHeader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s16, FontSize.s18, FontSize.s20],
    fontWeight: [FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },
  landingHeader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s16, FontSize.s18, FontSize.s18],
    fontWeight: [FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h160],
    color: Color.ebony,
  },

  // Desc

  landingPageText: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s16, FontSize.s18, FontSize.s20],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h155],
    color: Color.paleSky,
    maxWidth: ['100%'],
  },

  landingSectionText: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s16, FontSize.s16, FontSize.s18],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h155],
    color: Color.paleSky,
  },

  landingSectionListItemText: {
    marginBottom: [0],
    textAlign: 'left',
    fontSize: [FontSize.s16, FontSize.s18, FontSize.s20],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h190],
    color: Color.paleSky,
  },

  landingArticleText: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s16],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h155],
    color: Color.emperor,
  },

  landingCardText: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [
      FontSize.s14,
      FontSize.s16,
      FontSize.s18,
      FontSize.s20,
      FontSize.xls22,
    ],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h160],
    color: Color.emperor,
  },

  landingText: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [
      FontSize.s14,
      FontSize.s14,
      FontSize.s16,
      FontSize.s18,
      FontSize.xls20,
    ],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h160],
    color: Color.paleSky,
  },

  // Onboarding
  onboardingPageHeader: {
    marginBottom: [2, 3],
    paddingX: [2, 3],
    textAlign: 'center',
    fontSize: [FontSize.s32, FontSize.s40, FontSize.s48],
    fontWeight: [FontWeight.w500, FontWeight.w500, FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.ebony,
    maxWidth: ['38.75rem'],
  },

  onboardingSectionHeader: {
    marginBottom: [3, 4],
    textAlign: 'left',
    fontSize: [FontSize.s18, FontSize.s20, FontSize.s22],
    fontWeight: [FontWeight.w500, FontWeight.w500, FontWeight.w500],
    letterSpacing: [LetterSpacing.wide],
    lineHeight: [LineHeight.h130],
    color: Color.emperor,
    maxWidth: ['38.75rem'],
  },

  onboardingDescriptionText: {
    marginBottom: [3, 4],
    paddingX: [2, 3],
    textAlign: 'center',
    fontSize: [FontSize.s16, FontSize.s18, FontSize.s20],
    fontWeight: [FontWeight.w400],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h155],
    color: Color.paleSky,
  },

  onboardingHighlightText: {
    marginBottom: [1, 2],
    paddingX: [2, 3],
    textAlign: 'center',
    fontSize: [FontSize.s12, FontSize.s14, FontSize.s16],
    fontWeight: [FontWeight.w500],
    letterSpacing: [LetterSpacing.normal],
    lineHeight: [LineHeight.h155],
    color: Color.primary,
  },

  // ----------------------------------------------------------------------

  cardBoxTitle: {
    margin: '0px',
    padding: '0px',
    fontSize: ['16px', '18px', '22px', '22px'],
    fontWeight: '500',
    letterSpacing: '0.01em',
    lineHeight: LineHeight.normal,
    color: Color.emperor,
  },

  cardBoxSubtitle: {
    margin: '2px 0px 5px 0px',
    padding: '0px',
    fontSize: ['9px', '10px', '11px', '13px'],
    fontWeight: '400',
    letterSpacing: '0.01em',
    lineHeight: LineHeight,
    color: Color.grayChateau,
    marginTop: '2px',
  },

  cardBoxTitleText: {
    margin: '0px',
    padding: '0px',
    fontSize: ['10px', '12px', '14px', '14px'],
    fontWeight: '400',
    letterSpacing: '0.01em',
    lineHeight: LineHeight,
    color: Color.osloGray,
    marginTop: '2px',
  },

  // <p />
  body: {
    fontSize: [FontSize.sm, FontSize.sm, FontSize.sm, FontSize.sm],
    fontWeight: FontWeight.normal,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.normal,
    color: Color.doveGray,
  },
  body2: {
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.normal,
    color: Color.doveGray,
  },
  body3: {
    fontSize: [FontSize.sm, FontSize.sm, FontSize.sm, FontSize.sm],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.normal,
    color: Color.mineShaft,
  },

  // Other
  label: {
    ...BaseTextStyle,
    marginBottom: 1,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.normal,
    color: Color.mineShaft,
    // textTransform: 'uppercase',
  },

  input: {
    ...BaseTextStyle,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wider,
    lineHeight: LineHeight.relaxed,
    color: Color.doveGray,
  },

  placeholder: {
    ...BaseTextStyle,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.relaxed,
    color: Color.placeholder,
  },

  fixed: {
    ...BaseTextStyle,
    fontSize: [FontSize.md, FontSize.md, FontSize.md, FontSize.md],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
    lineHeight: LineHeight.relaxed,
    color: Color.silverChalice,
    backgroundColor: Color.basic,
    minHeight: '1.375rem',
  },
};

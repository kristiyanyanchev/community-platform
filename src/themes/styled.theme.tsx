import { darken, lighten } from 'polished'
// use enum to specify list of possible colors for typing
export enum colors {
  white = 'white',
  black = 'black',
  blue = '#89a3d4',
  lightblue = '#e2edf7',
  darkgrey = '#333333',
  lightgrey = '#f6f6f6',
  grey = '#686868',
  grey2 = '#9b9b9b',
  grey3 = '#E4E4E4',
  grey4 = '#E9E9E9',
  greyStroke = '#AEAEAE',
  green = '#88e3c7',
  yellow = '#fee77b',
  error = '#f44336',
  background = '#f4f6f7',
  primary = yellow,
  secondary = lightblue,
}

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'disabled'
  | 'dark'
  | 'light'

const buttons = {
  primary: {
    fontFamily: '"Varela Round", Arial, sans-serif',
    border: '2px solid ' + colors.black,
    color: colors.black,
    backgroundColor: colors.primary,
    padding: '15px',
    transition: '.2s ease-in-out',
    '&:hover': {
      backgroundColor: darken(0.08, colors.primary),
      transform: 'translateY(-5px)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  secondary: {
    fontFamily: '"Varela Round", Arial, sans-serif',
    border: '2px solid ' + colors.black,
    color: colors.black,
    backgroundColor: colors.secondary,
    transition: '.2s ease-in-out',
    '&:hover': {
      backgroundColor: lighten(0.03, colors.secondary),
      transform: 'translateY(-5px)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  outline: {
    color: colors.black,
    border: '1px solid ' + colors.greyStroke,
    backgroundColor: 'white',
  },
  disabled: {
    color: colors.grey,
    backgroundColor: colors.black,
    opacity: 0.3,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
  },
  light: {
    backgroundColor: colors.lightgrey,
    color: colors.black,
  },
}

const space = [
  0,
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  105,
  110,
  115,
  120,
  125,
  130,
  135,
  140,
]
const radii = space
const fontSizes = [10, 12, 14, 18, 22, 30, 38, 42, 46, 50, 58, 66, 74]
const breakpoints = ['32em', '48em', '64em']
// standard widths: 512px, 768px, 1024px
const maxContainerWidth = 1280
const regular = 400
const bold = 600
// cc - assume standard image widths are 4:3, however not clearly defined

export default {
  colors,
  buttons,
  breakpoints,
  space,
  radii,
  fontSizes,
  maxContainerWidth,
  regular,
  bold,
}

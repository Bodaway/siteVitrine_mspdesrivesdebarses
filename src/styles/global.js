import { css } from "styled-components"
import styled from "styled-components"

export const shadow = css`
  -moz-box-shadow: 0px 3px 10px 0px #cfcfcf;
  -webkit-box-shadow: 0px 3px 10px 0px #cfcfcf;
  -o-box-shadow: 0px 3px 10px 0px #cfcfcf;
  box-shadow: 0px 3px 10px 0px #cfcfcf;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#cfcfcf, Direction=180, Strength=10);
`
export const borderBox = css`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
export const Section = styled.section`
  display: relative;
  padding-top: 10vh;
`

export const SmallSection = styled(Section)`
  padding-top: 7vh;
  width: 35%;
`

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const mediaDevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  greaterthtablet: `(min-width: ${size.laptop})`,
}

export const theme = {
  recapColor: "#700DC4",
  presentationColor: "#0B1AB2",
  categorieColor: "#399129",
  actualiteColor: "#D29D00",
  contactColor: "#D83830",
  recrutementColor: "black",
  marginTopSection: "20px",
}

export const getRecapTheme = theme => ({
  ...theme,
  mainColor: theme.recapColor,
  altColor: theme.recapColor, //"#82C535",
})
export const getPresentationTheme = theme => ({
  ...theme,
  mainColor: theme.presentationColor,
  altColor: theme.presentationColor, //"#82C535",
})

export const getCategorieTheme = theme => ({
  ...theme,
  mainColor: theme.categorieColor,
  altColor: theme.categorieColor,
})

export const getActualiteTheme = theme => ({
  ...theme,
  mainColor: theme.actualiteColor,
  altColor: theme.actualiteColor,
})
export const getContactTheme = theme => ({
  ...theme,
  mainColor: theme.contactColor,
  altColor: theme.contactColor,
})

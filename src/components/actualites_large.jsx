import React, { useState } from "react"
import Slider from "react-slick"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, Section } from "../styles/global"
import Img from "gatsby-image"
import ActuModal from "./actualites_modal"

const InnerBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 50px;
`
const News = styled.div`
  ${shadow}
  display:flex;
  justify-content: space-between;
  margin: 10px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: stretch;
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;
  width: 90%;

  & img {
    border: solid 1px lightgray;
  }

  & h4 {
    padding: 10px;
  }
`
const VLine = styled.div`
  display: none;
  flex-direction: row;
  width: 1px;
  background-color: ${props => props.theme.mainColor};

  ${News}:hover & {
    display: flex;
  }
`
const InnerActu = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: center;

  & .slick-slider {
    display: flex;
    overflow: hidden;
  }
  & .slick-list {
    min-height: 0;
    min-width: 0;
    max-width: 90vw;
    overflow: hidden;
  }
  & .slick-track {
    display: flex;
    justify-content: baseline;
  }
  & .slick-arrow {
    display: flex;
    margin: 10px;
  }
`
const Image = styled(Img)`
  align-self: left;
`
const SliderContainer = styled.div`
  margin-top: ${props => props.theme.marginTopSection};
`

const PrevButton = ({ className, style, onClick }) => {
  return (
    <InnerBtn className={className} style={{ ...style }} onClick={onClick}>
      &lt;
    </InnerBtn>
  )
}
const NextButton = ({ className, style, onClick }) => {
  return (
    <InnerBtn className={className} style={{ ...style }} onClick={onClick}>
      &gt;
    </InnerBtn>
  )
}

const Actu = ({ actualite = {} }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const getFullScreen = e => {
    setIsFullScreen(true)
  }
  const closeFullScreen = () => {
    setIsFullScreen(false)
  }
  return (
    <>
      <News onClick={getFullScreen}>
        <Column>
          <Image fluid={actualite.image.childImageSharp.fluid} />
          <h4>{actualite.title}</h4>
        </Column>
        <VLine />
      </News>
      <ActuModal
        actualite={actualite}
        isFullScreen={isFullScreen}
        closeFullScreen={closeFullScreen}
      />
    </>
  )
}

const SliderActu = ({ actualites = [] }) => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const actulst = actualites.map(a => (
    <SliderContainer>
      <Actu actualite={a} />
    </SliderContainer>
  ))

  return (
    <InnerActu>
      <Slider {...settings}>{actulst}</Slider>
    </InnerActu>
  )
}

const ActualitesLarge = ({ data }) => {
  return (
    <Section id="actualitelarge">
      <SectionTitle title="Actualités" />

      <SliderActu actualites={data} />
    </Section>
  )
}

export default ActualitesLarge

import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import MyTypewriter from "./UI/MyTypewriter";
function About() {
  const details = [
    {
      heading: "Summary",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quasi aperiam facere ipsum porro repudiandae? Molestias beatae odit atque neque suscipit autem magnam. Doloremque alias modi minus est amet!",
      image: "/assets/about-me.svg",
    },
    {
      heading: "Experience",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quasi aperiam facere ipsum porro repudiandae? Molestias beatae odit atque neque suscipit autem magnam. Doloremque alias modi minus est amet!",
      image: "/assets/about-work.svg",
    },
    {
      heading: "Education",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quasi aperiam facere ipsum porro repudiandae? Molestias beatae odit atque neque suscipit autem magnam. Doloremque alias modi minus est amet!",
      image: "/assets/about-educ.svg",
    },
    {
      heading: "Personal",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quasi aperiam facere ipsum porro repudiandae? Molestias beatae odit atque neque suscipit autem magnam. Doloremque alias modi minus est amet!",
      image: "/assets/about-personal.svg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
  };

  return (
    <Box>
      <MySection heading={"aboutMe"}>
        <MyTypewriter words={["My info"]} />
        <Box as={Slider} mb='80px' px='32px' py='16px' {...sliderSettings}>
          {details.map((item, i) => {
            const isEven = (i + 1) % 2 === 0;
            return (
              <Box px='24px' key={item.heading}>
                <Text
                  textAlign='center'
                  fontWeight='thin'
                  fontSize='48px'
                  mb='40px'
                  textDecoration='underline'
                  textDecorationColor='cyan'
                  textUnderlineOffset='8px'
                >
                  {item.heading}
                </Text>
                <Grid
                  alignItems='center'
                  justifyContent='center'
                  justifyItems='center'
                  gridTemplateColumns={isEven ? "6fr 4fr" : "4fr 6fr"}
                >
                  {isEven ? (
                    <>
                      <Text
                        data-aos={i === 0 ? "fade-right" : ""}
                        fontSize='24px'
                        px='40px'
                      >
                        {item.text}
                      </Text>
                      <Image
                        data-aos={i === 0 ? "fade-left" : ""}
                        src={item.image}
                        filter={"drop-shadow(2px 2px 8px cyan)"}
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        filter={"drop-shadow(2px 2px 8px cyan)"}
                        data-aos={i === 0 ? "fade-right" : ""}
                        src={item.image}
                      />
                      <Text
                        data-aos={i === 0 ? "fade-left" : ""}
                        fontSize='24px'
                        px='40px'
                      >
                        {item.text}
                      </Text>
                    </>
                  )}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </MySection>
    </Box>
  );
}

export default About;

const NextArr = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      pos='absolute'
      top='50%'
      translateY='-50%'
      right='-56px'
      borderRadius='full'
      variant='outline'
      fontSize='32px'
      aspectRatio='1/1'
      p='24px'
      borderColor='coral'
      borderWidth='2px'
      color='coral'
      transition='all .4s'
      _hover={{
        filter: "drop-shadow(2px 2px 8px coral)",
      }}
    >
      <ArrowForwardIcon />
    </Button>
  );
};
const PrevArr = ({ onClick }) => {
  return (
    <Button
      transition='all .4s'
      _hover={{
        filter: "drop-shadow(2px 2px 8px coral)",
      }}
      onClick={onClick}
      pos='absolute'
      top='50%'
      translateY='-50%'
      left='-56px'
      borderRadius='full'
      variant='outline'
      fontSize='32px'
      aspectRatio='1/1'
      p='24px'
      borderColor='coral'
      borderWidth='2px'
      color='coral'
    >
      <ArrowBackIcon />
    </Button>
  );
};

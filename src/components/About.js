import {
  Box,
  Button,
  Grid,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import MySection from "./UI/MySection";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import TextHeading from "./3d/3DHeading";

function About() {
  const details = [
    {
      heading: "Summary",
      text: "I'm Jason Alexander Lapina, an expert web developer and web designer. My experience in the industry has allowed me to design and develop websites on time and with the best quality. I spend most of my time designing, coding, or learning new things.",
      image: "/assets/about-me.svg",
    },
    {
      heading: "Experience",
      text: "Over the course of my professional experience, I have contributed to both the design and development of my company's/clients' web apps using a variety of technology such as Figma for design, and React for development.",
      image: "/assets/about-work.svg",
    },
    {
      heading: "Education",
      text: "I am a self-taught web developer and designer which is proof in and of itself that I am more than capable of learning a lot of new things rather quickly",
      image: "/assets/about-educ.svg",
    },
    {
      heading: "Personal",
      text: "My hobbies outside of design and development would include gaming, watching a movie/series, and doing at-home workouts",
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
  const smallSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [isMD] = useMediaQuery("(min-width: 768px)");

  return (
    <Box id='About'>
      <MySection heading={"aboutMe"}>
        {/* <MyTypewriter words={["My info"]} /> */}
        <TextHeading text={"Background"} />
        {/* FOR SMALLER SCREENS */}
        {!isMD && (
          <Box as={Slider} {...smallSettings}>
            {details.map((item) => (
              <Box key={item.heading}>
                <Text textAlign='center' mb='16px' fontSize='32px'>
                  {item.heading}
                </Text>
                <Text px='8px'>{item.text}</Text>
              </Box>
            ))}
          </Box>
        )}

        {/* FOR LARGE SCREENS */}
        {isMD && (
          <Box
            as={Slider}
            // overflowX='hidden'
            mb='80px'
            // px='32px'
            // py='16px'
            {...sliderSettings}
          >
            {details.map((item, i) => {
              const isEven = (i + 1) % 2 === 0;
              return (
                <Box px='56px' key={item.heading}>
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
        )}
      </MySection>
    </Box>
  );
}

export default About;

const NextArr = ({ onClick }) => {
  return (
    <Button
      opacity={{ base: 0, md: 1 }}
      pointerEvents={{ base: "none", md: "auto" }}
      right='8px'
      onClick={onClick}
      pos='absolute'
      top='50%'
      translateY='-50%'
      borderRadius='full'
      variant='outline'
      fontSize='32px'
      aspectRatio='1/1'
      p='24px'
      borderColor='#ff00a0'
      borderWidth='2px'
      color='#ff00a0'
      transition='all .4s'
      _hover={{
        filter: "drop-shadow(2px 2px 8px #ff00a0)",
      }}
    >
      <ArrowForwardIcon />
    </Button>
  );
};
const PrevArr = ({ onClick }) => {
  return (
    <Button
      zIndex={5}
      opacity={{ base: 0, md: 1 }}
      pointerEvents={{ base: "none", md: "auto" }}
      left='8px'
      transition='all .4s'
      _hover={{
        filter: "drop-shadow(2px 2px 8px #ff00a0)",
      }}
      onClick={onClick}
      pos='absolute'
      top='50%'
      translateY='-50%'
      borderRadius='full'
      variant='outline'
      fontSize='32px'
      aspectRatio='1/1'
      p='24px'
      borderColor='#ff00a0'
      borderWidth='2px'
      color='#ff00a0'
    >
      <ArrowBackIcon />
    </Button>
  );
};

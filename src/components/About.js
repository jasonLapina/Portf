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
import MyTypewriter from "./UI/MyTypewriter";

function About() {
  const details = [
    {
      heading: "Summary",
      text: "I'm Jason Alexander Lapina, an experienced self-taught web developer. My professional experience has allowed me to not only hone the skills I already have but to also expand my tech stack. I spend most of my time either coding or learning new things.",
      image: "/assets/about-me.svg",
    },
    {
      heading: "Experience",
      text: "Over the course of a year, I have had the privilege of contributing to and leading diverse projects, utilizing a range of technologies. Prior to my professional experience, I dedicated significant time to crafting personal projects and refining my coding skills.",
      image: "/assets/about-work.svg",
    },
    {
      heading: "Education",
      text: "I studied Agricultural and Applied Economics at the University of the Philippines. I've since developed a strong passion for programming and self-studied, not only web development, but also I.T. and AWS via online courses. My certifications are available upon request.",
      image: "/assets/about-educ.svg",
    },
    {
      heading: "Personal",
      text: "When I'm not coding or learning something new about tech, I usually watch a movie/series. I'm currently invested in the anime One Piece. I also play a variety of video games, mostly online-competitive games and single-player games.",
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
        <MyTypewriter words={["My info"]} />
        {/* FOR SMALLER SCREENS */}
        {!isMD && (
          <Box as={Slider} {...smallSettings}>
            {details.map((item) => (
              <>
                <Text textAlign='center' mb='16px' fontSize='32px'>
                  {item.heading}
                </Text>
                <Text px='8px'>{item.text}</Text>
              </>
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
      zIndex={5}
      opacity={{ base: 0, md: 1 }}
      pointerEvents={{ base: "none", md: "auto" }}
      left='8px'
      transition='all .4s'
      _hover={{
        filter: "drop-shadow(2px 2px 8px coral)",
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
      borderColor='coral'
      borderWidth='2px'
      color='coral'
    >
      <ArrowBackIcon />
    </Button>
  );
};

import React from "react";

import { Icon, Tooltip, Box, Tag } from "@chakra-ui/react";

import {
  BiSolidUser,
  BiSolidHome,
  BiSolidWrench,
  BiSolidFolder,
  BiSolidPhone,
} from "react-icons/bi";
import MotionBox from "./MotionBox";
import { DownloadIcon } from "@chakra-ui/icons";
function Navbar() {
  const sections = [
    { label: "Home", icon: BiSolidHome },
    {
      label: "Projects",
      icon: BiSolidFolder,
    },
    {
      label: "Skills",
      icon: BiSolidWrench,
    },
    {
      label: "About",
      icon: BiSolidUser,
    },
    {
      label: "Contact",
      icon: BiSolidPhone,
    },
  ];
  const handleNav = (section) => {
    const scrollTo = document.getElementById(section);
    const offset = 40;
    const scrollPos = scrollTo.offsetTop - offset;
    window.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });
  };

  return (
    <MotionBox
      display='flex'
      alignItems='center'
      w='fit-content'
      pos='fixed'
      mx='auto'
      borderRadius='full'
      zIndex={5}
      left='50%'
      bgColor='blackAlpha.600'
      transform='translateX(-50%)'
      backdropFilter='auto'
      backdropBlur='8px'
      px={{ md: "40px", base: "20px" }}
      py='20px'
      gap='16px'
      justify='center'
      initial={{ opacity: 0, bottom: "-80px" }}
      animate={{
        opacity: 1,
        bottom: "40px",
      }}
      transition={{
        duration: 1,
        delay: 1.2,
      }}
    >
      {sections.map((item) => (
        <Tooltip
          fontSize='16px'
          arrowSize='15'
          placement='top'
          label={item.label}
          hasArrow
          key={item.label}
        >
          <CustomCard onClick={() => handleNav(item.label)} cursor='pointer'>
            <Icon fontSize='24px' color='coral' as={item.icon} />
          </CustomCard>
        </Tooltip>
      ))}
      <Tooltip
        fontSize='16px'
        arrowSize='15'
        placement='top'
        label={"Download resume"}
        hasArrow
      >
        <Box as='a' href='Jason Lapina - Resume.pdf' download cursor='pointer'>
          <DownloadIcon fontSize='24px' color='coral' />
        </Box>
      </Tooltip>
    </MotionBox>
  );
}

export default Navbar;

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box>
    <Tag bg='none' ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

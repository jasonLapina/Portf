import React from "react";

import { HStack, Icon, Tooltip, Box, Tag } from "@chakra-ui/react";

import {
  BiSolidUser,
  BiSolidHome,
  BiSolidWrench,
  BiSolidFolder,
  BiSolidPhone,
} from "react-icons/bi";
function Navbar() {
  const sections = [
    { label: "Home", icon: BiSolidHome },
    {
      label: "About",
      icon: BiSolidUser,
    },
    {
      label: "Skills",
      icon: BiSolidWrench,
    },
    {
      label: "Projects",
      icon: BiSolidFolder,
    },
    {
      label: "Contact",
      icon: BiSolidPhone,
    },
  ];
  return (
    <HStack
      w='320px'
      pos='fixed'
      mx='auto'
      borderRadius='full'
      bottom='40px'
      zIndex={5}
      left='50%'
      bgColor='blackAlpha.600'
      transform='translateX(-50%)'
      backdropFilter='auto'
      backdropBlur='8px'
      px='40px'
      py='20px'
      gap='16px'
      justify='center'
    >
      {sections.map((item) => (
        <Tooltip
          fontSize='16px'
          arrowSize='15'
          placement='top'
          label={item.label}
          hasArrow
        >
          <CustomCard cursor='pointer'>
            <Icon fontSize='24px' color='coral' as={item.icon} />
          </CustomCard>
        </Tooltip>
      ))}
    </HStack>
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

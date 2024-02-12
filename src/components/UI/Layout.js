import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <Box overflowX='hidden' color='white' bgColor='rgba(0,0,0,.6)'>
      <Outlet />

      <Box
        zIndex={-2}
        as='video'
        position='fixed'
        autoPlay
        loop
        muted
        top='0'
        left='0'
        poster='/assets/hero-poster.png'
        filter='grayscale(.5)'
        objectFit='cover'
        h='100vh'
        w='100%'
        // h={{ base: "100%" }}
      >
        <source src='/assets/hero-bg.mp4' />
      </Box>
    </Box>
  );
}

export default Layout;

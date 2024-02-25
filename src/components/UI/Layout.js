import { Box, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

import { Outlet } from "react-router-dom";
function Layout() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Box overflowX='hidden' color='white' bgColor='rgba(0,0,0,.6)'>
      <Skeleton isLoaded={isLoaded}>
        <Outlet />
      </Skeleton>
      <Box
        zIndex={-2}
        as='video'
        position='fixed'
        autoPlay
        loop
        muted
        top='0'
        left='0'
        poster='/assets/endless-constellation.svg'
        filter='grayscale(.5)'
        objectFit='cover'
        h='100vh'
        w='100%'
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src='/assets/hero-bg.mp4' />
      </Box>
    </Box>
  );
}

export default Layout;

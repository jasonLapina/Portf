import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <Box overflowX='hidden' color='white' bgColor='#28282B'>
      <Outlet />
    </Box>
  );
}

export default Layout;

import React from "react";
import Sidebar from "@/components/common/Sidebar";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box bg="gray.900" className="flex min-h-screen">
            <Sidebar/>
            <Box className="p-8 flex-1 overflow-x-hidden h-screen" boxShadow="lg">
                {children}
            </Box>
        </Box>
    )
}

export default Layout;
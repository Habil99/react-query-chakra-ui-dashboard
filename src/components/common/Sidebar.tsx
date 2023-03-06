import React, { useState } from "react"
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "@chakra-ui/button";
import HamburgerIcon from "@/components/icons/HamburgerIcon";

const Sidebar = () => {
    const [extendSidebar, setExtendSidebar] = useState<boolean>(true);

    function toggleSidebar() {
        console.log("toggleSidebar")
        setExtendSidebar(!extendSidebar);
    }

    return (
        <Box width={extendSidebar ? 320 : 32} px={2} flexShrink={0} transition="all 0.2s linear" bgColor="gray.900"
             className="border-r border-solid border-[#25293C]">
            <VStack py={8}>
                <HStack justifyContent="space-between" w="full">
                    <Heading size="md">
                        {extendSidebar ? (
                            <Image src="/icons/logo.svg" alt="Logo" width={200} height={80}/>
                        ) : (
                            <Image src="/icons/logo-icon.svg" alt="Logo" width={40} height={40}/>
                        )}
                    </Heading>
                    <Button
                        bg="transparent"
                        _hover={{
                            bg: "#1e222f"
                        }}
                        p={1}
                        mb={-2}
                        onClick={toggleSidebar}
                    >
                        <HamburgerIcon/>
                    </Button>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Sidebar;
import React, { memo } from "react"
import { Heading, HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";

interface PageHeaderProps {
    title: string
    buttonLabel: string
    onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PageHeader = ({ title, buttonLabel, onButtonClick }: PageHeaderProps) => {
    return (
        <HStack justifyContent="space-between" mb={4} alignItems="center">
            <Heading as="h1" size="xl" color="gray.200">{title}</Heading>
            <Button
                rightIcon={<AddIcon/>}
                colorScheme="green"
                variant="solid"
                onClick={onButtonClick}
            >
                {buttonLabel}
            </Button>
        </HStack>
    )
}

export default memo(PageHeader);
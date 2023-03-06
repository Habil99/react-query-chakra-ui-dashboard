import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CreateCitizenDrawerProps {
    drawerIsOpen: boolean;
    closeDrawer: () => void;
    children: ReactNode;
    footer: ReactNode;
}

const CreateCitizenDrawer = ({ drawerIsOpen, closeDrawer, children, footer }: CreateCitizenDrawerProps) => {
    return (
        <Drawer placement="right" size="lg" isOpen={drawerIsOpen} onClose={closeDrawer}>
            <DrawerOverlay/>
            <DrawerContent bgColor="gray.900">
                <DrawerCloseButton color="gray.200" bgColor="gray.800"/>
                <DrawerHeader color="gray.200">Create a citizen</DrawerHeader>
                <DrawerBody>
                    {children}
                </DrawerBody>
                <DrawerFooter borderTopWidth={1}>
                    {footer}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateCitizenDrawer;
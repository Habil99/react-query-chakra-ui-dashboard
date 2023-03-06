import { createIcon } from "@chakra-ui/icon";

const HamburgerIcon = createIcon({
    displayName: "HamburgerIcon",
    viewBox: "0 0 24 24",
    path: (
        <path d="M15.125 7.625H43.25M2 22.625H43.25M2 37.625H43.25M2 13.25L7.625 7.625L2 2" stroke="white"
              strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
    )
})

export default HamburgerIcon;
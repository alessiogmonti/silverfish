import { mode } from "@chakra-ui/theme-tools";
var cfun = require("simple-color-functions")
export const ButtonStyles = {
    baseStyle: {},
    sizes: {},
    variants: {
        primary: (props) => ({
            bg: mode("rgba(225,225,225,0.1)", "rgba(113,128,150,0.7)")(props),
            border: "0.1px solid black",
            _hover: {
                bg: mode( "blue.200", "blue.600" )(props),
                border: "transparent",
                text: "grey"
            }
        }),
        secondary: (props) => ({
            bg: mode('green.400','orange.600')(props),
            color: "grey.100",
            _hover: {
                bg: mode( "rgba(225,225,225,0.1)", "rgba(113,128,150,0.7)" )(props),
                border: "0.1px solid grey"
            } 
        }),
        tertiary: (props) => ({
            bg: mode("rgba(225,225,225,0.1)","rgba(113,128,150,0.7)")(props),
            border: "0.1px solid black",
            _hover: {
                bg: mode( "blue.400", "blue.300" )(props),
                border: "transparent",
                color: "grey.100"
            },
        }),
    },
    defaultProps: {}
};
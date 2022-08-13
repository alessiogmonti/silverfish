import { Main } from './Main'
import { LinkIcon, CalendarIcon } from '@chakra-ui/icons'
import {Link as ChakraLink, List, ListIcon, ListItem, Center, Box} from '@chakra-ui/react'
export const Content = () => {
return (
    <Main>
        <Center>
            <Box bg={"rgba(225,225,225,0.1)"} _dark={{bg:"rgba(113,128,150,0.7)"}}
                borderRadius='md'
                borderWidth={"0.1px"}
                borderColor={"black"}
                padding={"10px"}>
            {/* <Text color="text" mr={"10px"}>
                Most recent articles <br/>
            </Text> */}
            <List spacing={3} my={0} color="text">
                <ListItem>
                {/* <ListIcon as={CheckCircleIcon} color="green.500" /> */}
                <LinkIcon color="green.500"/>
                <ChakraLink
                    isExternal
                    href="https://chakra-ui.com"
                    flexGrow={1}
                    mr={2}
                    ml={2}
                >
                    Mission statement
                </ChakraLink>
                </ListItem>
                <ListItem>
                <ListIcon as={CalendarIcon} color="green.500" />
                <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
                    Read our white paper in <br/>
                </ChakraLink>
                </ListItem>
            </List>
            </Box>
        </Center>
    </Main>
    )
}
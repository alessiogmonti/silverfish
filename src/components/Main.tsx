import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100vw"
    // maxWidth="48rem"
    mt={["10vh","15vh","25vh","25vh"]}
    pt="8rem"
    px="1rem"
    {...props}
  />
)

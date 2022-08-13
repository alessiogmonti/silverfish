import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bgGradient='linear(to-r, gray.200, green.100, blue.100)'
    // color="Red.200"
    _dark={{
      bgGradient: 'linear(to-r, gray.800, orange.900, blue.900)',
    }}
    transition="all 0.25s ease-out"
    {...props}
  />
)

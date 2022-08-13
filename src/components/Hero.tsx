import { Box, Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title, subtitle }: { title, subtitle: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="40vh"
    z-index='2'
  >
    <Flex 
        height={["4vh","6.6vh","6vh","6.6vh"]}
        justifyContent="center"
        alignItems="bottom"
        bg="gray.100"
        borderRadius={'xl'}
        borderWidth={"0.1px"}
        borderColor={"black"}
        >
      <Heading fontSize={["12vw","12vw","12vw","6vw"]} 
                color={'gray.500'} _dark={{color:'blue.100'}} 
                style={{mixBlendMode: 'difference'}}
                >
                  {title}
      </Heading>
    </Flex>
    <Flex 
        pb={"1%"}
        height={["2vh","3vh","3vh","2vh"]}
        width={["20vw","20vw","20vw","6vw"]}
        margin={1}
        justifyContent="center"
        alignItems="top"
        bg="gray.100"
        borderRadius={'xl'}
        borderWidth={"0.1px"}
        borderColor={"black"}
        >
        <Heading alignItems="center" 
        fontSize={["3vw","3vw","3vw","1vw"]} 
        color={'gray.500'} _dark={{color:'blue.200'}} 
        style={{mixBlendMode: 'difference'}}
        >
          data-driven <br/> intelligence
        </Heading>
      </Flex>
  </Flex>
)

Hero.defaultProps = {
  title: 'SILVERFISH',
  subtitle: 'market dynamics'
}

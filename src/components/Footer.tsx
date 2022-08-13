import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, StatGroup, Box} from '@chakra-ui/react'
import { Stats } from './stats'

export const Footer = () => (
  <Box position={["relative", "relative","relative","absolute"]} right={["-10vw","-29vw", "-32vw",0]} bottom={["-3vh","-5vh","0vh"]}
        margin={"0.3%"} 
        height={["13vh","11vh", "11vh", "12vh"]}
        width={["80vw","40vw", "35vw","20vw"]} 
        bg={"rgba(225,225,225,0.1)"}
        _dark={{
          bg: "rgba(113,128,150,0.4)"
          }
        }
        borderRadius='md'
        borderWidth={"0.1px"}
        borderColor={"black"}>
    <Tabs>
      <Center>
        <TabList>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
        </TabList>
      </Center>
      <TabPanels>
        <TabPanel>
          <StatGroup>
            <Stats title={"Development"} amount={"1%"} type={'increase'}/>
            <Stats title={"Marketing"} amount={"3%"} type={'increase'}/>
            <Stats title={"Liquidity Pool"} amount={"2%"} type={'increase'}/>
          </StatGroup> 
        </TabPanel>
        <TabPanel>
          <StatGroup>
            <Stats title={"Development"} amount={"3%"} type={'decrease'}/>
            <Stats title={"Marketing"} amount={"1%"} type={'decrease'}/>
            <Stats title={"Liquidity Pool"} amount={"2%"} type={'decrease'}/>
          </StatGroup>        
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
)

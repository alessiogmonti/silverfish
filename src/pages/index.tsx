import { Box, Center } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Content } from '../components/Content'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Scene from '../components/scene.jsx'

const Index = () => {
  return(
  <Container height="100vh">
    <Box style={{zIndex:"2"}} width="100vw" height="10vh">
    <Hero/>
    <Content/>
    <DarkModeSwitch />
    <Footer/>
    <Center>
      <CTA />
    </Center>
    </Box>
    <div style={{height:"100vh", position:"absolute", zIndex:"1", width:"100vw"}}>
      <Canvas style={{cursor: "crosshair"}} orthographic camera={{ position: [40, 100, 500], rotation: [30,50,0], fov: 50, near: 0.01, far: 1000 }} gl={{ antialias: true }} onCreated={state => state.gl.setClearColor( 0xffffff, 0)}>
        <Scene/>
      </Canvas>
      <Loader 
      containerStyles={{position:'absolute', top:'0px', right:'0px', flexDirection:'column', alignItems:'top', bg:'transparent'}}
      />
    </div>
  </Container>
  )
}

export default Index

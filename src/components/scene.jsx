import { Suspense, useRef } from 'react'
import { OrbitControls, Center, SpotLight, useHelper } from '@react-three/drei'
import { SpotLightHelper, AxesHelper } from 'three'
import Model from './archdraco.jsx'
  
export default function Scene(){
    const spotlight = useRef()
    // useHelper(spotlight, SpotLightHelper, "teal")
    return (
        <>
            <Suspense fallback={null}>
                <ambientLight intensity={3}/>
                <spotLight distance={300} angle={0.95} attenuation={5} ref={spotlight} anglePower={5} position={[10,500,0]} intensity={10}/>          
                <Center position={[0,0,0]} rotation={[0.00001,0,0]}>
                <Model rotate={[290,155,0]} scale={[3,3,3]} position={[0,300,0]}/>
                <gridHelper args={[1000, 15, 30]} />
                </Center>
            </Suspense>
            <OrbitControls zoomSpeed={0.5} autoRotate autoRotateSpeed={0.5} rotateSpeed={2} dampingFactor={0.5} minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 1.7} makeDefault />
        </>
    )
}
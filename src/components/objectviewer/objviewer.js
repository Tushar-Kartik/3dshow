import React, { useState }  from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import './objviewer.css';

function Model(props) {
    const { scene } = useGLTF(process.env.PUBLIC_URL +`/${props.showglb}`);
    console.log(props.showglb.size);

    return <primitive object={scene} scale={0.01} {...props} />;
}

function Objviewer(props){
  return (

    <Canvas  className='canva'
        shadows
        dpr={[1,2]}
        camera={{ fov: 40 }}
        style={{
          
             "width":"60vw",
             "height":"60vh"
            }}>

        <color attach="background" args={[`#${props.bgcolor}`]}/>

        <PresentationControls 
        speed={props.setspeed}
        global 
        zoom={0.1} 
        polar={[-0.1,Math.PI / 4]}>

            <Stage environment={`${props.showscene}`}>
            <Model  
            showglb={props.show_glb}
            scale={0.01} />
            </Stage>

        </PresentationControls>

    </Canvas>
  )
}

export default Objviewer;

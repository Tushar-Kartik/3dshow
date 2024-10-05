import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model(props) {
    const { scene } = useGLTF(process.env.PUBLIC_URL + `/${props.showglb}`);
    return <primitive object={scene} scale={0.1} {...props} />;
}

export default Model;

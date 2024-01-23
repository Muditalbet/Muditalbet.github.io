"use client"
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Cobe() {
    const canvasRef = useRef();
    useEffect(() => {
        let phi = 0;
        let scale = 1.5;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.15,
            mapBaseBrightness:0.05,
            opacity:0.8,
            dark: 1,
            diffuse: 2.25,
            mapSamples: 16000,
            mapBrightness: 4,
            baseColor: [225/225, 225/225, 225/225],
            markerColor: [1, 1, 1],
            glowColor:[25/225, 26/225, 31/225],
            markers: [],
            offset: [0, - width * .8],
            scale: scale,
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                if (scale < 2.2){
                    state.scale = scale
                    scale += 0.005
                }
                else if (scale < 2.4){
                    state.scale = scale
                    scale += 0.0035
                }
                else if (scale < 2.5){
                    state.scale = scale
                    scale += 0.002
                }
                state.phi = phi
                phi += 0.003
                state.width = width * 2
                state.height = width * 2
            }
        })
        setTimeout(() => canvasRef.current.style.opacity = '1')
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])
    return <div style={{
        width: '100%',
        aspectRatio: 1/2,
        margin: 'auto',
        position: 'relative',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }}>
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                opacity: 0,
                transition: 'opacity 1s ease',
            }}
        />
    </div>
}
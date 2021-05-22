import React, {createRef, useEffect} from 'react';
import styled from 'styled-components';

const DreamCanvas = () => {
    let canvasRef = createRef();
    let ctx;
    let painting = false;

    useEffect(() => {
        const canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.strokeStyle="black";
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseLeave", stopPainting);
    }, []);

    function onMouseMove(event) {
        const x = event.offsetX;
        const y = event.offsetY;
    
        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }

    function startPainting(event) {
        painting = true;
    }

    function stopPainting(event) {
        painting = false;
    }

    return (<DreamCanvasWrap>
            <canvas ref={canvasRef} id="canvas"></canvas>
        </DreamCanvasWrap>
    );
};

export default DreamCanvas;

const DreamCanvasWrap = styled.div`
    display: flex;
    flex-direction: column;
    #canvas {
        width: 104.4rem;
        border: 0.1rem solid;
    }
`;
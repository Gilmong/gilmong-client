import React, {createRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const DreamCanvas = (props) => {
    let canvasRef = createRef();
    let ctx;
    let painting = false;

    useEffect(() => {
        const canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.strokeStyle = "white";
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseLeave", stopPainting);
    }, []);

    function onMouseMove(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        // console.log(x);
    
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

    // function handleSaveClick() {
    //     const image = canvas.toDataURL();
    //     const link = document.createElement("a");
    //     link.href = image;
    //     link.download = "myDream";
    //     link.click();
    // }

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
        height: 59rem;
        border: 0.1rem solid;
        border-color: white;
    }
`;
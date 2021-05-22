import React, {createRef, useEffect} from 'react';

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

    return <canvas ref={canvasRef}></canvas>;
};

export default DreamCanvas;
import React from "react";
import { useRef, useEffect } from "react";


const Footer = ({ Wrapper }) => {
    // 스크롤 프로그래스 원형바
    const svgCircle = useRef();
    const moveTopButton = useRef();

    useEffect(() => {

        // 페이지 높이값 구해서 스크롤 할 때마다 테두리 채워지게
        const winHeight = window.innerHeight;
        const wrapHeight = Wrapper.current.clientHeight;
        const realHeight = wrapHeight - winHeight;

        window.addEventListener('scroll', function(){
            const scrollTop = window.scrollY;
            const scrollPercentage = Math.round((scrollTop / realHeight) * 100);
            const dashOffset = 300 - scrollPercentage * 3
            console.log(dashOffset);
            svgCircle.current.style.strokeDashoffset = dashOffset;
        });

        // 클릭시 상단으로 이동
    }, [])
    
    return (
        <>
            <footer>
                <div className="scroll-progressbar">
                    <svg viewBox="0 0 100 100" width="100" height="100">
                        <circle cx="50" cy="50" r="48" strokeDasharray="306" style={{strokeDashoffset: '300'}} ref={svgCircle}></circle>
                    </svg>
                    <div className="move-top-button">상단으로 이동</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
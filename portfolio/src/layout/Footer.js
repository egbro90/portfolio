import React from "react";
import { useRef, useEffect } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";


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
        moveTopButton.current.addEventListener('click', function(){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        });

        // 깃헙페이지에서 새로고침하면 url 못읽는 현상 스크립트
        (function (l) {
            if (l.search[1] === '/') {
              var decoded = l.search.slice(1).split('&').map(function (s) {
                return s.replace(/~and~/g, '&')
              }).join('?');
              window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))
    }, [])
    
    return (
        <>
            <footer>
                <div className="scroll-progressbar" ref={moveTopButton}>
                    <svg viewBox="0 0 100 100" width="100" height="100">
                        <circle cx="50" cy="50" r="48" strokeDasharray="306" style={{strokeDashoffset: '300'}} ref={svgCircle}></circle>
                    </svg>
                    <div className="move-top-button">
                        <IoIosArrowRoundDown size={50} />
                    </div>
                </div>
                
            </footer>
        </>
    )
}

export default Footer;
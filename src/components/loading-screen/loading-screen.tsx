import gsap from 'gsap';
import { useEffect } from 'react';
import CustomEase from 'gsap/CustomEase';
import TextPlugin from 'gsap/TextPlugin';

export const LoadingScreen = () => {
    gsap.registerPlugin(CustomEase, TextPlugin);

    useEffect(() => {
        const tl = gsap.timeline();

        const loadingScreen = document.querySelector('#loading-screen');
        const loadingBars = document.querySelector('#loading-bars');
        const topBar = document.querySelector('#top-bar');

        tl.to(topBar, {
            width: '100%',
            duration: 1.5,
            ease: CustomEase.create('custom', '.16,.42,.69,.01'),
        });

        tl.to(loadingBars, {
            opacity: 0,
            duration: 1,
        });

        tl.to(loadingScreen, {
            translateY: -100 + '%',
            duration: 1,
        });
    }, []);
    return (
        <div className="loading-screen" id="loading-screen">
            <div className="loading-bars" id="loading-bars">
                <div className="loading-bars__top" id="top-bar"></div>
                <div className="loading-bars__bottom" id="bottom-bar"></div>
            </div>
        </div>
    );
};

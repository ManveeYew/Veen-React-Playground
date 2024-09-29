import React from 'react';
import { ReactLenis } from 'lenis/react';
import sec1_dragon1 from '@/assets/images/3DImageSlider/dragon_1.jpg';
import sec1_dragon2 from '@/assets/images/3DImageSlider/dragon_2.jpg';
import sec1_dragon3 from '@/assets/images/3DImageSlider/dragon_3.jpg';
import sec1_dragon4 from '@/assets/images/3DImageSlider/dragon_4.jpg';
import sec1_dragon5 from '@/assets/images/3DImageSlider/dragon_5.jpg';
import sec1_dragon6 from '@/assets/images/3DImageSlider/dragon_6.jpg';
import sec1_dragon7 from '@/assets/images/3DImageSlider/dragon_7.jpg';
import sec1_dragon8 from '@/assets/images/3DImageSlider/dragon_8.jpg';
import sec1_dragon9 from '@/assets/images/3DImageSlider/dragon_9.jpg';
import sec1_dragon10 from '@/assets/images/3DImageSlider/dragon_10.jpg';

import './Landing.css';

const LandingPage: React.FC = () => {
    return (
        <ReactLenis root>
            <div className="container">
                <section className="section threed_image_slider">
                    <div className="banner">
                        <div
                            className="slider"
                            style={{ '--quantity': 10 } as React.CSSProperties}
                        >
                            <div
                                className="item"
                                style={
                                    { '--position': 1 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon1} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 2 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon2} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 3 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon3} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 4 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon4} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 5 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon5} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 6 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon6} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 7 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon7} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 8 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon8} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 9 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon9} alt="" />
                            </div>
                            <div
                                className="item"
                                style={
                                    { '--position': 10 } as React.CSSProperties
                                }
                            >
                                <img src={sec1_dragon10} alt="" />
                            </div>
                        </div>
                        <div className="content">
                            <h1 data-content="DRAGONS">DRAGONS</h1>
                            <div className="author">
                                <h2>manvee</h2>
                                <p>
                                    <b>Web Design</b>
                                </p>
                                <p>3D Image Slider From Lun Dev</p>
                            </div>
                            <div className="model"></div>
                        </div>
                    </div>
                </section>
                <section className="section section2"></section>
                <section className="section section3"></section>
                <section className="section section4"></section>
            </div>
        </ReactLenis>
    );
};

export default LandingPage;

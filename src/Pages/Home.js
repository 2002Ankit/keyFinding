import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from "@ant-design/icons"
import video from "../assets/backVideo/video.mp4"
import homeImg from "../assets/homeImg.png"
import "./Home.css";



function Home() {
    return (
        <div>
            <video autoPlay loop muted className="video-background">
                <source src={video} type="video/mp4" />

            </video>
            <div className='homeContent-container flex'>
                <div className=' w-[50vw] content-container'>
                    <div>
                        <h1 className=' home-title font-serif   text-richblack-100 text-[40px] font-semibold relative top-[8rem] left-[3rem]'>Welcome to find your Abstract</h1>
                    </div>
                    <div>
                        <p className=' home-description text-gray-400 text-[20px] relative top-[10rem] left-[3rem]  '>As we know, An abstract in a research paper is a concise summary of the entire paper,It provides an overview of the research topic, objectives, methodology, results, and conclusions. The purpose of the abstract is to give readers a quick understanding of the paper's content and to help them decide whether the full paper is relevant to their interests. Abstracts are often the first section of a research paper and are commonly used in academic journals, conference proceedings, and databases.</p>
                    </div>

                    <div className=' w-full relative top-[13rem] left-[5rem]'>
                        <Link to='/abstract'>
                            <button className='getStarted-btn text-white text-[20px] font-inter relative'>
                                Get Started<span className=' text-white '><ArrowRightOutlined /></span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='homeImage-container'>

                    <img src={homeImg} className='home-image' />

                </div>
            </div>

        </div>
    )
}

export default Home
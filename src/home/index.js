import React from 'react';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import texts from './texts';
import Project from './Project';

function Home() {

    return (
        <div className="Home-container">
            <div className='Palette'>
                <div className='Box1' /><div className='Box2' /><div className='Box3' />
            </div>
            <div className='Intro-container'>
                <div className='Title'>
                    Harry Lonsdale
                </div>
                <div className='Socials'>
                    <a href='https://linkedin.com/in/harry-lonsdale/' rel="noreferrer" style={{ color: "#FFF" }} target="_blank">
                        <LinkedinOutlined style={{ fontSize: '30px' }} />
                    </a>
                    <a href='https://github.com/harry-lons/' rel="noreferrer" style={{ color: "#FFF" }} target="_blank">
                        <GithubOutlined style={{ fontSize: '30px' }} />
                    </a>
                </div>
                <div className='Section-line' />
                <div className='Item-photo-container'>
                    <div className='Item'>
                        <div className='Welcome'>
                            Welcome!
                        </div>
                        <div className='Sub-text'>
                            This is my personal website, to document projects and more. Check out the <a href='https://github.com/harry-lons/portfolio' style={{ color: '#66b2b2' }} target="_blank" rel="noreferrer">GitHub for this site</a>
                        </div>
                        <div className='Sub-text'>
                            Click/tap on an item to expand details!
                        </div>
                    </div>
                </div>
                <div className='Intro-projects-spacing' />
                <div style={{width: '90%'}}>

                <Project {...texts.mileCalc} />

                <Project {...texts.TR} />

                <Project {...texts.hardHack} />

                <Project {...texts.projE} />

                <Project {...texts.Syn2fp} />
                </div>
            </div>
        </div>
    );
}

export default Home;

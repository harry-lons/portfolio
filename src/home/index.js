import React from 'react';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

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
                    <a href='https://linkedin.com/in/harry-lonsdale/' style={{ color: "#FFF" }} target="_blank">
                        <LinkedinOutlined style={{ fontSize: '30px' }} />
                    </a>
                    <a href='https://github.com/harry-lons/' style={{ color: "#FFF" }} target="_blank">
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
                            This is my personal website, to document projects and more. <a href='https://github.com/harry-lons/portfolio' style={{ color: '#66b2b2' }} target="_blank">GitHub for this site</a>
                        </div>
                        <div className='Sub-text'>
                            Scroll to discover!
                        </div>
                    </div>
                </div>
                <div className='Intro-projects-spacing' />
                <div style={{width: '90%'}}>
                <Project text=''
                    link='https://milecalc.harrylons.com'
                    title='MileCalc' />
                <Project text=''
                    link=''
                    title='BetterGraphs' />
                <Project text=''
                    link=''
                    title='UCSD HardHack 2024' />
                <Project text='Project euler is a '
                    link=''
                    title='Project Euler' />
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import texts from './texts';
import Project from './Project';

function Home() {

    // manually keep a list so I can adjust the order easily whenever I want
    const selectedProjects = [texts.RunSum, texts.CW, texts.mileCalc, texts.TR, texts.hardHack, texts.projE, texts.Syn2fp]
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
                            My name's Harry Lonsdale and I'm a third-year undergraduate student in Mathematics - Computer Science at UC San Diego.
                        </div>
                        <div className='Sub-text'>
                            This is my personal website, to document my experiences and projects. Check out the <a href='https://github.com/harry-lons/portfolio' style={{ color: '#66b2b2' }} target="_blank" rel="noreferrer">GitHub for this site</a>, or view my full contact info <a href='/contact' style={{ color: '#66b2b2' }}>here</a>.
                        </div>
                        <div className='Sub-text'>
                            Click/tap on an item to expand details!
                        </div>
                    </div>
                </div>
                <div className='Intro-projects-spacing' />
                <div style={{ width: '90%' }}>
                    {selectedProjects.map((oneProject, index) => (
                        <Project key={index} {...oneProject} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

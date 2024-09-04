import React from 'react';
import { LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

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
                    <a href='https://instagram.com/harry.lons/' style={{ color: "#FFF" }} target="_blank">
                        <InstagramOutlined style={{ fontSize: '30px' }} />
                    </a>
                </div>
                <div className='Section-line' />
                <div className='Item-photo-container'>
                    <div className='Item'>
                        <div className='Welcome'>
                            Welcome!
                        </div>
                        <div className='Sub-text'>
                            This is my personal website, to document projects and more.
                        </div>
                        <div className='Sub-text'>
                            Scroll to discover!
                        </div>
                    </div>
                </div>
            </div>
            <div className='Item'>

            </div>
        </div>
    );
}

export default Home;

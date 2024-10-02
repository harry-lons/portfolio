import React from 'react';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

function Contact() {

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
                            Contact
                        </div>
                        <div className='Sub-text'>
                            You can contact me through any method below:
                        </div>
                        <ul style={{textAlign:'left', marginLeft: 20, fontSize:24}}>
                            <li style={{wordWrap:'break-word'}}>
                                LinkedIn: <a style={{color: '#66b2b2'}} rel="noreferrer" target="_blank" href="https://linkedin.com/in/harry-lonsdale">https://linkedin.com/in/harry-lonsdale</a>
                            </li>
                            <li style={{wordWrap:'break-word'}}>
                                Instagram: <a style={{color: '#66b2b2'}} rel="noreferrer" target="_blank" href="https://www.instagram.com/harry.lons/">https://www.instagram.com/harry.lons/</a>
                            </li>
                            <p>I do not publicly list my email address or phone number to avoid spam.</p>
                        </ul>
                        <div className='Sub-text'>
                            
                        </div>
                        <a style={{ color: '#66b2b2', fontSize: 24 }} href='/'>
                            Click here to go back to home!
                        </a>
                    </div>
                </div>
                <div className='Intro-projects-spacing' />
            </div>
        </div>
    );
}

export default Contact;

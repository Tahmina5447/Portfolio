import React from 'react';
import { UilFacebook } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10  text-base-content rounded">
                <div>
                    <h1>Tahmina Khatun</h1>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href=''><UilFacebook></UilFacebook></a>
                        <a href=''><UilLinkedin></UilLinkedin></a>
                        <a href=''><UilGithub></UilGithub></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved Tahmina</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
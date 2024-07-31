import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import mainVideo from '../../assets/video/MainVideo.mp4'
export default function MainPage() {
    const [t, i18n] = useTranslation();
    return <>
    <div className="main-page">
            <div className="main-page-nav">
                <div>
                    <img src={require('../../images/mainLogo.jpg')} className="logo"/>
                </div>
                <div className="main-page-nav-ul">
                    <Link to="/register" className="btn"
                    >{t('register')}</Link>
                    <Link to="/login" className="btn">{t('login')}</Link>
                    <Link to="/LoginAdmin" className="btn">{t('Dashboard')}</Link>
                     {i18n.language === 'en' && <button onClick={() => {
                            i18n.changeLanguage('ar')
                        }}>AR</button>}
                       {i18n.language === 'ar' && <button onClick={() => {
                            i18n.changeLanguage('en')
                        }}>EN</button>}
                </div>
                
            </div>
        
            <div>
                
            </div>
                <div className="main-video">
                    <video src={mainVideo}  muted autoPlay loop/>
                </div>

    </div>
    </>
}
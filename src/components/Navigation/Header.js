import { useState } from 'react';

import styles from './Header.module.css';
import Card from '../UI/Card/Card';
import triangleImg from '../../assets/triangle.png';
import WhatsappLogo from '../UI/WhatsappLogo/WhatsappLogo';
import Content from '../Content/Content';


const Header = () => {
    const GROUP_URL = '//google.com';

    const [showForm, setShowForm] = useState(false);
    const registerClickHandler = () => {
        setShowForm(prev => !prev);
    };
    let registerStyles = styles.register
    if (!showForm) {
        registerStyles += ` ${styles.alwaysShow}`
    }
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.title}>
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <Card className={registerStyles} onClick={registerClickHandler}>
                    Registro
                </Card>
                {showForm && 
                    <Card className={styles.mobileDisplay} onClick={registerClickHandler}>
                        Información
                    </Card>
                }
            </nav>
            <div className={styles.relative}>
                <div className={styles.content}>
                    <Content showForm={showForm} />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={triangleImg} alt="Triangulo chidote" />
                <a href={GROUP_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Card className={styles.questions}>
                        ¿Dudas?
                    </Card>
                    <WhatsappLogo />
                </a>
            </div>
        </ div>
    )
}

export default Header;
import styles from './Triangle.module.css'
import Card from "../UI/Card/Card";
import WhatsappLogo from "../UI/WhatsappLogo/WhatsappLogo";
import triangleImg from '../../assets/triangle.png';

const Triangle = () => {
    const GROUP_URL = '//google.com';

    return (
            <div className={styles.imageContainer}>
                <img src={triangleImg} alt="Triangulo chidote" />
                <a href={GROUP_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Card className={styles.questions}>
                        ¿Dudas?
                    </Card>
                    <WhatsappLogo />
                </a>
            </div>
    );
}

export default Triangle;
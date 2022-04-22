import Input from "../../../UI/Input/Input";
import styles from './MailInput.module.css';

const MailInput = ({ changeHandler }) => {
    return (
        <Input
            type="email"
            label="Correo LORE:"
            id="email"
            changeHandler={changeHandler}
            className={styles.input}
        />
    );

};

export default MailInput;
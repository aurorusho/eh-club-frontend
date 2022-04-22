import Input from '../../../UI/Input/Input';
import styles from './GroupInput.module.css';

const GroupInput = ({ changeHandler }) => {
    return (
        <Input
            type="number"
            label="Grupo:"
            id="group"
            className={styles.input}
            changeHandler={changeHandler}
            min="100"
            max="700"
        />
    )
}
export default GroupInput;
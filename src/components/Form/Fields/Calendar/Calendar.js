import styles from './Calendar.module.css';
import inputStyles from '../../../UI/Input/Input.module.css';
import Rows from './Rows';


const Calendar = () => {
    const labelClassName = `${inputStyles.label} ${styles.label}`
    return (
        <div>
            <div className={labelClassName}>
                Disponibilidad:
            </div>
            <div className={styles.calendar}>
                <Rows />
            </div>
        </ div>
    )
};

export default Calendar;
import styles from './Calendar.module.css';
import Rows from './Rows';

const Calendar = () => {
    return (
        <>
            <div className={styles.label}>
                Disponibilidad:
            </div>
            <div className={styles.calendar}>
                <Rows />
            </div>
        </>
    )
};

export default Calendar;
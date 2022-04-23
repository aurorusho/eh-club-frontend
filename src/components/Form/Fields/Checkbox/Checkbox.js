import styles from './Checkbox.module.css';

const Checkbox = ({ changeHandler }) => {
    const id = "checkbox"
    const adviseLink = (
        <a href="/Reglamento_club.pdf" target="_blank" rel="noopener noreferrer">
            reglamento
        </a>
    )
    return (
        <div className={styles.container}>
            <label htmlFor={id}>He leído el {adviseLink}</label>
            <input
                type="checkbox"
                onChange={changeHandler}
                id={id}
                className={styles.input}
            />
        </div>
    )
};
export default Checkbox
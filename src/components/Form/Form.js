import styles from './Form.module.css';

import NameInputs from "./Fields/NameInputs"
import GroupInput from "./Fields/GroupInput/GroupInput";
import MailInput from "./Fields/MailInput/MailInput";
import Calendar from "./Fields/Calendar/Calendar";
import Checkbox from './Fields/Checkbox/Checkbox';
import Submit from './Fields/Submit/Submit';

const Form = () => {
    return (
        <form className={styles.form}>
            <NameInputs />
            <GroupInput />
            <MailInput />
            <Calendar />
            <Checkbox />
            <Submit />
        </form>
    )
}

export default Form;
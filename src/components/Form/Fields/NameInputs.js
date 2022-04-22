import Input from '../../UI/Input/Input';

const NameInputs = ({ firstNameChangeHandler, lastNameChangeHandler }) => {
    return (
        <>
            <Input
                label="Nombre(s):"
                id="firstName"
                onChange={firstNameChangeHandler}
                maxLength="30"
            />
            <Input
                label="Apellido(s):"
                id="lastName"
                onChange={lastNameChangeHandler}
                maxLength="30"
            />
        </>
    )
};

export default NameInputs;
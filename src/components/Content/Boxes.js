import Box from "./Box";
import styles from "./Boxes.module.css";

const Boxes = ({ registering }) => {
    let containerStyle = styles.nestedContainer;
    if (registering){
        containerStyle += ` ${styles.hideIfMobile}`
    }
    return (
        <div className={styles.container}>
            <div className={containerStyle}>
                <Box
                    title="Lorem ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                />
                <Box
                    title="Lorem ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
                />
                <Box
                    title="Lorem ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                />
                <Box
                    title="Lorem ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d"
                />
            </ div>
        </div>
    )
};
export default Boxes;
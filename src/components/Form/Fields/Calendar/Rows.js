import styles from './Rows.module.css';

// Converts from 24 hour format to 12 hour format
const change24To12 = (hour) => hour < 13 ? hour : hour - 12

const Rows = () => {

    const firstRow = ['H', 'L', 'M', 'M', 'J', 'V', 'S'].map(
        (value, index) => {
            return (
                <div key={value + index}>
                    {value}
                </div>
            )
        }
    );
    const fillingDivs = <>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </>; // 6 divs

    let rows = [
        <div className={styles.firstRow} key="firstRow">
            {firstRow}
        </div>
    ];
    for (let i = 7; i < 21; i++) {
        let start = change24To12(i)
        let end = change24To12(i + 1)
        let className = styles.row
        if(i === 10 || i === 11){
            className += ` ${styles.bigRow}`
        }
        rows.push(
            <div className={className} key={i}>
                <div>{start}-{end}</div>
                {fillingDivs}
            </div>
        )
    }
    return rows;
}

export default Rows;
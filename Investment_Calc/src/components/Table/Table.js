import styles from "./Table.module.css";
const Table = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.newdata.length > 0 ? (
          props.newdata.map((data) => {
            return (
              <tr>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.yearlyContribution}</td>
              </tr>
            );
          })
        ) : (
          <h2>No data found</h2>
        )}
      </tbody>
    </table>
  );
};

export default Table;

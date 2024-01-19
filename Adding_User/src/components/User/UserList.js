import Card from "../UI/Card";
import "./UserList.css";
const UserList = (props) => {
  console.log(props.userdata);
  return (
    <Card>
      <ul className="listStyles">
        {props.userdata.length > 0 &&
          props.userdata.map((data) => (
            <li>
              {data.name} ({data.Age} years old){" "}
            </li>
          ))}
        {/* {props.userdata.length > 0 && (props.userdata.forEach(element => {
    <li>{element}</li>
}))} */}
      </ul>
      {props.userdata.length === 0 && <h2>please add user</h2>}
    </Card>
  );
};
export default UserList;

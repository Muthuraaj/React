import React, { useState } from "react";
import AddingUser from "./components/User/AddingUser";
import "./index.css";
import UserList from "./components/User/UserList";
import ReactPaginate from "react-paginate";
// import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [userdatas, Setuserdata] = useState([]);
  const DatareceiveHandler = (uname, uage) => {
    Setuserdata((prevUserState) => {
      return [...prevUserState, { name: uname, Age: uage }];
    });
  };
  console.log(userdatas);
  return (
    <div className="main-wrapper">
      <AddingUser onReceivedata={DatareceiveHandler} />
      <UserList userdata={userdatas} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageRangeDisplayed={5}
        pageCount={20}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      {/* { <ErrorModal title={error.title} message={error.message}/> }    */}
    </div>
  );
}

export default App;

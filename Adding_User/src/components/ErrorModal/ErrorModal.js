import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./ErrorModal.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};
const Modal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  // var errorElement=``
  // if(datas[0].Age===0){
  //  errorElement=`<h2>The person age cannot be equal to 0</h2>`
  // }
  // if(datas[0].Age < 0){
  //     errorElement=`<h2>The person age cannot be equal to negative values</h2>`
  // }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <BackDrop onConfirm={props.onConfirm} />
        </>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;

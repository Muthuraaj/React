import { useState, useRef } from "react";
export default function Form({ onData }) {
  const [ProjectDetails, setProjectDetails] = useState([]);
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const duedateRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    // const title = titleRef.current.value;
    setProjectDetails((prev) => {
      if (
        titleRef.current.value !== "" &&
        descriptionRef.current.value !== "" &&
        duedateRef.current.value !== ""
      ) {
        return [
          ...prev,
          {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: duedateRef.current.value,
          },
        ];
      } else {
        return [...prev];
      }
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    duedateRef.current.value = "";
    // setProjectDetails([]);
    // console.log(ProjectDetails);
    // console.log(titleRef.current.value);
  };
  onData(ProjectDetails);

  const cancelHandler = () => {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    duedateRef.current.value = "";
  };

  //   console.log(ProjectDetails);

  //   console.log(titleRef.current.value);
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <div className="flex items-center justify-center gap-2">
        <button onClick={cancelHandler}>Cancel</button>
        <button
          className="bg-neutral-900 text-slate-50 p-1.5 rounded"
          onClick={submitHandler}
        >
          Save
        </button>
      </div>
      <form action="" className="flex flex-col gap-2">
        <label className="uppercase">Title</label>
        <input type="text" className="p-1" ref={titleRef} required />
        <label htmlFor="" className="uppercase">
          Description
        </label>
        <textarea className="p-1" ref={descriptionRef} required />
        <label className="uppercase">Due date</label>
        <input type="date" className="p-1" ref={duedateRef} required />
      </form>
    </div>
  );
}

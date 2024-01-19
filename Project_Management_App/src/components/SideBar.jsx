// import { useState } from "react";
export default function SideBar({ onActive, ProjectDetails }) {
  console.log(ProjectDetails);
  //   const [isFormactive, setIsformactive] = useState(false);
  const handleClick = () => {
    // setIsformactive(true);
    onActive(true);
    // console.log(onActive);
  };
  return (
    <div className="w-1/4 h-full bg-neutral-900 p-2">
      <h2 className="text-slate-50 uppercase my-2">Your Projects</h2>
      <button
        onClick={handleClick}
        className="button text-slate-50 bg-gray-400 p-1.5 rounded"
      >
        Add Projects
      </button>
      <ul className="my-1 p-1 flex flex-col gap-1">
        {ProjectDetails.length > 0 &&
          ProjectDetails.map((data) => {
            return data.title != "" &&
              data.description != "" &&
              data.date != "" ? (
              <li className="text-slate-50 bg-gray-600 rounded p-1 w-3/4">
                {data.title}
              </li>
            ) : (
              ""
            );
          })}
      </ul>
    </div>
  );
}

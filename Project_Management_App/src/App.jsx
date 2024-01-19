import Form from "./components/Form";
import ProjectDetails from "./components/ProjectDetails";
import SideBar from "./components/SideBar";
import { useState } from "react";
function App() {
  const [isFormactive, setIsformActive] = useState(false);
  const [projectdata, setProjectdata] = useState([]);
  const handleActive = (isactive) => {
    setIsformActive(isactive);
  };

  const dataHandler = (datas) => {
    setProjectdata(datas);
  };
  console.log(projectdata);

  return (
    <div className="w-full h-screen flex gap-2">
      <SideBar onActive={handleActive} ProjectDetails={projectdata} />
      {!isFormactive && <ProjectDetails ProjectDetails={projectdata} />}
      {isFormactive && <Form onData={dataHandler} />}
    </div>
  );
}

export default App;

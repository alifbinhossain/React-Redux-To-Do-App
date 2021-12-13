import { useSelector } from "react-redux";
import InputBox from "./components/InputBox";
import TaskLists from "./components/TaskLists.jsx";
import banner from "./Checklist-pana.svg";

function App() {
  const totalTask = useSelector((state) => state.list.taskList).length;
  return (
    <div>
      <h1 className="heading-primary">To Do List</h1>
      <InputBox></InputBox>
      {totalTask > 0 && (
        <p className="text-result">Total Result : {totalTask}</p>
      )}
      {!totalTask && <img className="banner" src={banner} alt="" />}
      <TaskLists></TaskLists>
    </div>
  );
}

export default App;

import TaskList from "./Component/TaskList";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const URL= process.env.REACT_APP_BASE_URL
function App() {
  return (
    <div className="app">
      <div className="task-container">

      <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

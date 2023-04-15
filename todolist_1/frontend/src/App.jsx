import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";

function App() {
  const [toDoList, setToDoList] = useState();
  const getToDoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );
      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다!!!");
      }
      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">😎 My First To-Do-List 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          Try 30 Times of Coding To Do List -h662
        </div>
        <div className="text-xs text-center">Live here and now</div>

        <form className="flex mt-2">
          <input
            type="text"
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value={"추 가"}
          />
        </form>
      </div>
      <ul className="mt-16 flex flex-col -translate-x-1/2">
        {toDoList &&
          toDoList.map((v, i) => {
            return <TodoCard key={i} title={v.title} />;
          })}
      </ul>
    </div>
  );
}

export default App;

import axios from "axios";
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [toDoList, setToDoList] = useState();

  const getToDoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
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
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">🌷 AWESOME TO DO LIST 🌷</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          The past can hurt. But from the way I see it, you can either run from
          it, or learn from it. - Lion King
        </div>
        <div className="text-xs">
          과거가 널 아프게 할 수도 있다. 하지만 과거에서 도망치는 것도 과거에서
          배우는 것도 네 선택이다. - 라이온 킹 🦁
        </div>
        <CreateToDo getToDoList={getToDoList} />
      </div>
      <ul className="mt-16 flex flex-col w-1/2">
        {toDoList &&
          toDoList.map((v, i) => {
            return (
              <TodoCard
                key={i}
                title={v.title}
                isDone={v.isDone}
                index={i}
                getToDoList={getToDoList}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default App;

import axios from "axios";

const TodoCard = ({ title, isDone, index, getToDoList }) => {
  const onClickToggle = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );
      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }
      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${index}`
      );
      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }
      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isDone ? (
        <li className="flex my-4">
          <div className="relative" onClick={onClickToggle}>
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl"></div>
          </div>
          <div className="text-2xl ml-4 line-through">{title}</div>
          <button
            className="ml-4 px-2 py-1 bg-blue-300 hover:bg-blue-400 rounded-lg text-gray-50"
            onClick={onClickDelete}
          >
            삭 제
          </button>
        </li>
      ) : (
        <li className="flex my-4">
          <div
            className="border-4 border-pink-400 w-8 h-8 rounded-xl"
            onClick={onClickToggle}
          ></div>
          <div className="text-2xl ml-4 ">{title}</div>
          <button
            className="ml-4 px-2 py-1 bg-blue-300 hover:bg-blue-400 rounded-lg text-gray-50"
            onClick={onClickDelete}
          >
            삭 제
          </button>
        </li>
      )}

      {/* 완료처리 */}
    </>
  );
};
export default TodoCard;

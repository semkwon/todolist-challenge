import axios from "axios";
import { useState } from "react";

const CreateTodo = ({ getToDoList }) => {
  const [title, setTitle] = useState("");
  const createTodoBtn = async (e) => {
    try {
      e.preventDefault();
      if (!title) {
        alert("타이틀을 입력하세요!");
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          title,
          desc: `${title} 아자아자 화이팅!`,
        }
      );
      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }
      getToDoList();
      setTitle("");

      //
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex mt-2" onSubmit={createTodoBtn}>
      <input
        type="text"
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value={"추 가"}
      />
    </form>
  );
};

export default CreateTodo;

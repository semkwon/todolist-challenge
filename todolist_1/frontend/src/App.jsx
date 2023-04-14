function App() {
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
        <li className="flex my-4">
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4 ">🧹 청소하기</div>
        </li>
        {/* 완료처리 */}
        <li className="flex my-4">
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl"></div>
          </div>
          <div className="text-2xl ml-4 line-through">👕 빨래하기</div>
        </li>
      </ul>
    </div>
  );
}

export default App;

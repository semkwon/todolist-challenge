function App() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col justify-top items-center pt-16">
      <h1 className="text-4xl font-bold">😎 My First To-Do-List 😎</h1>
      <div className="mt-8 text-sm font-semibold">
        Try 30 Times of Coding To Do List -h662
      </div>
      <div className="text-xs">Live here and now</div>
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
  );
}

export default App;

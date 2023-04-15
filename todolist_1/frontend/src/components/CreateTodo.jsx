const CreateTodo = () => {
  return (
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
  );
};

export default CreateTodo;

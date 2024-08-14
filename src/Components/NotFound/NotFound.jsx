const NotFound = () => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">No Task Found</h2>
      <div className="flex items-center space-x-5">
        <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default NotFound;

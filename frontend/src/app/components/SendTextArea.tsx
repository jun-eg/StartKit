const SendTextArea = () => {
  return (
    <div className="relative max-w-sm h-full">
      <textarea
        className="absolute flex w-full h-7 p-0 border-gray-200 rounded-lg text-balance focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 resize-none overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        placeholder="タスクを入力..."
        rows={1}
      ></textarea>

      <div className="absolute top-1 transform end-3 z-10">
        <button
          type="button"
          className="inline-flex justify-center items-center text-sm font-medium rounded-lg text-white bg-gray-700 hover:bg-gray-600 focus:outline-hidden focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
        >
          作成
        </button>
      </div>
    </div>
  );
};

export default SendTextArea;

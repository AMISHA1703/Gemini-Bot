const Sidebar = ({ history }) => {
    return (
      <div className="bg-amber-200">
      <div className="w-69 bg-whit dark:bg-gray-800 p-3 overflow-y-auto border-r  ">
        <h2 className="text-lg font-bold mb-4 w-full  r ">Chat History</h2>
        <ul>
          {history.map((msg, i) => (
            <li key={i} className="mb-2 text-sm text-gray-700 dark:text-gray-300 truncate  p-2 bg-gray-600  rounded-lg ">{msg}</li>
          ))}
        </ul>
      </div>
      </div>
    );
  };
  
  export default Sidebar;
  
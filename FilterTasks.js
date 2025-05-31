import {useState} from React;

function TaskList ({ tasks }){

  const[filter, setfilter]=useState("");

  return (
    <div>
    <input
      type="text
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
    </div>
  );
}

export default TaskList;

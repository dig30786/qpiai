import { useEffect, useState } from "react";
import "../styles/TodoList.css";
import axios from "axios";
import List from "./List";

const TodoList = ({avalue}) => {
  const [value, setValue] = useState(null);
  const [sts, setSts] = useState(true);
  useEffect(() => {
    handleApiData();
  }, [sts,avalue]);
  async function handleApiData() {
    const { data } = await axios.get("http://localhost:4000/todo?_sort=id&_order=desc");
    setValue(data);
  }

  function handleRender()
  {
      setSts(!sts);
  }
  return (
    <div className="todo-list">
      {value?.map((v) => {
        v.handleRender = handleRender;
        return <List data={v} key={v.id} />;
      })}
    </div>
  );
};

export default TodoList;

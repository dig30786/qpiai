import '../styles/Todolayout.css'


// import components
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import TodoList from '../components/TodoList';
import { useState } from 'react';


const Todolayout = () => {

  const[s,sets] = useState(false);
  function handleS()
  {
    sets(!s);
  }
  return (
    <div className="layout flex_center">
      <div className="layout-box">
          <Header/>
          <AddButton data={handleS}/>
          <TodoList avalue={s}/>
      </div>
    </div>
  );
};

export default Todolayout;

import '../styles/TodoList.css';
import axios from 'axios'
;const List = ({data})=>{

    async function handlestatusUpdate()
    {
         const url = `http://localhost:4000/todo/${data.id}`;
         await axios.patch(url,{status:!data.status});
         data.handleRender();
    }
    return(
             <div className="table-list" onClick={handlestatusUpdate}>
                 <div className='table-content'>
                     <div className="content"> 
                         <div className={data.status?`round color-2`:`round color-1`}></div>
                         <div className={data.status?'cross':''}>{data.title} </div>
                     </div>
                     <div className="checkbox">
                         <div>{data.status?<i className="fa fa-check setup" aria-hidden="true"></i>:''}</div>
                     </div>
                 </div>
             </div>
    )
}

export default List;
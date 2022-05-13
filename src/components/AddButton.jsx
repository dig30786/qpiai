import { useState } from "react";
import "../styles/AddButton.css";
import Swal from 'sweetalert2'
import axios from "axios";
const AddButton = ({data}) => {
    const d = new Date();
    let time = d.getTime();
    function handleInput(){
        Swal.fire({
            title: 'Enter Todo',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
          }).then(async (result) => {
            if (result.isConfirmed) {
               await axios.post('http://localhost:4000/todo',{id:time,title:result.value,status:false})
               data();
            }
          })
    }
  return (
    <>
      <div className="add-btn">
        <button  onClick={handleInput}>
          + ADD NEW
        </button>
      </div>
    </>
  );
};

export default AddButton;

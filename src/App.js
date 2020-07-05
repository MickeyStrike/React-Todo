import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'

function App() {

  const [title, setTitle] = useState(String)
  const [date, setDate] = useState(null)

  let [arrTodos, setArrTodos] = useState([
    { id: 1, title: 'Mengejar Anjing Tetangga', complete: false, date: Date.now() },
    { id: 2, title: 'Bermain Bersama Anak Layangan', complete: false, date: Date.now() },
  ])

  const arrNavbar = [
    'Home', 'Profile', 'Navbar Photo'
  ]

  const handleForm = () => {
    
    setArrTodos([...arrTodos, { id: arrTodos.length+1, title, complete: false, date }])
    console.log(arrTodos)
    console.log('handleForm ini berhasil dijalankan')
  }

  const handleComplete = (index,todo) => {
    todo.complete = !todo.complete
    arrTodos[index] = todo
    setArrTodos(arrTodos.slice())
  }

  const handleDelete = (index) => {
    const deleted = arrTodos.slice(index)
    const newArr = arrTodos.filter((todo) => {
      if(todo !== deleted[0]) return todo
    })
    setArrTodos(newArr)
  }

  const listenChild = (dataTitle, dataDate) => {
    dataTitle ? setTitle(dataTitle) : setDate(dataDate)
  }

  return (
    <>
      <Navbar dataNavbar={arrNavbar} />
      <div className="container">
        <button type="button" className="btn btn-dark mb-4" data-toggle="modal" data-target="#exampleModal">
          + Add New Todo
        </button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Complete</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              arrTodos.map((todo,i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{todo.title}</td>
                    <td>{todo.complete.toString()}</td>
                    <td>
                      <button type="button" className="btn btn-primary mr-2" onClick={() => { handleComplete(i,todo) }}>Complete</button>
                      <button type="button" className="btn btn-danger" onClick={() => { handleDelete(i) }} >Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New Todo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form functionParent={listenChild} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark" onClick={()=>{ handleForm() }} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
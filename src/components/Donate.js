import React,{useState} from "react";
import './Donate';
import { list, getNextId } from './List'
function Donate({lists}){
  const [todos, setTodos] = useState(list);  
  const [newItemFields, setNewItemFields]=useState({
        charityname:'',
        email:'',
        amount:'',
        name:'',
        telNo:''
      })
      function addTodo(newItemFields) {
        const newTodo = {
          id: getNextId(),
          charityName: newItemFields.charityname,
          Amount: newItemFields.amount,
        };
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos);
      }
      function handleFields(e){
        const{name,value}=e.target
        setNewItemFields(newItemFields => {
            return{
                ...newItemFields,
                [name]:value
            }})
      }
      function handleSubmit(e){
        e.preventDefault()
        addTodo(newItemFields)
         setNewItemFields({
            charityname:'',
            email:'',
            amount:'',
            name:'',
            telNo:''
        })
      }
    return (
      <div className="dona">
         <center>
           <h2 className="head1 mt-5 mb-5" >MAKE A DONATION</h2>
         </center>
        <form onSubmit={handleSubmit}>
          <center>
          <label>
            <strong>CHOOSE ORGANISATION: </strong>
            <select
            name="charityname"
            value={newItemFields.charityname}
            placeholder="Charity Name"
            onChange={handleFields}>
              {lists.map((list,index)=>(
                <option key={index}>{list.charityName}</option>
              ))}
            </select>
          </label>
  
            <br></br>
            <input
            name='name'
            type="text"
            onChange={handleFields}
            value={newItemFields.name}
            placeholder="Your full name..."/>
            <br></br>
            <input
            name="email"
            type="email"
            value={newItemFields.email}
            placeholder="Email..."
            onChange={handleFields}/>
            <br></br>
            <input
            name='telNo'
            value={newItemFields.telNo}
            onChange={handleFields}
            placeholder="Telephone No. ..."
            type="number"/>
            <br></br>
            <input
            name="amount"
            value={newItemFields.amount}
            onChange={handleFields}
            type="number"
            placeholder="Amount your donating..."/>
            <div>
              <button id='donate' type="submit" class="btn btn-outline-dark mb-5">Submit</button>
            </div>
          </center>
        </form>
        <div>
          <center><h5>See below for donations made:</h5></center>
          <table>
            <thead>
              <tr>
                <th>ORGANISATION</th>
                <th>AMOUNT CONTRIBUTED AS DONATION ($)</th>
              </tr>
              </thead>
              <tbody>
              {todos.map((todo)=>{
           return <tr key={todo.id}>
            <td>{todo.charityName}</td>
            <td>{todo.Amount}</td>
            </tr> })}
              </tbody>
          </table>
        </div>
      </div>
    )
}
export default Donate
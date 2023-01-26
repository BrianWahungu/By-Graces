import React,{useState} from "react";

function Donate(){
    const [newItemFields, setNewItemFields]=useState({
        charityname:'',
        email:'',
        amount:'',
        name:'',
        telNo:''
      })
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
         setNewItemFields({
            charityname:'',
            email:'',
            amount:'',
            name:'',
            telNo:''
        })
      }
    return (
        <form onSubmit={handleSubmit}>
            <input
            name="charityname"
            type="text"
            value={newItemFields.charityname}
            placeholder="Charity Name"
            onChange={handleFields}/>
             <input
            name='name'
            type="text"
            onChange={handleFields}
            value={newItemFields.name}
            placeholder="Name"/>
            <input
            name="email"
            type="email"
            value={newItemFields.email}
            placeholder="Email"
            onChange={handleFields}/>
            <input
            name='telNo'
            value={newItemFields.telNo}
            onChange={handleFields}
            placeholder="Telephone No."
            type="number"/>
            <input 
            name="amount"
            value={newItemFields.amount}
            onChange={handleFields}
            type="number"
            placeholder="Amount"/>

          <center><button >Submit</button></center>

        </form>
    )
}

export default Donate
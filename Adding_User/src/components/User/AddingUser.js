import { useState,useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddingUser.module.css'
import ErrorModal from '../ErrorModal/ErrorModal'
const AddingUser=props=>{
    const nameRef=useRef()
    const ageRef=useRef()
    // const [userinput,setuserInput]=useState({
        // name:'',
        // Age:''
    // })
    const[error,setErrors]=useState()

    // const inputHandler=(id,value)=>{
        // setuserInput((prevInput)=>{return {
            // ...prevInput,
            // [id]:value
        // }})
    // }
const submitHandler=(e)=>{
    const enteredName=nameRef.current.value
    const enteredAge=ageRef.current.value
    console.log(enteredName,enteredAge);
    e.preventDefault()
        if(enteredName==='' || enteredAge===''){
        setErrors(
             {
            "title":"invalid input",
            message:"please fill all the field"
              } )
              
    return
    }
    if(enteredAge < 0){
        setErrors({
            title:"invalid age",
            message:"age cannot be a negative value"
        })
    return
    }
    props.onReceivedata(enteredName,enteredAge)
    nameRef.current.value=''
    ageRef.current.value=''
   
}
const removeModal=()=>{
    setErrors(null)
    
}
    return (
        <div className={styles.div}>
            {error &&<ErrorModal title={error.title} message={error.message} onConfirm={removeModal}/>}
            <Card>
        <form onSubmit={submitHandler} className={styles.input}>
            <label htmlFor='name'>UserName</label>
            <input type='text' id='name'  ref={nameRef}/>
            <label htmlFor='Age'>Age</label>
            <input type='number' id='Age'  ref={ageRef}/>
            <Button>Add Users</Button>
        </form>
    </Card>
        </div>
    )
}
export default AddingUser
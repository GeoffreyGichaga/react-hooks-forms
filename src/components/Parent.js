import React,{ useState } from 'react'
import { DisplayData } from './DisplayData';
import Form from './Form';

export const Parent = () => {

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstNameChange(event){
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value)
    }
  return (
      <>
      <Form firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}/>

      <DisplayData
      firstName={firstName}
      lastName={lastName}
      
      />

      </>
      

    
  )
}
export default Parent;

import React, { useState }from "react";
import { Route, Link } from 'react-router-dom'
import Home from "./Home"
import Form from "./Form"
import * as Yup from "yup"
import FormSchema from "./FormSchema"

const initialFormValues = {
  name: '',
  instructions:'',
  password: '',
  size: '',
  pepperoni: false,
  broccoli: false,
  sausage: false,
  mushroom: false,
  pineapple: false,
}

const initialFormErrors = {
  name: '',
  instructions:'',
  password: '',
  size: '',
  pepperoni: false,
  broccoli: false,
  sausage: false,
  mushroom: false,
  pineapple: false,
}

const initialOrders = []

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

const getNewOrder = ()=>{
  setOrders(orders)
}
const postNewOrders =() =>{
  setFormValues(formValues)
}
const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
    Yup
      .reach(FormSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const name = evt.target.name
    const checked = evt.target.checked
    console.log()
    Yup
      .reach(FormSchema, name)
      .validate()
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      pepperoni: checked,
      broccoli: checked,
      sausage: checked,
      mushroom: checked,
      pineapple: checked,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      
    }
    postNewOrders(newOrder)
  }
  
  return (
    // <>
    //   <h1>Lambda Eats</h1>
    //   <p>You can remove this code and create your own header</p>
    // </>
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Pizzaria</h1>
        <div className='nav-links'>
          <Link to= '/'>Home</Link>
          <Link to= '/pizza'>Pizza</Link>
        </div>
      </nav>

    <Route exact path='/'>
      <Home />
    </Route>
    
    <Route path='/pizza'>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}/>
    </Route>

    
  </div>
  );
};
export default App;

import React, { useState, useEffect }from "react";
import { Route, Link } from 'react-router-dom'
import Home from "./Home"
import Form from "./Form"
import Order from"./Order"
import * as Yup from "yup"
import FormSchema from "./FormSchema"
import axios from "axios"

const initialFormValues = {
  name: '',
  instructions:'',
  size: '',
  pepperoni: false,
  broccoli: false,
  sausage: false,
  mushroom: false,
  pineapple: false,
}

const initialFormErrors = {
  name: '',
  instructions:''
}

const initialOrders = []

const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewOrders =newOrder =>{
    axios.post('https://reqres.in/api/users', newOrder)
      .then (res =>{
        setFormValues(initialFormValues)
        setOrders([...orders, res.data])
      })
      .catch (err =>{
        console.log(err)
      })
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
    setFormValues({
      ...formValues,
      [name]: checked
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      ...formValues,
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim()
    }
    postNewOrders(newOrder)
  }
  useEffect(() => {
    FormSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])
  
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
        disabled={disabled}
        onSubmit={onSubmit}
        errors={formErrors}
        />
    </Route>
      {
        orders.map((order, index) => {
          return <Order order={order} key={`${order}-${index}`} />
        })
      }
    </div>
  );
};
export default App;

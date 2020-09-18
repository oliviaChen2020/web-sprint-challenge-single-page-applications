import React, {useState}from "react"


export default function Form(props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors,
    } = props
    return(
        <form className='form container' >
            <div className='form-group inputs'>
        
                <label>Name
                    <input 
                        type="text"
                        name ="name"
                        values ={values.name}
                        onChange = {onInputChange}
                        placeholder = "Enter your name"
                    />

                </label><br></br>
  
                <label>Special instructions
                    <input
                        type ="text"
                        name ="instructions"
                        values ={values.instructions}
                        onChange = {onInputChange}
                        placeholder = "Enter your instructions"
                    />
                </label><br></br>

                <label>Select Pizza size
                    <select
                        onChange ={onInputChange}
                        name = "size">
                        <option value =''> - Select a size</option>
                        <option value ='small'> Small</option>
                        <option value ='medium'>Medium</option>
                        <option value ='large'>Large</option>
                    </select>

                </label>
                <div className = "checkboxes">
                    <h3>Pizza Toppings</h3>
                    <label>Pepperoni
                    <input
                        type ="checkbox"
                        name ="pepperoni"
                        onChange={onCheckboxChange}
                        checked ={values.pepperoni}
                    />
                    </label>
                    <label>Broccoli
                    <input
                        type ="checkbox"
                        name ="broccoli"
                        onChange={onCheckboxChange}
                        checked ={values.broccoli}
                    />
                     </label>
                    <label>Sausage
                    <input
                        type ="checkbox"
                        name ="sausage"
                        onChange={onCheckboxChange}
                        checked ={values.sausage}
                    />
                     </label>
                    <label>Mushroom
                    <input
                        type ="checkbox"
                        name ="Mushroom"
                        onChange={onCheckboxChange}
                        checked ={values.mushroom}
                    />
                     </label>
                    <label>Pineapple
                    <input
                        type ="checkbox"
                        name ="pineapple"
                        onChange={onCheckboxChange}
                        checked ={values.pineapple}
                    />
                     </label>
                </div>
                <div>{errors.name}</div>
                <div>{errors.instructions}</div>
                <div>{errors.size}</div>
                <div>{errors.pepperoni}</div>
                <div>{errors.broccoli}</div>
                <div>{errors.sausage}</div>
                <div>{errors.mushroom}</div>
           
            <div className='submit'>
                <button onClick={onSubmit}>submit</button>
            </div>
            </div>
        </form>
        )
}
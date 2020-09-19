import * as Yup from "yup";

const FormSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "name must be at least 2 characters long.")
        .required("first name is Required"),
    instructions: Yup
        .string()
        .min(10, "instructions must be at least 10 characters long.")
        .required("instructions are Required"),
    size: Yup
        .string()
        .required ("please select  a size"),
    pepperoni:Yup
        .boolean()
        .oneOf([true], 'Must select a topping'),
    // broccoli:Yup
    //     .boolean()
    //     .oneOf([true], 'Must select a topping'),
    // Sausage:Yup
    //     .boolean()
    //     .oneOf([true], 'Must select a topping'),
    // mushroom:Yup
    //     .boolean()
    //     .oneOf([true], 'Must selecte a topping'),
    // pineapple:Yup
    //     .boolean()
    //     .oneOf([true], 'Must selecte a topping'),
    
})
export default FormSchema;
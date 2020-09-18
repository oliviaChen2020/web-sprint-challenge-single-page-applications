import * as Yup from "yup";

const FormSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "name must be at least 2 characters long.")
        .required("first name is Required"),
    instructionds: Yup
        .string()
        .min(10, "name must be at least 10 characters long.")
        .required("instructions are Required"),

    termsofservice: Yup
        .boolean()
        .oneOf([true], "Please accept the TOS")
        .required('Please select')
})
export default FormSchema;
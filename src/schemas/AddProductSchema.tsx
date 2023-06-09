import * as Yup from 'yup';


export const addProductSchema  = Yup.object({
    names : Yup.string(),
    price : Yup.number().positive("Please enter product price"),
    description : Yup.string(),
    stock : Yup.string(),
    code : Yup.string().min(6).max(6)
})

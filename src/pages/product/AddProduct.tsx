import { useFormik } from 'formik';
import { addProductSchema } from '../../schemas/AddProductSchema';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useId } from 'react';

const AddProduct = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<any[]>([])
    
    const storedFormData = localStorage.getItem('product');
    const formDetails:any = storedFormData ? JSON.parse(storedFormData) : [];
    console.log(formDetails);    
      
      

    const formik = useFormik({
        initialValues : {
            id: useId(),
            name : "",
            description : "",
            price : "",
            stock : 1,
            code: "",
        },
        validationSchema : addProductSchema,
        onSubmit : (values:any,actions) => {
            console.log(values);
            const formData = {
                id: values.id,
                name: values.name,
                price : values.price,
                stock : values.stock,
                code : values.code,
                description : values.description,
            }
            setFormData((prevData) => [...prevData, formData]);
            actions.resetForm()
        }
    })

    useEffect(() => {
        if(formData){
            localStorage.setItem('product', JSON.stringify(formData))
        }
    },[formData])

    const closeModal = () => {
        navigate('/product')
    };

  return (
    <div>
      <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" style={{background: 'radial-gradient(#9E9E9E, transparent)'}}>
        <div className="w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
                <button type="button" onClick={closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">Add Product</h3>
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-3">               
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
                                <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="T-Shirt"/>
                                {/* {formik.errors.name && formik.touched.name ? (<span className='text-red-500'>{formik.errors.name}</span>) : null} */}
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input type="text" name="description" id="description" value={formik.values.description} onChange={formik.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="SM-MD-XL-XXL"/>
                                {/* {formik.errors.description && formik.touched.description ? (<span className='text-red-500'>{formik.errors.description}</span>) : null} */}
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                <input type="text" name="price" id="price" value={formik.values.price} onChange={formik.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="₹100"/>
                                {/* {formik.errors.price && formik.touched.price ? (<span className='text-red-500'>{formik.errors.price}</span>) : null} */}
                            </div>                              
                            <div>
                                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">Product Stock</label>
                                <select id="stock" name='stock' value={formik.values.stock} onChange={formik.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                    <option value={1}>In Stock</option>
                                    <option value={0}>Out of Stock</option>
                                </select>
                                {/* {formik.errors.stock && formik.touched.stock ? (<span className='text-red-500'>{formik.errors.stock}</span>) : null} */}
                            </div>                          
                            <div>
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900">SKU Code</label>
                                <input type="text" name="code" id="code" value={formik.values.code} onChange={formik.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ABK12ZA"/>
                                {/* {formik.errors.code && formik.touched.code ? (<span className='text-red-500'>{formik.errors.code}</span>) : null} */}
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-gray-600 border-2 hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddProduct

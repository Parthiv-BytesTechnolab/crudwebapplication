import { useEffect, useState } from "react";
  
  const Cards = () => {
    const [fetchData, setFetchData] = useState([])

    const fetchDataFromLocalStorage = () => {
      if (fetchData.length === 0) {
        const data = localStorage.getItem('product');
        if (data) {
          setFetchData(JSON.parse(data));
        }
      }
    };
    

    useEffect(() => {
      fetchDataFromLocalStorage();
    }, []); 
    
    const handleDelete = (productId:any) => {
      const updatedData = fetchData.filter((product:any) => product.id !== productId);
      console.log("update=>",updatedData);
      
      setFetchData(updatedData);
      localStorage.setItem('product', JSON.stringify(updatedData));
    };

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center capitalize">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {fetchData.map((product:any) => (
                <div>
                    <div key={product.id} className="group relative border p-1">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                            alt={product.name}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                        </div>
                        <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-900">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-700">{product.description}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                    <div className="flex">
                      <div className='m-1'><button className='border h-10 w-36 border-black hover:bg-black hover:text-slate-100 hover:border-none text-sm font-bold'>Add to cart</button></div>
                      <div className='m-1'><button onClick={() => handleDelete(product.id)} className=' h-10 w-36 bg-red-600 text-slate-100 hover:border-none text-sm font-bold'>Delete</button></div>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Cards
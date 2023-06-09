import Cards from './Cards'
import { useNavigate, Link } from 'react-router-dom'

const index = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className=''><Link to="/addproduct"><button className='border h-10 w-full border-black hover:bg-black hover:text-slate-100 hover:border-none text-sm font-bold rounded-md'>Add Product</button></Link></div>
      <Cards/>
    </div>
  )
}

export default index
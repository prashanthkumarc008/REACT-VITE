
import { useDispatch, useSelector } from 'react-redux';

function Product() {
    let dispatch= useDispatch()
    let product=useSelector(state=>state.qty)
    let incHndler=()=>{
        dispatch(incAction());
    }
    let decHandler=()=>{
        dispatch(decAction());
    }


  return (
    <div>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={incHndler}>+</button>
        <button onClick={decHandler} >-</button>
    </div>
  )
}

export default Product;
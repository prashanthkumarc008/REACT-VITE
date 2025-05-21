import { useDispatch, useSelector } from 'react-redux';
import { incAction, decAction } from '../redux/prodAction';

function Product() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state);

    const incHandler = () => {
        dispatch(incAction());
    };

    const decHandler = () => {
        dispatch(decAction());
    };

    return (
        <div>
            <pre>{JSON.stringify(product, null, 2)}</pre>
            <button onClick={incHandler}>+</button>
            <button onClick={decHandler}>-</button>
        </div>
    );
}

export default Product;
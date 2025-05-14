
import { useDispatch } from 'react-redux'
import { gmAction, gnAction } from '../redux/Message/msgaction'

function Message() {
        let dispatch=useDispatch;
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
    <div>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>

    </div>
  )
}

export default Message;
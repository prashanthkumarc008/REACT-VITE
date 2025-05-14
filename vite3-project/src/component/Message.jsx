import { useDispatch, useSelector } from 'react-redux';
import { gmAction, gnAction } from '../redux/Message/msgaction';

function Message() {
  // Initialize useDispatch correctly
  const dispatch = useDispatch();
  // Select the message state from the Redux store
  const message = useSelector(state => state.message);

  // Handler for Good Morning action
  const gmHandler = () => {
    dispatch(gmAction());
  };

  // Handler for Good Night action
  const gnHandler = () => {
    dispatch(gnAction());
  };

  return (
    <div>
      <h1>Message Component</h1>
      <pre>{JSON.stringify(message, null, 2)}</pre>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  );
}

export default Message;
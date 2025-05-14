import { Provider } from 'react-redux';
import Message from './component/Message';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Message />
    </Provider>
  );
}

export default App;
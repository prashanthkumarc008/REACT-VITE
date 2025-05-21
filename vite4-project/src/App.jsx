import Product from "./component/Product"
import { store } from "./redux/store"
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <div>
          <Provider store={store}>
            <Product/>
          </Provider>
      </div>
      
    </>
  )
}

export default App;

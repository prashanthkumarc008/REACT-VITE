import Product from "./component/Product"
import { store } from "./redux/store"

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

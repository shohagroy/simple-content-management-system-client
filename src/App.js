import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./Redux/store";
import router from "./routers/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </div>
  );
}

export default App;

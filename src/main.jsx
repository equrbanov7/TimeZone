import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
);

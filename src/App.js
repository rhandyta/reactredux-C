import store from "./redux/store";
import { Provider } from "react-redux";
import Shoes from "./components/Shoes";

function App() {
    return (
        <Provider store={store}>
            <Shoes />
        </Provider>
    );
}

export default App;

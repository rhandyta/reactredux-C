import store from "./redux/store";
import { Provider } from "react-redux";
import Shoes from "./components/Shoes";
import ShoesHook from "./components/ShoesHook";
import Gloves from "./components/Gloves";

function App() {
    return (
        <Provider store={store}>
            <Gloves />
            <Shoes />
            <ShoesHook />
        </Provider>
    );
}

export default App;

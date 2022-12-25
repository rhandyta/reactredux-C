import store from "./redux/store";
import { Provider } from "react-redux";
import Shoes from "./components/Shoes";
import ShoesHook from "./components/ShoesHook";

function App() {
    return (
        <Provider store={store}>
            <Shoes />
            <ShoesHook />
        </Provider>
    );
}

export default App;

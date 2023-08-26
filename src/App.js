import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;

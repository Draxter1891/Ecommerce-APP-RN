import { Provider } from "react-redux";
import store from "@/redux/store";
import Main from "@/Main";

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

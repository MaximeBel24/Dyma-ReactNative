import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({ name: "global-state" })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

export default reactotron;
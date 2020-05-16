import { createStackNavigator } from "react-navigation-stack";
import Home from "../src/screens/Home";
import DetailScreen from "../src/screens/DetailScreen";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRoute: "Home",
  }
);

export default AppContainer = createAppContainer(AppNavigator);


import React from "react";
import {Dimensions} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
import Comments from "./screens/Comments/";
import Channel from "./screens/Channel";
import Thread from "./screens/Thread";
import Home from "./screens/Home/";
import Channels from "./screens/Channels";
import Sidebar from "./screens/Sidebar";
import AddPolipeople from "./screens/AddPolipeople";
import Calendar from "./screens/Calendar/";
import Timeline from "./screens/Timeline";
import Feedback from "./screens/Feedback/";
import Profile from "./screens/Profile/";
import Settings from "./screens/Settings";

const Drawer = DrawerNavigator(
    {
        Home: { screen: Home },
        // Channels: { screen: Channels },
        // AddPolipeople: { screen: AddPolipeople },
        // Calendar: { screen: Calendar },
        // Timeline: { screen: Timeline },
        // Feedback: { screen: Feedback },
        Profile: { screen: Profile },
        Settings: { screen: Settings }
    },
    {
        initialRouteName: "Home",
        drawerWidth:(()=>(0.83 * Dimensions.get("window").width))(),
        contentComponent: props => <Sidebar {...props} />
    }
);

const App = StackNavigator(
    {
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        ForgotPassword: { screen: ForgotPassword },
        Walkthrough: { screen: Walkthrough },
        Thread: { screen: Thread },
        Comments: { screen: Comments },
        Channel: { screen: Channel },
        Drawer: { screen: Drawer },
        Profile: { screen: Profile },
        Settings: { screen: Settings },
        Home: { screen: Home },
        AddPolipeople:{screen:AddPolipeople}
    },
    {
        index: 0,
        initialRouteName: "Login",
        headerMode: "none"
    }
);

export default () =>
    <Root>
        <App />
    </Root>;

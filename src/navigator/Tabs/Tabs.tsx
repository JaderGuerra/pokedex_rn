import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "../StackNavigator";
import { SearchScreen } from "../../screens";
import { optionsTabs, searchScreen,homeScreen, tabsScreenContainer } from "./optionsTabs";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator sceneContainerStyle={tabsScreenContainer} screenOptions={optionsTabs}>
      <Tab.Screen options={homeScreen} name="StackNavigator" component={StackNavigator}/>
      <Tab.Screen options={searchScreen} name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};

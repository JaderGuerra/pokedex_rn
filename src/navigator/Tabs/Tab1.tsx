import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "../StackNavigator";
import { optionsTabs, searchScreen,homeScreen, tabsScreenContainer } from "./optionsTabs";
import { Tab2Screen } from "./Tab2";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator sceneContainerStyle={tabsScreenContainer} screenOptions={optionsTabs}>
      <Tab.Screen options={homeScreen} name="StackNavigator" component={StackNavigator}/>
      <Tab.Screen options={searchScreen} name="SearchScreen" component={Tab2Screen} />
    </Tab.Navigator>
  );
};

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/*  *** Tab.Navigator *** */
export const optionsTabs: BottomTabNavigationOptions = {
  tabBarActiveTintColor: "#5856D6",

  headerShown: false,
  tabBarLabelStyle: {
    marginBottom: Platform.OS === "ios" ? 0 : 10,
  },
  tabBarStyle: {
    position:'absolute',
    backgroundColor:'rgba(255,255,255 ,0.92)',
    borderWidth: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 0 : 65,
  },
};

export const tabsScreenContainer: StyleProp<ViewStyle> = {
  backgroundColor: "white",
};

/*  *** Tab.Screen *** */
export const homeScreen: BottomTabNavigationOptions = {
  tabBarLabel: "Listado",
  tabBarIcon: ({ color }) => (
    <Ionicons name="list-outline" color={color} size={25} />
  ),
};
export const searchScreen: BottomTabNavigationOptions = {
  tabBarLabel: "Busqueda",
  tabBarIcon: ({ color }) => (
    <Ionicons name="search-outline" color={color} size={25} />
  ),
};

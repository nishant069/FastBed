
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "./screens/Home";
import Profile from "./screens/Profile";


import LinearGradient from "react-native-linear-gradient";
import DocAvailability from "./screens/DocAvailability";
import AppointmentBooking from "./screens/AppointmentBooking";
import WelcomeScreen from "./screens/WelcomeScreen";
import DocProfile from "./screens/DocProfile";
import HospitalProfile from "./screens/HospitalProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SignedIn = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: 'transparent',
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home"
          } else if (route.name === "DocAvailability") {
            iconName = focused ? "stethoscope" : "stethoscope";
          } else if (route.name === "AppointmentBooking") {
            iconName = focused ? "calendar-minus-o" : "calendar-minus-o";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return (
             <FontAwesome name={iconName} size={26} color={focused ? "#5dbe74" : "#6c757d"} />
          );
        },
      })}
    >

          
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DocAvailability" component={DocAvailability} />
      <Tab.Screen name="AppointmentBooking" component={AppointmentBooking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};



const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignedIn" component={SignedIn} />
        <Stack.Screen name="DocProfile" component={DocProfile} />
        <Stack.Screen name="HospitalProfile" component={HospitalProfile} />
        <Stack.Screen name="DocAvailability" component={DocAvailability} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
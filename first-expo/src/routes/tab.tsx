import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Experiencia from '../screens/Experiencias';

const Tab = createBottomTabNavigator();

type TabNavigation = {
 Home: undefined;
 Experiencia: undefined;
}

export type TabType = BottomTabNavigationProp<TabNavigation>

export default function TabComponent() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Experiencia' component={Experiencia}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather,MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SearchScreen from './src/screens/SearchScreen';

const BottomNavigator = createBottomTabNavigator(
      {
        homeFlow: createStackNavigator({
          home: HomeScreen
        },{
          navigationOptions: () => {
            return {
              tabBarLabel: "HOME",
              tabBarIcon: ({ tintColor }) => {
                return <Feather name="home" color={tintColor} size={25} />
              }
            }
          }
        }),
        searchFlow: createStackNavigator({
          search: SearchScreen
        },{
          navigationOptions: () => {
            return {
              tabBarLabel: "SEARCH",
              tabBarIcon: ({tintColor}) => {
                return (
                  <Feather
                  name="search"
                  color={tintColor}
                  size={25}/>
                );
              }
            }
          }
        }),
        formFlow: createStackNavigator({
          form: FormScreen
        },{
          navigationOptions: () => {
            return {
              tabBarLabel: "FORM",
              tabBarIcon: ({tintColor}) => {
                return (
                  <Feather
                  name="square"
                  color={tintColor}
                  size={25}/>
                );
              }
            }
          }
        })
      })

      export default createAppContainer(BottomNavigator);
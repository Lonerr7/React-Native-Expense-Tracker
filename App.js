import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './src/screens/AllExpenses';
import RecentExpences from './src/screens/RecentExpences';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddExpenseButton from './src/components/AddExpenseButton';
import ManageExpenses from './src/screens/ManageExpenses';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpensesOverview = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerRight: () => <AddExpenseButton />,
        headerStyle: {
          backgroundColor: '#79DAE8',
        },
        tabBarStyle: {
          backgroundColor: '#79DAE8',
        },
      }}
    >
      <Tabs.Screen name="Recent" component={RecentExpences} />
      <Tabs.Screen name="All" component={AllExpenses} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

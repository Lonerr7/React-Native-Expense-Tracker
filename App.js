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
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GlobalStyles } from './src/helpers/styles';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpensesOverview = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerRight: () => <AddExpenseButton />,
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tabs.Screen
        name="Recent"
        component={RecentExpences}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
          title: 'Recent Expeneses',
          tabBarLabel: 'Recent',
        }}
      />
      <Tabs.Screen
        name="All"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './src/screens/AllExpenses';
import RecentExpences from './src/screens/RecentExpences';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddExpenseButton from './src/components/AddExpenseButton';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GlobalStyles } from './src/helpers/styles';
import ManageExpenseScreenContainer from './src/screens/ManageExpenseScreenContainer';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpensesOverview = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <AddExpenseButton
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}
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
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
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
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreenContainer}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './Profile';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>

      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MyDrawer;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Trips from "../screens/Trips";
import QrCode from "../screens/QrCode";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const configScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons = {
        Viagens: "briefcase-outline",
        Agendar: "bookmarks-outline",
        Perfil: "person-outline",
      };

      return <Ionicons name={icons[route.name]} size={size} color={color} />;
    },
    tabBarStyle: {
      height: 90,
      paddingTop: 8,
    },
    tabBarLabelStyle: {
      fontSize: 14,
    },
  });

  return (
    <Tab.Navigator screenOptions={configScreenOptions}>
      <Tab.Screen name="Viagens" component={Trips} />
      <Tab.Screen name="Agendar" component={QrCode} />
      <Tab.Screen name="Perfil" component={Trips} />
    </Tab.Navigator>
  );
};

export default AppTabs;

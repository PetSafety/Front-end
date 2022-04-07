import { NavigationContainer } from "@react-navigation/native";

import { NotificationProvider } from "./src/context/notification.context";
import AppTabs from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <NotificationProvider>
        <AppTabs />
      </NotificationProvider>
    </NavigationContainer>
  );
}

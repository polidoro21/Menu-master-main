import 'react-native-gesture-handler'; // OBRIGATÓRIO
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importando telas
import TelaInicio from "./telas/TelaInicio";
import TelaSobre from "./telas/TelaSobre";
import TelaContatos from "./telas/TelaContatos";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicio} />
        <Drawer.Screen name="Sobre" component={TelaSobre} />
        <Drawer.Screen name="Contatos" component={TelaContatos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './context/UsersContext';
const Stack = createNativeStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Procurados',
                headerRight: () => (
                  <Button
                    onPress={() =>
                      navigation.navigate('Formulário de Procurado')
                    }
                    type="clear"
                    icon={<Icon name={'add'} size={25} color={'black'} />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="Formulário de Procurado"
            component={UserForm}
            options={{
              tittle: 'Formulário de Procurado',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {backgroundColor: 'gray'},
  headerTintColor: 'white',
  headerTitleStyle: {fontWeight: 'bold'},
};

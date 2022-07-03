import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Button, ListItem, Icon} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Procurado', 'Deseja excluir o procurado?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() =>
            props.navigation.navigate('Formulário de Procurado', user)
          }
          type="clear"
          icon={<Icon name="edit" size={25} color={'blue'} />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color={'red'} />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

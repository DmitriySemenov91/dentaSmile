import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import Clients from '../Contacts/Clients';
import Time from '../Contacts/Time';

const ScreenContainer = ({ children }) => <View>{children}</View>;

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Clients
      active={item.active}
      diagnostics={item.diagnostics}
      time={item.time}
      user={item.user.fullName}
      navigate={navigation.navigate}
    />
  );
  return (
    <>
      <View style={styles.wrapper}>
        <Time title={'12 september'} />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.button}>
          <Button
            onPress={() => console.log('click')}
            title="+"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    borderRadius: 50,
    width: 100,
    height: 100,
    padding: 25,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
});

const DATA = [
  {
    time: '15:30',
    diagnostics: 'delete teeth',
    user: {
      fullName: 'Danna Anna',
    },
    active: true,
    title: '12 september',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  },
  {
    time: '18:30',
    diagnostics: 'delete teeth 4',
    user: {
      fullName: 'Anna Anna',
    },
    active: true,
    title: '13 september',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  },
  {
    time: '22:30',
    diagnostics: 'delete teeth 2',
    user: {
      fullName: 'Tna Anna',
    },
    active: false,
    tittle: '14 september',
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
  },
  {
    time: '22:30',
    diagnostics: 'delete teeth 2',
    user: {
      fullName: 'Tna Anna',
    },
    active: false,
    tittle: '14 september',
    id: '58694a0f-3da1-471f-bd96-145571e29d742',
  },
  {
    time: '22:30',
    diagnostics: 'delete teeth 2',
    user: {
      fullName: 'Tna Anna',
    },
    active: false,
    tittle: '14 september',
    id: '58694a0f-3da1-471f-bd96-145571e298d72',
  },
  {
    time: '22:30',
    diagnostics: 'delete teeth 2',
    user: {
      fullName: 'Tna Anna',
    },
    active: false,
    tittle: '14 september',
    id: '58694a0f-3da1-471f-bd96-145571e29d972',
  },
  {
    time: '22:30',
    diagnostics: 'delete teeth 2',
    user: {
      fullName: 'Tna Anna',
    },
    active: false,
    tittle: '14 september',
    id: '58694a0f-3da1-471f-bd96-1455711e29d72',
  },
];

export default HomeScreen;

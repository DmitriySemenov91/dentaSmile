import React, { FC } from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

interface Props {
  active: boolean;
  user?: {
    fullName: string;
  };
  diagnostics?: string;
  time?: string;
}

const Clients: React.FC<Props> = ({
  active,
  user,
  diagnostics,
  time,
  navigate,
}) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgba(210, 230, 255, 0.5)' : 'white',
          },
          styles.wrapperCustom,
        ]}
        onPress={() => navigate.push('Details')}>
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={require('../../ui/assets/image/bugs.jpg')}
          />
          <View style={styles.wrapperClient}>
            <Text style={styles.client}>{user.fullName}</Text>
            <Text>{diagnostics}</Text>
          </View>
          {active ? (
            <Text style={[styles.visitHours, styles.active]}>{time}</Text>
          ) : (
            <Text style={[styles.visitHours, styles.notActive]}>{time}</Text>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  wrapperClient: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: -150,
    marginBottom: 10,
  },
  visitHours: {
    borderRadius: 2,
    padding: 5,
  },
  active: {
    backgroundColor: '#2A86FF',
    color: 'white',
  },
  notActive: {
    backgroundColor: '#e9f5ff',
    color: 'blue',
  },
  client: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default Clients;

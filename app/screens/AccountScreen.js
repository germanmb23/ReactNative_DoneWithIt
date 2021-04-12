import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.constainer}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.constainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  constainer: {
    marginVertical: 20,
  },
});

export default AccountScreen;

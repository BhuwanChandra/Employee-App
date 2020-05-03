import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = () => {

    const data = [
      {id: 1, name: "John Doe", position: "web developer"},
      {id: 2, name: "Max Manus", position: "android developer"},
      {id: 3, name: "John Korner", position: "ios developer"},
      {id: 4, name: "Dwane Johnson", position: "full stack developer"},
      {id: 5, name: "John Doe", position: "web developer"},
      {id: 6, name: "Max Manus", position: "android developer"},
      {id: 7, name: "John Korner", position: "ios developer"},
      {id: 8, name: "Dwane Johnson", position: "full stack developer"},
    ];

    const renderItem = item => (
      <Card style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{ uri: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );

    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => `${item.id}`}
        />
        <FAB 
          style={styles.fab}
          small={false}
          icon='plus'
          theme={{colors: {accent: '#006aff'}}}
          onPress={() => console.log('pressed')}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    margin: 5
  },
  cardView: {
    flexDirection: 'row',
    padding: 6
  },
  text: {
    fontSize: 22
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0
  }
});

export default Home;

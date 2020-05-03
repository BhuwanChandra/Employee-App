import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({navigation}) => {
    const data = [
      { id: '1', name: "John Doe", email: 'john@gmail.com', salary: '8', phone: '7854545421', position: "web developer", picture: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
      { id: '2', name: "Max Manus", email: 'max@gmail.com', salary: '18', phone: '7855465421', position: "android developer", picture: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
      { id: '3', name: "Harry Potter", email: 'potter@gmail.com', salary: '12', phone: '7854545421', position: "web developer", picture: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
      { id: '4', name: "Jessica Mathews", email: 'jessica@gmail.com', salary: '9', phone: '7854545421', position: "web developer", picture: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
    ];

    const renderItem = item => (
      <Card style={styles.card} onPress={() => navigation.navigate("Profile", {item})}>
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
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
        />
        <FAB 
          onPress={() => navigation.navigate("Create")}
          style={styles.fab}
          small={false}
          icon='plus'
          theme={{colors: {accent: '#006aff'}}}
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

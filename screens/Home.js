import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({navigation}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
      fetch("http://10.0.2.2:8080/")
      .then(res => {
        setLoading(false);
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => {
        setLoading(false);
        Alert.alert("something went wrong!");
      });
    }

    useEffect(() => {
      fetchData();
    },[]);

    const renderItem = item => (
      <Card style={styles.card} onPress={() => navigation.navigate("Profile", {item})}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "#006aff" }}
            source={{uri: item.picture}}
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
          onRefresh={() => fetchData()}
          refreshing={loading}
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item._id}
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

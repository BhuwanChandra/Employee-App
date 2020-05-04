import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform, Alert } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = (props) => {
  const {
    _id,
    name,
    picture,
    phone,
    salary,
    email,
    position
  } = props.route.params.item;
  const openDial = num => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${num}`);
    } else if (Platform.OS === "ios") {
      Linking.openURL(`telprompt:${num}`);
    }
  };

  const deleteEmployee = () => {
    fetch("http://10.0.2.2:8080/delete-data",{
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({_id})
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        Alert.alert(`${data.name} is deleted successfully`);
        props.navigation.navigate("Home");
      })
      .catch(err => {
        Alert.alert("something went wrong!");
      });
  }

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#5d4efc", "#57cdff"]} style={styles.gradient} />
      <View style={styles.profileImageView}>
        <Image style={styles.profileImage} source={{ uri: picture }} />
      </View>
      <View style={{ alignItems: "center", padding: 5 }}>
        <Title>{name}</Title>
        <Text style={styles.myText}>{position}</Text>
      </View>
      <View style={styles.infoView}>
        <Card
          style={styles.profileCard}
          onPress={() => {
            Linking.openURL(`mailto:${email}`);
          }}
        >
          <View style={styles.cardContent}>
            <MaterialIcons name="email" size={35} color="#006aff" />
            <Text style={styles.myText}>{email}</Text>
          </View>
        </Card>
        <Card style={styles.profileCard} onPress={() => openDial(phone)}>
          <View style={styles.cardContent}>
            <MaterialIcons name="phone" size={35} color="#006aff" />
            <Text style={styles.myText}>{phone}</Text>
          </View>
        </Card>
        <Card style={styles.profileCard}>
          <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={35} color="#006aff" />
            <Text style={styles.myText}>{`${salary} LPA`}</Text>
          </View>
        </Card>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 25
          }}
        >
          <Button
            icon="account-edit"
            theme={theme}
            mode="contained"
            onPress={() => props.navigation.navigate("Create", props.route.params.item)}
          >
            Edit Employee
          </Button>
          <Button
            icon="delete"
            mode="contained"
            theme={theme}
            onPress={() => deleteEmployee()}
          >
            Fire employee
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  gradient: {
    height: "20%"
  },
  profileImage: {
    width: 150,
    height: 150,
    backgroundColor: "#006aff",
    borderRadius: 75,
    borderColor: "#fff",
    borderWidth: 4
  },
  infoView: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 30,
    padding: 10,
    width: "100%"
  },
  profileImageView: {
    alignItems: "center",
    marginTop: -75
  },
  profileCard: {
    margin: 5
  },
  cardContent: {
    flexDirection: "row",
    padding: 3
  },
  myText: {
    fontSize: 18,
    marginTop: 4,
    marginLeft: 5
  }
});

const theme = {
  colors: {
    primary: "#006aff"
  }
};

export default Profile;

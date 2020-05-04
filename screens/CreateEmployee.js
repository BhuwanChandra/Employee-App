import React, { useState } from "react";
import { StyleSheet, Modal, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const CreateEmployee = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [pic, setPic] = useState("");
  const [modal, setModal] = useState(false);

  const submitData = () => {
    fetch("http://10.0.2.2:8080/post-data",{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,salary,picture:pic,position
      })
    }).then(res => res.json())
    .catch(err => {
      console.log(err);
    })
  }

  const picFromGallary = async () => {
    const granted = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(granted){
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1,1],
        quality: 0.6
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`
        };
        handleUpload(newFile);
      }
    }else {
      Alert.alert("You need permission to work properly")
    }
  }

  const picFromCamera = async () => {
    const granted = await Permissions.askAsync(Permissions.CAMERA);
    if(granted){
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1,1],
        quality: 0.6
      });
      if(!data.cancelled){
        let newFile = {
          uri: data.uri, 
          type: `test/${data.uri.split('.')[1]}`, 
          name: `test.${data.uri.split('.')[1]}`
        };
        handleUpload(newFile);
      }
    }else {
      Alert.alert("You need permission to work properly")
    }
  }

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file',image);
    data.append('upload_preset',"employee");
    data.append('cloud_name','bbs779');

    fetch("https://api.cloudinary.com/v1_1/bbs779/image/upload",{
      method: "post",
      body: data
    }).then(res => res.json())
    .then(response => {
      // console.log(response);
      setPic(data.secure_url);
      setModal(false);
    })
  }

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.inputStyle}
        label="Name"
        value={name}
        theme={theme}
        mode="outlined"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Email"
        value={email}
        theme={theme}
        mode="outlined"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Phone"
        value={phone}
        theme={theme}
        mode="outlined"
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Position"
        value={position}
        theme={theme}
        mode="outlined"
        onChangeText={text => setPosition(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Salary"
        value={salary}
        theme={theme}
        mode="outlined"
        onChangeText={text => setSalary(text)}
      />
      <Button
        style={styles.inputStyle}
        icon={pic == '' ? 'upload': 'check'}
        theme={theme}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="content-save"
        theme={theme}
        mode="contained"
        onPress={() => submitData()}
      >
        Save
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtons}>
            <Button
              icon="camera"
              theme={theme}
              mode="contained"
              onPress={() => picFromCamera()}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => picFromGallary()}
            >
              Gallery
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  inputStyle: {
    margin: 5
  },
  modalButtons: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    backgroundColor: "#bdff91"
  }
});

const theme = {
  colors: {
    primary: "#006aff"
  }
};

export default CreateEmployee;

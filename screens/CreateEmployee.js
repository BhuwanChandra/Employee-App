import React, { useState } from "react";
import { StyleSheet, Modal, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [pic, setPic] = useState("");
  const [modal, setModal] = useState(false);

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
        label="Salary"
        value={salary}
        theme={theme}
        mode="outlined"
        onChangeText={text => setSalary(text)}
      />
      <Button
        style={styles.inputStyle}
        icon="upload"
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
        onPress={() => console.log("Saved")}
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
              onPress={() => console.log('camera Pressed')}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => console.log('gallery Pressed')}
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
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    backgroundColor: "#ffffff"
  }
});

const theme = {
  colors: {
    primary: "#006aff"
  }
};

export default CreateEmployee;

import React, { useState, Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var temp;
export default function Calculator() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [textdata, settextdata] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function changedata(data) {
    if (data == 'C')
      temp = textdata.slice(0, -1);
    else
      temp = textdata.concat(data);
    settextdata(temp);
    console.log(textdata);
  }

  function checkdata() {
    if (textdata == "1+3+9") {
      //console.log(textdata);
      toggleModal();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Text style={{ height: 70, color: "#898989", fontSize: 35 }} >{textdata}</Text>
        <Modal isVisible={isModalVisible} onSwipeStart={toggleModal} backdropOpacity={.1} onBackdropPress={() => setModalVisible(false)} style={{ width: "100%", alignItems: "center" }}>
          <View style={{ justifyContent: "center", alignItems: "center", height: windowHeight / 2.5, width: windowWidth / 1.5, backgroundColor: "#9c9e9b", opacity: .7, borderRadius: 30 }}>
            <Text style={{ color: "#f4f6f5", fontSize: 40 }}>Hello World</Text>
          </View>
        </Modal>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.bottomcontainerspace} />
        <View style={styles.bottomcontainerrow}>

          <View style={styles.bottomcontainercolumn}>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('C')} >
              <Text style={styles.text}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('7')}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('4')}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('1')}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonpoint} onPress={() => changedata('.')}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomcontainercolumn}>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('+/-')}>
              <Text style={styles.text}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('8')}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('5')}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('2')}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button0} onPress={() => changedata('0')}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomcontainercolumn}>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('%')}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('9')}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('6')}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => changedata('3')}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button0} onPress={() => changedata('00')}>
              <Text style={styles.text}>00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomcontainercolumn}>
            <TouchableOpacity style={styles.buttonoperators1} onPress={() => changedata('/')}>
              <View style={styles.buttonoperatortop}>
                <Text style={styles.text}>/</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonoperators1} onPress={() => changedata('*')}>
              <View style={styles.buttonoperatormiddle}>
                <Text style={styles.text}>X</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonoperators1} onPress={() => changedata('-')}>
              <View style={styles.buttonoperatormiddle2}>
                <Text style={styles.text}>_</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonoperators1} onPress={() => changedata('+')}>
              <View style={styles.buttonoperatormiddle}>
                <Text style={styles.text}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonoperatorend} onPress={() => checkdata()}>
              <View style={styles.buttonoperatorend1}>
                <View style={styles.buttonoperatorend2}>
                  <Text style={styles.text2}>=</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#414141" },
  topcontainer: { height: windowHeight / 2.2, justifyContent: "flex-end", alignItems: "flex-end", marginRight: 10 },
  bottomcontainer: { height: windowHeight / 1.9, backgroundColor: "#414141", elevation: 8 },
  bottomcontainerspace: { height: windowHeight / 50 },
  bottomcontainerrow: { flexDirection: "row" },
  bottomcontainercolumn: { flexDirection: "column" },
  button1: { width: windowWidth / 4, justifyContent: "center", alignItems: "center", height: windowHeight / 10 },
  buttonpoint: { width: windowWidth / 4, paddingTop: 5, alignItems: "center", height: windowHeight / 10 },
  button0: { width: windowWidth / 4, paddingTop: 13, alignItems: "center", height: windowHeight / 10 },
  buttonoperators1: { width: windowWidth / 4, justifyContent: "flex-end", alignItems: "center", height: windowHeight / 10 },
  buttonoperatortop: { backgroundColor: "#383639", width: windowWidth / 8, height: "80%", justifyContent: "center", alignItems: "center", borderTopStartRadius: 30, borderTopEndRadius: 30 },
  buttonoperatormiddle: { backgroundColor: "#383639", width: windowWidth / 8, height: "100%", justifyContent: "center", alignItems: "center" },
  buttonoperatormiddle2: { backgroundColor: "#383639", width: windowWidth / 8, height: "100%", alignItems: "center", paddingTop: 13 },
  buttonoperatorend: { width: windowWidth / 4, justifyContent: "flex-start", alignItems: "center", height: windowHeight / 10 },
  buttonoperatorend1: { backgroundColor: "#383639", width: windowWidth / 8, height: "80%", justifyContent: "center", alignItems: "center", borderBottomStartRadius: 30, borderBottomEndRadius: 30 },
  buttonoperatorend2: { backgroundColor: "#f4f2b8", width: windowWidth / 7.4, height: windowWidth / 7.4, alignItems: "center", borderRadius: windowWidth / 4, paddingTop: 8 },
  text: { fontSize: 25, color: "#666867" },
  text2: { fontSize: 25, color: "#ada87f" },

})


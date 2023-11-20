import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [val1, setval1] = useState(0)
  const [val2, setval2] = useState(0)
  const [result, setResult] = useState(0)
  
  return (
    <View style={styles.container}>
      <TextInput 
      keyboardType = "numeric"
      style={styles.input}
      placeholder= {"0"}
      value = "0"
      >
      </TextInput>
      <View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.buttonType1}>
            <Text style={{color: "black",  fontSize: 25, 
            fontWeight: "bold", textAlign: "center"}}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType1}>
          <Text style={{color: "black",  fontSize: 25, 
            fontWeight: "bold", textAlign: "center"}}>Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType1}>
          <Text style={{color: "black",  fontSize: 25, 
            fontWeight: "bold", textAlign: "center"}}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType2}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row3}>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row4}>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row5}>
        <TouchableOpacity style={styles.zeroButton}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: "75%"
  },

  input: {
    margin: 20,
    color: "white",
    width: "20%",
    marginLeft: "85%", 
    fontSize: 70,
    fontWeight: "bold"
  },

  row1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10
  },

  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  zeroButton: {
    backgroundColor: "gray",
    borderRadius: 100,
    padding: 10,
    width: "45%",
  },

  buttonType1: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    width: "20%"
  },

  buttonType2: {
    backgroundColor: "orange",
    borderRadius: 100,
    padding: 10,
    width: "20%"
  },
  buttonType3: {
    backgroundColor: "gray",
    borderRadius: 100,
    padding: 10,
    width: "20%"
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10
  },
  row5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10
  }

});

export default App;
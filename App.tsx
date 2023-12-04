import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberPress = (number) => {
    if (!operator) {
      setVal1((prev) => prev + number);
    } else {
      setVal2((prev) => prev + number);
    }
  };

  const handleOperatorPress = (op) => {
    if (val1) {
      setOperator(op);
    }
  };

  const handleEqualPress = () => {
    if (val1 && val2) {
      const num1 = parseFloat(val1);
      const num2 = parseFloat(val2);

      switch (operator) {
        case '+':
          setResult((num1 + num2).toString());
          break;
        case '-':
          setResult((num1 - num2).toString());
          break;
        case 'x':
          setResult((num1 * num2).toString());
          break;
        case '/':
          setResult((num1 / num2).toString());
          break;
        default:
          break;
      }
    }
  };

  const handleClearPress = () => {
    setVal1('');
    setVal2('');
    setOperator('');
    setResult('');
  };

  const handleToggleOffPress = () => {
    // Implement functionality for turning off the calculator (if needed)
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder={"0"}
        value={result ? result : val2 || val1}
      />
      <View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.buttonType1} onPress={handleClearPress}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType1} onPress={handleToggleOffPress}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType1}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonType2} onPress={() => handleOperatorPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2} onPress={() => handleOperatorPress('x')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row3}>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row4}>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row5}>
        <TouchableOpacity style={styles.zeroButton} onPress={() => handleNumberPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType3} onPress={() => handleNumberPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonType2} onPress={handleEqualPress}>
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
    width: "80%", 
    marginLeft: "5%", 
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

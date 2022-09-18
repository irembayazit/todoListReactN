import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './todo.styles';

const Todo = props => {
  const [inputs, setInputs] = useState([]);
  const [text, setText] = useState('');

  const addField = () => {
    if (text === '') {
      Alert.alert('Boş bir ekleme yapamazsınız...');
    } else {
      let newObj = {id: inputs.length, text: text, isActive: true};
      let newArr = [...inputs];
      newArr.push(newObj);
      setInputs(newArr);
      setText('');
    }
  };

  const onChange = text => {
    setText(text);
  };

  const changeIsDone = id => {
    const newArr = [...inputs];
    newArr.map(todo => {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
      }
      return todo;
    });
    setInputs(newArr);
  };
  const removeDone = id => {
    console.log("remove done");
    const newArr = [...inputs];
    let filter = newArr.filter(todo => todo.id !== id);
    console.log(JSON.stringify(newArr));
    setInputs(filter);
  };

  const activeTodos =
    inputs.length > 0 ? inputs.filter(todo => todo.isActive).length : 0;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.count}>{activeTodos}</Text>
      </View>

      {inputs.map((item, index) => {
        return (
          <TouchableOpacity
            onLongPress={() => removeDone(item.id)}
            key={index}
            onPress={() => changeIsDone(item.id)}>
            <View
              style={item.isActive ? styles.listEnable : styles.listDisable}>
              <Text
                style={
                  item.isActive ? styles.textInput : styles.textInputCross
                }>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <View style={styles.box}>
        <TextInput
          placeholder="Yapılacaklar..."
          underlineColorAndroid
          style={styles.input}
          value={text}
          onChangeText={text => onChange(text)}
        />
        <TouchableOpacity onPress={addField} style={styles.button}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;

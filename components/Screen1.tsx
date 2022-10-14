import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from "react";
//import RNPickerSelect from "react-native-picker-select";
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { asteroiddata } from "./redux/actions";

function Screen1({ navigation }: { navigation: any }) {

  const dispatch = useDispatch();

  const [data, setdata] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  //const [show, setshow] = useState(true);
  const [d, setd] = useState(0);
  const [n, setn] = useState(0);
  const [e, sete] = useState(0);
  const [l, setl] = useState(0);
  const languages = ["English", "हिन्दी"];
  const sum = d + n + e + l;
  const [selectedlang, setselectedlang] = useState("");

  const onChangedata = (e: string) => {
    if (data.length >= 2) {
      setd(1);
    }
    else {
      setd(0);
    }
    setdata(e);
  }

  const handleValidEmail = (val: any) => {
    console.log(emailValidError);
    if (email.length === 0 && emailValidError === '') {
      sete(0);
    }
    else {
      sete(1);
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const onChangeNumber = (e: any) => {
    if (number.length === 9) {
      setn(1);
    }
    else {
      setn(0);
    }
    setnumber(e);
  }

  const Changescreen = () => {
    if (selectedlang === "English") {
      dispatch(asteroiddata(1))
    }
    else {
      dispatch(asteroiddata(2))
    }
    console.log(d);
    console.log(n);
    console.log(e);
    console.log(l);
    console.log(sum);
    navigation.navigate('Screen2');
  }


  //<TextInput keyboardType="numeric" placeholder="Enter Phone Number"  style={{ height: 40 }} onChangeText={onChangeNumber} value={number} ></TextInput>

  return (
    <View style={styles.container} >
      <View style={styles.block}>
        <Text style={{ margin: 10 }} >Name :</Text>
        <TextInput style={{ height: 40 }} placeholder="Enter your full name" onChangeText={onChangedata} value={data} ></TextInput>
      </View>
      <View style={styles.block}>
        <Text style={{ margin: 10 }} >Email id :</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Email"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => {
            setEmail(value);
            handleValidEmail(value);
          }}
        />
        {emailValidError ? <Text>{emailValidError}</Text> : null}
      </View>
      <View style={styles.block}>
        <Text style={{ margin: 10 }} >Phone No :</Text>
        <TextInput keyboardType="numeric" placeholder="Enter Phone Number" style={{ height: 40 }} onChangeText={onChangeNumber} value={number} ></TextInput>
      </View>
      <View style={styles.block}>
        <Text style={{ margin: 10 }} >Language :</Text>
        <SelectDropdown
          data={languages}
          onSelect={(selectedItem, index) => {
            setselectedlang(selectedItem);
            if (index === 0 || index === 1) {
              setl(1)
            }
            else {
              setl(0);
            }
            console.log(selectedItem, index);
          }}

          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </View>
      <View style={[styles.btnwidth]}>
        {sum !== 4 ? <Button title='Start test' disabled></Button> : null}
        {sum === 4 ? <Button color="#f194ff" title='Start test' onPress={Changescreen} ></Button> : null}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({


  btnwidth: {
    width: "50%",
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: "25%",
    marginTop: 20
  },
  block: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",

  }
})


export default Screen1;
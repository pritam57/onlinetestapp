import { Text, View, TextInput, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import Array from './Array';
import React, { useState } from 'react';
import Dragfile from './Dragfile';
import { useDispatch, useSelector } from "react-redux";
import Dragfileenglish from './Dragfileenglish';
const Screen5 = ({ navigation }: { navigation: any }) => {

    const languagenumber = useSelector((state: any) => state.productData);
    const ansquestions = useSelector((state: any) => state.answerquestions);
    const qno = 5;
    const questions = Array;

    const changequestion = (e: number) => {
        console.log(e + 1);
        navigation.navigate(`Screen${e + 2}`);
    }

    const nextquestion = () => {
        navigation.navigate(`Screen${qno + 2}`);
    }

    return (
      <>
        <SafeAreaView >
            <FlatList
                data={questions}
                renderItem={({ item, index }) => {
                    let dp = (index + 1).toString();
                    return (
                        <View style={{ margin: 10, padding: 5 }}>
                        {ansquestions.includes(index+1)===true ?  <Button title={dp} color="green" onPress={() => { changequestion(index) }} ></Button> : null}
                        {ansquestions.includes(index+1)===false ?  <Button title={dp} color="grey" onPress={() => { changequestion(index) }} ></Button> : null}

                      </View>
                    )
                }
                }
                keyExtractor={(item, index) => item.qno.toString()}
                horizontal
            />
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 20, margin: 10 }}>Q.No</Text>
                <Text style={{ borderWidth: 2, borderColor: "red", width: 40, height: 40, borderRadius: 40, textAlignVertical: "center", fontSize: 20, fontWeight: "800", textAlign: "center" }}>{qno}</Text>
            </View>
            {languagenumber===1 ? <Text>{questions[qno-1].english}</Text>: null}
          {languagenumber===2 ? <Text>{questions[qno-1].hindi}</Text>: null}
        </SafeAreaView>

      {  languagenumber===1 ?<Dragfileenglish/>:null}
      {  languagenumber===2 ?<Dragfile/>:null}
        <View style={{margin:20}}>
        <Button  title='next' onPress={nextquestion} /></View>
        </>
    )
}

export default Screen5; 
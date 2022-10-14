import { Text, View, TextInput, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import Array from './Array';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { piechartadd, piechartreduce } from './redux/actions';
import { addquestions } from './redux/actions';

const Screen3 = ({ navigation }: { navigation: any }) => {

    const qno = 2;
    const [data, setdata] = useState("");
    const questions = Array;
    const dispatch = useDispatch();
    const ansquestions = useSelector((state: any) => state.answerquestions);

    const onChangedata = (e: string) => {
        setdata(e);
        dispatch(addquestions(qno));
    }

    const changequestion = (e: number) => {
        console.log(e + 1);
        navigation.navigate(`Screen${e + 2}`);
    }
    const languagenumber = useSelector((state: any) => state.productData);

    function changepiechartmarks() {
        var p: string = data.toLocaleUpperCase();
        console.log(p);
        if (p === "JAVASCRIPT") {
            dispatch(piechartadd(1, 20))
        }
        else {
            dispatch(piechartreduce(1, 0))
        }
    }
    return (
        <SafeAreaView >

            <View style={{ marginTop: "10%" }}>
                <FlatList
                    data={questions}
                    renderItem={({ item, index }) => {
                        let dp = (index + 1).toString();
                        return (
                            <View style={{ margin: 10, padding: 5 }}>
                                {ansquestions.includes(index + 1) === true ? <Button title={dp} color="green" onPress={() => { changequestion(index) }} ></Button> : null}
                                {ansquestions.includes(index + 1) === false ? <Button title={dp} color="grey" onPress={() => { changequestion(index) }} ></Button> : null}
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => item.qno.toString()}
                    horizontal
                />
            </View>
            <View style={{ margin: 10, marginVertical: "10%" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, margin: 10 }}>Q.No</Text>
                    <Text style={{ borderWidth: 2, borderColor: "red", width: 40, height: 40, borderRadius: 40, textAlignVertical: "center", fontSize: 20, fontWeight: "800", textAlign: "center" }}>{qno}</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", margin: 10, flexWrap: "wrap" }}>
                    <TextInput style={{ height: 40, width: "30%", borderBottomColor: "black", borderBottomWidth: 2, marginLeft: 10 }} placeholder="Answer" onChangeText={onChangedata} value={data} ></TextInput>
                    {languagenumber === 1 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].english}</Text> : null}
                    {languagenumber === 2 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].hindi}</Text> : null}
                </View>

                <View style={{ width: "40%", marginLeft: "30%", marginTop: "10%" }}>
                    <Button title='Next' onPress={() => { navigation.navigate(`Screen${qno + 2}`), changepiechartmarks() }} ></Button>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Screen3; 
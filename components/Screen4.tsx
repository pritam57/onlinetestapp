import { Text, View, TextInput, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import Array from './Array';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { piechartadd, piechartreduce } from './redux/actions';
import { addquestions } from './redux/actions';

const Screen4 = ({ navigation }: { navigation: any }) => {

    const qno = 3;
    const questions = Array;
    const dispatch = useDispatch();
    const [tclr, settclr] = useState("grey");
    const [fclr, setfclr] = useState("grey");
    const [ans, setans] = useState("none");
    const ansquestions = useSelector((state: any) => state.answerquestions);

    function ontrue() {
        settclr("green");
        setfclr("grey");
        setans("true");
        dispatch(addquestions(qno))
    }

    function onfalse() {
        setfclr("green");
        settclr("grey");
        setans("false");
        dispatch(addquestions(qno))
    }

    const changequestion = (e: number) => {
        console.log(e + 1);
        navigation.navigate(`Screen${e + 2}`);
    }
    const languagenumber = useSelector((state: any) => state.productData);

    function changepiechartmarks() {

        if (ans === "true") {
            dispatch(piechartadd(2, 20))
        }
        else {
            dispatch(piechartreduce(2, 0))
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

                <View style={{ display: "flex", flexDirection: "row" }}>
                    {languagenumber === 1 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].english}</Text> : null}
                    {languagenumber === 2 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].hindi}</Text> : null}
                </View>

                {languagenumber === 1 ? <View >
                    <View style={{ width: "60%", marginLeft: "20%", marginTop: "10%" }}>
                        <Button title='true' color={tclr} onPress={ontrue} />
                    </View>
                    <View style={{ width: "60%", marginLeft: "20%", marginTop: "10%" }}>
                        <Button title='false' color={fclr} onPress={onfalse} />
                    </View>
                </View> : null}

                {languagenumber === 2 ? <View >
                    <View style={{ width: "60%", marginLeft: "20%", marginTop: "10%" }}>
                        <Button title='सत्य' color={tclr} onPress={ontrue} />
                    </View>
                    <View style={{ width: "60%", marginLeft: "20%", marginTop: "10%" }}>
                        <Button title='असत्य' color={fclr} onPress={onfalse} />
                    </View>
                </View> : null}

                <View style={{ width: "40%", marginLeft: "30%", marginTop: "10%" }}>
                    <Button title='Next' onPress={() => { navigation.navigate(`Screen${qno + 2}`), changepiechartmarks() }} ></Button>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Screen4;

/* 

{languagenumber === 1 ? <View >
                <View style={{ margin: 10 }}>
                    <Button title='true' color={tclr} onPress={ontrue} />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title='false' color={fclr} onPress={onfalse} />
                </View>
            </View> : null}
            {languagenumber === 2 ? <View >
                <View style={{ margin: 10 }}>
                    <Button title='सत्य' color={tclr} onPress={ontrue} />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title='असत्य' color={fclr} onPress={onfalse} />
                </View>
            </View> : null} */
import { Text, View, TextInput, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import Array from './Array';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { piechartadd, piechartreduce } from './redux/actions';
import { addquestions } from './redux/actions';

const Screen5 = ({ navigation }: { navigation: any }) => {
    const qno = 4;
    const questions = Array;
    const dispatch = useDispatch();
    const [checked, setChecked] = useState<any[]>([]);

    const ans = ["Large Community", "Reusability", "Live and Hot Reloading", "Additional Third-Party Plugins"];
    const anshindi = ["बड़ा समुदाय", "पुनर्प्रयोग", "लाइव और हॉट रीलोडिंग", "अतिरिक्त तृतीय-पक्ष प्लगइन्स"]
    const ansquestions = useSelector((state: any) => state.answerquestions);
    const languagenumber = useSelector((state: any) => state.productData);

    const changequestion = (e: number) => {
        console.log(e + 1);
        navigation.navigate(`Screen${e + 2}`);
    }

    const nextquestion = () => {
        navigation.navigate(`Screen${qno + 2}`);
    }

    const addselected = (a: string) => {
        dispatch(addquestions(qno));
        if (checked.includes(a) === false) {
            setChecked([...checked, a]);
            console.log(checked);
        }
        else {
            setChecked(checked.filter((ab: any, b: any) => {
                return a != ab
            }))
            console.log(checked);
        }
    }

    function changepiechartmarks() {
        if (checked.includes("fourth") === true && checked.includes("first") === true && checked.includes("second") === true && checked.includes("third") === true) {
            dispatch(piechartadd(3, 20))
        }
        else {
            dispatch(piechartreduce(3, 0))
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

                <View>
                    <View style={{ display: "flex", flexDirection: "row", }}>
                        <RadioButton
                            value="first"
                            status={checked.includes("first") === false ? 'unchecked' : 'checked'}
                            onPress={() => addselected("first")}
                        />
                        {languagenumber === 1 ? <Text style={{ textAlignVertical: "center" }}>{ans[0]}</Text> : null}
                        {languagenumber === 2 ? <Text style={{ textAlignVertical: "center" }}>{anshindi[0]}</Text> : null}
                    </View>

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <RadioButton
                            value="second"
                            status={checked.includes("second") === false ? 'unchecked' : 'checked'}
                            onPress={() => addselected("second")}
                        />
                        {languagenumber === 1 ? <Text style={{ textAlignVertical: "center" }}>{ans[1]}</Text> : null}
                        {languagenumber === 2 ? <Text style={{ textAlignVertical: "center" }}>{anshindi[1]}</Text> : null}
                    </View>

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <RadioButton
                            value="third"
                            status={checked.includes("third") === false ? 'unchecked' : 'checked'}
                            onPress={() => addselected("third")}

                        />
                        {languagenumber === 1 ? <Text style={{ textAlignVertical: "center" }}>{ans[2]}</Text> : null}
                        {languagenumber === 2 ? <Text style={{ textAlignVertical: "center" }}>{anshindi[2]}</Text> : null}
                    </View>

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <RadioButton
                            value="fourth"
                            status={checked.includes("fourth") === false ? 'unchecked' : 'checked'}
                            onPress={() => addselected("fourth")}
                        />

                        {languagenumber === 1 ? <Text style={{ textAlignVertical: "center" }}>{ans[3]}</Text> : null}
                        {languagenumber === 2 ? <Text style={{ textAlignVertical: "center" }}>{anshindi[3]}</Text> : null}
                    </View>

                </View>

                <View style={{ width: "40%", marginLeft: "30%", marginTop: "10%" }}>
                    <Button title='next' onPress={() => { nextquestion(), changepiechartmarks() }} />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Screen5; 
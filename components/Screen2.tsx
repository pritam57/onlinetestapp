import { Text, View, TextInput, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import Array from './Array';
import React, { useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from "react-redux";
import { piechartadd, piechartreduce } from './redux/actions';
import { addquestions } from './redux/actions';

const Screen2 = ({ navigation }: { navigation: any }) => {
    const qno = 1;
    const ansquestions = useSelector((state: any) => state.answerquestions);
    const questions = Array;
    const languagenumber = useSelector((state: any) => state.productData);
    const piechartpercentage = useSelector((state: any) => state.piechartmark);
    const dispatch = useDispatch();

    const radioButtonsData: RadioButtonProps[] =
        [
            {
                id: '1',
                label: 'virtual dom         ',
                value: 'a'
            },
            {
                id: '2',
                label: 'original dom        ',
                value: 'b'
            },
            {
                id: '3',
                label: 'both of the above   ',
                value: 'c'
            },
            {
                id: '4',
                label: 'none of the above   ',
                value: 'd'
            }]

    const radioButtonsDatahindi: RadioButtonProps[] = [
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'आभासी डोम       ',
            value: 'a'
        }, {
            id: '2',
            label: 'मूल डोम          ',
            value: 'b'
        },
        {
            id: '3',
            label: 'ऊपर के दोनों      ',
            value: 'c'
        },
        {
            id: '4',
            label: 'इनमे से कोई भी नहीं',
            value: 'd'
        }
    ]

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData)
    const [radioButtonshindi, setRadioButtonshindi] = useState<RadioButtonProps[]>(radioButtonsDatahindi)

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
        setRadioButtonshindi(radioButtonsArray);

        radioButtons.filter((a: any, b: any) => {
            if (a.selected === true) {
                console.log(a.value)
                console.log(piechartpercentage);
                if (a.value === "a") {
                    dispatch(piechartadd(0, 20))
                    dispatch(addquestions(qno))
                }
                else {
                    dispatch(piechartreduce(0, 0))
                    dispatch(addquestions(qno))
                }
            }
        })

        radioButtonshindi.filter((a: any, b: any) => {
            if (a.selected === true) {
                console.log(a.value)
                console.log(piechartpercentage);
                if (a.value === "a") {
                    dispatch(piechartadd(0, 20))
                    dispatch(addquestions(qno))
                }
                else {
                    dispatch(piechartreduce(0, 0))
                    dispatch(addquestions(qno))
                }
            }
        })
    }

    const changequestion = (e: number) => {
        console.log(e + 1);
        navigation.navigate(`Screen${e + 2}`);
    }

    const nextquestion = () => {
        navigation.navigate(`Screen${qno + 2}`);
    }


    return (
        <SafeAreaView >
            <View style={{ marginTop: "10%" }}>
                <FlatList
                    data={questions}
                    renderItem={({ item, index }) => {
                        let dp = (index + 1).toString();
                        return (
                            <View style={{ margin: 20 }}>
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

                {languagenumber === 1 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].english}</Text> : null}
                {languagenumber === 2 ? <Text style={{ fontSize: 20, backgroundColor: "lightblue", fontWeight: "600", margin: 10 }}>{questions[qno - 1].hindi}</Text> : null}
                {languagenumber === 1 ? <View style={{ alignSelf: "flex-start" }}>

                    <View style={{ margin: 10 }}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={onPressRadioButton}
                        />
                    </View>
                </View> : null}

                {languagenumber === 2 ? <View style={{ alignSelf: "flex-start" }}>
                    <RadioGroup
                        radioButtons={radioButtonshindi}
                        onPress={onPressRadioButton}

                    />
                </View> : null}

                <View style={[styles.btnwidth]}>
                    <Button title='next' onPress={nextquestion} />
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    btnwidth: {
        width: "40%",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: "30%",
        marginTop: "10%"
    },

})


export default Screen2; 
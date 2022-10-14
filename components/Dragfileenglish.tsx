import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DragAndDrop from "volkeno-react-native-drag-drop";
import { useDispatch, useSelector } from "react-redux";
import { piechartadd, piechartreduce } from './redux/actions';
import { addquestions } from "./redux/actions";

export default function Dragfileenglish() {
    const qno=5;
    const dispatch = useDispatch();

    const [items, setItems] = React.useState([
        { id: 1, text: "javascript library" },
        { id: 2, text: "jordan walkey" },
        { id: 3, text: "javascript compiler" },
        { id: 4, text: "javascript" },
    ]);


    const [zones, setZones] = React.useState([
        {
            id: 1,
            text: " question zone",
            items: [{ id: 5, text: "Who created React.js?" },
            { id: 6, text: "What is Babel" },
            { id: 7, text: "In which language is React.js written?" },
            { id: 8, text: "React is a" }],
        },
        {
            id: 2,
            text: "answer zone",
        },
    ]);



    return (

        <DragAndDrop

            contentContainerStyle={styles.contentContainerStyle}
            itemKeyExtractor={(item) => item.id}
            zoneKeyExtractor={(zone) => zone.id}
            zones={zones}
            items={items}
            itemsContainerStyle={styles.itemsContainerStyle}
            zonesContainerStyle={styles.zonesContainerStyle}
            onMaj={(zones, items) => {
                setItems(items);
                setZones(zones);
                console.log(zones[1].items);
                var p = zones[1].items;
                var t: any = [];
                p.map((a: any, b: any) => {
                    return (
                        console.log(a.text),
                        t.push(a.text)
                    )
                })
                console.log(t);
                var ans = ['jordan walkey', 'javascript compiler', 'javascript', 'javascript library'];
                var right = true;
                ans.map((a: any, b: any) => {
                    if (t[b] !== a) {
                        dispatch(piechartreduce(4, 0));
                        dispatch(addquestions(qno))
                        right = false
                    }
                    if (b === 3 && t[3] === ans[3] && right === true) {
                        dispatch(piechartadd(4, 20));
                        dispatch(addquestions(qno))
                    }
                })
            }}
            itemsInZoneStyle={styles.itemsInZoneStyle}
            renderItem={(item) => {
                return (
                    <View style={styles.dragItemStyle}>
                        <Text style={styles.dragItemTextStyle}>{item.text}</Text>
                    </View>
                );
            }}
            renderZone={(zone, children, hover) => {
                return (
                    <View
                        style={{
                            ...styles.dragZoneStyle,
                            backgroundColor: hover ? "#E2E2E2" : "#FFF",
                        }}
                    >
                        <Text style={styles.dragZoneTextStyle}>{zone.text}</Text>
                        {children}
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({

    itemsInZoneStyle: {
        width: "100%",
    },
    contentContainerStyle: {
        padding: 20,
        paddingTop: 40,
    },
    itemsContainerStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    zonesContainerStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    dragItemStyle: {
        borderColor: "#F39200",
        borderWidth: 1,
        width: "47%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        backgroundColor: "#F5F5F5",
        padding: 10,
    },
    dragItemTextStyle: {
        color: "#011F3B",
        fontWeight: "700",
        textAlign: "center",
    },
    dragZoneStyle: {
        borderColor: "#F39200",
        borderWidth: 1,
        width: "47%",
        padding: 15,
        minHeight: 130,
        marginVertical: 15,
    },
    dragZoneTextStyle: {
        position: "absolute",
        opacity: 0.2,
        zIndex: 0,
        alignSelf: "center",
        top: "50%",
    },
});
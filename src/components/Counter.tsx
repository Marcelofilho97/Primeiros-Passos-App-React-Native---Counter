import React, {useEffect, useState } from "react"
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"






export function Counter() {

    const [coffeeCount, setCoffeeCount] = useState(0)
    const [waterCount, setWaterCount] = useState(0)
    //const [date, setDate] = useState(0)
    //const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(new Date().getMinutes())
    //const [second, setSecond] = useState(0)
    

    useEffect(() => { 
        //let currentHour = new Date().getHours(
        //let currentSecond = new Date().getSeconds() 

       const timer =  setTimeout(() => {
            setMinute(minute + 1)
            setCoffeeCount(0)
            setWaterCount(0)
        }, 60000)

        return () => clearTimeout(timer)

    }, [minute])

    return(
        <View>
            <Text> { minute } </Text>
            <TouchableOpacity onPress={() => {
                setCoffeeCount(coffeeCount + 1)
            }}>
                <Image style = {styles.coffeImages}
                source={
                    require('../../assets/img/coffee.png')
                }
                />
            </TouchableOpacity>
            <Text style= {styles.coffeText}> Número de Xícaras de Café Durante o Dia </Text>
            
            <Text style= {styles.coffeCount}>{coffeeCount}</Text>
            

            <TouchableOpacity onPress={() => {
                setWaterCount(waterCount + 1)
            }}>
                <Image style= {styles.waterImage}
                source={
                    require('../../assets/img/water.png')
                }
                />
            </TouchableOpacity>
            <Text style={styles.waterText}> Número de Copos de Água Durante o Dia </Text>
            <Text style={styles.waterCount}>{waterCount}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    coffeImages: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        backgroundColor: '#E6BAA1',
        padding: 45,

        marginTop: 30,
        marginBottom: 12,
        borderRadius: 20

    },
    waterImage: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        backgroundColor: '#AEE4E6',
        padding: 45,

        marginTop: 30,
        marginBottom: 12,
        borderRadius: 20
    },
    coffeText: {
        fontSize: 18,
        alignSelf: 'center',
    },
    waterText: {
        fontSize: 18,
        alignSelf: 'center',
    },
    coffeCount: {
        fontSize: 50,
        alignSelf: 'center',

    },
    waterCount: {
        fontSize: 50,
        alignSelf: 'center',
    }
})



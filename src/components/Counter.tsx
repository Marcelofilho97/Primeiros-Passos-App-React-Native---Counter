import React, {useEffect, useState } from "react"
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"






export function Counter() {

    const [coffeeCount, setCoffeeCount] = useState(0)
    const [waterCount, setWaterCount] = useState(0)
    const [minute, setMinute] = useState(new Date().getDate())

    useEffect(() => { 
       const timer =  setTimeout(() => {
            setMinute(minute + 1)
            setCoffeeCount(0)
            setWaterCount(0)
        }, 86400000) //86400000 - 1 dia

        return () => clearTimeout(timer)

    }, [minute])

    return(
        <View style = {styles.Container}>
            <Text> { minute } </Text>

            <div>
                <TouchableOpacity onPress={() => {
                    setCoffeeCount(coffeeCount + 1)
                }}>
                    <Image style = {styles.coffeImages}
                    source={
                        require('../../assets/img/coffee.png')
                    }
                    />
                </TouchableOpacity>
                <br />
                <Text style= {styles.coffeText}> Número de Xícaras de Café Durante o Dia </Text>
                <br />
                <Text style= {styles.coffeCount}>{coffeeCount}</Text>
            </div>
            
            <div>
                <TouchableOpacity onPress={() => {
                    setWaterCount(waterCount + 1)
                }}>
                    <Image style= {styles.waterImage}
                    source={
                        require('../../assets/img/water.png')
                    }
                    />
                </TouchableOpacity>
                <br />
                <Text style={styles.waterText}> Número de Copos de Água Durante o Dia </Text>
                <br />
                <Text style={styles.waterCount}>{waterCount}</Text>
            </div>            
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    div: {
        alignItems: 'center'
    },
    coffeImages: {
        width: 180,
        height: 180,
        backgroundColor: '#E6BAA1',
        padding: 45,
        alignSelf: 'center',

        marginTop: 30,
        marginBottom: 12,
        borderRadius: 20

    },
    waterImage: {
        width: 180,
        height: 180,
        backgroundColor: '#AEE4E6',
        padding: 45,
        alignSelf: 'center',

        marginTop: 30,
        marginBottom: 12,
        borderRadius: 20
    },
    coffeText: {
        fontSize: 15,
    
    },
    waterText: {
        fontSize: 15,
    },
    coffeCount: {
        fontSize: 50,
        
    },
    waterCount: {
        fontSize: 50,
    
    }
})



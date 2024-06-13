import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


export default function App(){
    return(
        <>
        <View style={style.container}>
            <Text style={style.headName}>Jobizz</Text>
            <Text style={style.headName2}>Welcome Back 👋</Text>
            <Text style={style.headName3}>Let's log in. Apply to Jobs!</Text>
        </View>
        <View style={style.form}>
            <TextInput style={style.nameInput} placeholder='Name' placeholderTextColor={'#AFB0B6'} textAlign='left'></TextInput>
            <TextInput style={style.emailInput} placeholder='Email' placeholderTextColor={'#AFB0B6'} textAlign='left'></TextInput>
            <TouchableOpacity style={style.loginButton} >
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={style.footer}>
            <View style={style.line} />
            <Text style={style.footerText}>Or continue with</Text>
            <View style={style.line} />
        </View>
        <View style={style.imageView}>
            <TouchableOpacity style={style.imgButton}>
                <Image source={require("./assets/Pasted Graphic.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.imgButton2}>
                <Image source={require("./assets/Pasted Graphic 1.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.imgButton3}>
                <Image source={require("./assets/Pasted Graphic 2.png")}/>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={style.textFoot}>Haven't an Account? <Text style={{color: '#356899'}}>Register</Text></Text>
        </View>
        </>
    );
}

const style = StyleSheet.create({
    headName:{
        fontWeight: '600',
        fontSize: 22,
        color: '#356899',
        lineHeight: '33',
        width: 150,
        height: 33,
        top: 106,
        left: 24,
    },
    headName2:{
        fontWeight: '600',
        fontSize: 24,
        lineHeight: '33.6',
        width: 200,
        height: 33,
        top: 115,
        left: 24,

    },
    headName3:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight: '22.4',
        letterSpacing: -1,
        width: 170,
        height: 22,
        top: 120,
        left: 24,
        color: '#929292'
    },
    nameInput:{
        width: 328,
        height: 50,
        top: 190,
        left: 32,
        paddingLeft:20,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#AFB0B6'
    },
    emailInput:{
        width: 328,
        height: 50,
        top: 215,
        left: 32,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#AFB0B6'
    },
    loginButton:{
        backgroundColor: '#356899',
        width: 328,
        height: 50,
        top: 250,
        left: 32,
        borderRadius: 5,
    },
    buttonText:{
        height: 24,
        top: 11,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    line:{
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
        width: 98,
        top: 320,
        marginLeft: 30,
        marginRight: 30,
    },
    footerText:{
        width: 99,
        height: 16,
        top: 320,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16.44,
        alignItems: 'center',
        color: '#AFB0B6',
    },
    imageView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 420,
    },
    imgButton:{
        backgroundColor: "#FAFAFD",
        padding: 8,
        borderRadius: 30,
        width: 21,
        height: 56,
        top: 375,
        right: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgButton2:{
        backgroundColor: "#FAFAFD",
        padding: 8,
        borderRadius: 30,
        width: 21,
        height: 56,
        top: 380,
        right:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgButton3:{
        backgroundColor: "#FAFAFD",
        padding: 8,
        borderRadius: 30,
        width: 21,
        height: 56,
        top: 379,
        right: -40,  
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFoot:{
        width: 195,
        height: 18,
        top: 420,
        left: 102,
        lineHeight: 17.71,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '14',
        color: '#AFB0B6'
    }
})
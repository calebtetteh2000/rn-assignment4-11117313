import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const PopularJob = ({title, salary, company, location, icon}) => {
    return(
        <>
            <View style={styles.jobList}>
                <View key={PopularJob.id} style={styles.jobSection}>
                    <Image source={icon} style={styles.imageIcon}/>
                    <Text style={[styles.title]}>{title}</Text>
                    <Text style={[styles.salary]}>{salary}</Text>
                    <Text style={[styles.company]}>{company}</Text>
                    <Text style={[styles.location]}>{location}</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    jobList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        top: 40
    },
    jobSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 380,
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 74,
        bottom: 20,
    },
    imageIcon:{
        marginRight: 20,
        width: 41.26,
        height: 43
    },
    title: {
        width: 184,
        height: 18,
        fontSize: 14,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 18.2,
        top: -15,
    },
    salary: {
        width: 90,
        height: 19,
        left: 18,
        fontSize: 12,
        fontWeight: '400',
        color: '#0D0D26',
        top: -15,
        lineHeight: 19.2,
        textAlign: 'right'
    },
    company: {
        width: 74,
        height: 21,
        top: 20,
        right: 275,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
    location: {
        width: 120,
        height: 21,
        top: 20,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
        right: 180,
        textAlign: 'right',
        bottom: 20,
    },
});


export default PopularJob;
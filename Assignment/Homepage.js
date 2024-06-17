import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView } from 'react-native';
import FeaturedJobCard from './FeaturedJobCard';


const horizontalData = [
    {key: '1', image: require("./assets/Pasted Graphic 1.png"), location: "Accra, Ghana", price: "$180.00", label: "Software Engineering", miniLabel: "Google", backgroundColor: "#04284A", textColour: "white", },
    {key: '2', image: require("./assets/Pasted Graphic 2.png"), location: "Accra, Ghana", price: "$160.00", label: "Software Engineering", miniLabel: "Facebook", backgroundColor: "#5386E4", textColour: "white", },
    {key: '3', image: require("./assets/Pasted Graphic.png"), location: "Accra, Ghana", price: "$190.00", label: "Software Engineering", miniLabel: "Apple", backgroundColor: "#EA4335", textColour: "white", },
    {key: '4', image: require("./assets/Pasted Graphic 1.png"), location: "Accra, Ghana", price: "$180.00", label: "Software Engineering", miniLabel: "Google", backgroundColor: "#FBBC05", textColour: "white", },
    {key: '5', image: require("./assets/Pasted Graphic 2.png"), location: "Accra, Ghana", price: "$160.00", label: "Software Engineering", miniLabel: "Facebook", backgroundColor: "pink", textColour: "white", },
    {key: '6', image: require("./assets/Pasted Graphic.png"), location: "Accra, Ghana", price: "$190.00", label: "Software Engineering", miniLabel: "Apple", backgroundColor: "lightgreen", textColour: "white", },
    {key: '7', image: require("./assets/Pasted Graphic 1.png"), location: "Accra, Ghana", price: "$180.00", label: "Software Engineering", miniLabel: "Google", backgroundColor: "black", textColour: "white", },
    {key: '8', image: require("./assets/Pasted Graphic 2.png"), location: "Accra, Ghana", price: "$160.00", label: "Software Engineering", miniLabel: "Facebook", backgroundColor: "blue", textColour: "white", },
]

export default function Homepage(){
    return(
        <>
    <ScrollView style={styles.container}>
        <View style={styles.container}>
                <Text style={styles.headName}>Caleb Tetteh</Text>
                <Text style={styles.userEmail}>eric@gmail.com</Text>
                <Image style={styles.profileImage} source={require("./assets/Profile pic.png")} />
            <View style={styles.search}>
                <TextInput style={styles.searchBar} placeholder='Search a job or position' placeholderTextColor={"#95969D"} textAlign='center' fontSize='15' fontWeight='400'/>
                <Image style={styles.searchImage} source={require("./assets/Search.png")} />
                <View style={styles.Box}>
                    <Image style={styles.Imagebox} source={require("./assets/layers.png")} />
                </View>
            </View>
                <Text style={styles.featuredText}>Featured Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList 
        horizontal = {true}
        data={horizontalData}
        renderItem={({item}) =>(
            <FeaturedJobCard
            image={item.image}
            location={item.location}
            price={item.price}
            label={item.label}
            miniLabel={item.miniLabel}
            backgroundColor={item.backgroundColor}
            textColour={item.textColour}
            />
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{alignItems:'center', paddingLeft: 20,}}
        />
    </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headName: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        width: 254,
        height: 36,
        top: 44,
        left: 24
    },
    userEmail: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        width: 254,
        height: 24,
        top: 44,
        left: 24,
        color: "#95969D"
    },
    profileImage: {
        width: 54,
        height: 54,
        top: -14,
        left: 325,
    },
    searchBar: {
        width: 263,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#F2F2F3',
        top: 30,
        left: 24,
    },
    searchImage:{
        width: 20,
        height: 20,
        top: -5,
        left: 44,
    },
    Box:{
        width: 48,
        height: 48,
        left: 325,
        marginTop: -37,
        borderRadius: 12,
        backgroundColor: "#F2F2F3",
    },
    Imagebox:{
        width: 36,
        height: 36,
        top: 6,
        left: 6,
    },
    featuredText:{
        width: 144,
        height: 21,
        top: 30,
        left: 27,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 20.8,
    },
    seeAll:{
        width: 42,
        height: 14,
        top: 12,
        left: 325,
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 16.8,
        color: "#95969D",
    },
});

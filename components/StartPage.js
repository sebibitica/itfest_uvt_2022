import {Image, View, StyleSheet} from "react-native";
import {Spacer, TocuchO} from "./HelpFunction"


const bg_color = '#ecf39e';
const color1 = '#90a955';
const color2 = '#4f772d';
const color3 = '#31572c';
const color4 = '#132a13';

export function StartPage({navigation}) {
    return(
        <View style={styles.container}>

            <Image style={{width:170,height:170}} source={require("../images/logo.png")}/>

            <TocuchO name={"Login"} goTo={"LoginPage"} navigation={navigation}/>

            <Spacer height={20}/>

            <TocuchO name={"Register"} goTo={"SignupPage"} navigation={navigation}/>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bg_color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});
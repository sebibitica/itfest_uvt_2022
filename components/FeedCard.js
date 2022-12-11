import { ScrollView, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';


const bg_color = '#ecf39e';
const color1 = '#90a955';
const color2 = '#4f772d';
const color3 = '#31572c';
const color4 = '#132a13';

export default function FeedCard({profilePht, username, feedPhoto}){
    return(
      <View>
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <View style = {styles.headerThingsCnt}>
            <Image style={styles.tinyLogo} source={profilePht}></Image>
            <Text style={styles.feedCntText}>{username}</Text>
            </View>
            
          </View>

          <View style={styles.photoCnt}>
            <Image style={styles.cardPhoto}
            source={{
              uri: feedPhoto}}/>
          </View>



        </View>
      </View>
      
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    mainScreen: {
      height:"100%",
    },
    header: {
      backgroundColor:color3,
      height:110,
    },
    headerText:{
      color:"white",
      fontSize:"29",
      paddingTop:55,
      paddingLeft:12,
      fontWeight:"bold"
    },
  
    feedCnt:{
      margin:15,
      height:"100%"
    },
    
    mainCard:{
      backgroundColor:bg_color,
      height:500, 
      width:"100%",
      // borderWidth:"2",
      // borderColor:color3,
      borderRadius:20,
      flexDirection:"column"
    },
  
    cardHeader:{
      height:"10%",
      // backgroundColor:color2,
      // borderRadius:20,
    },
  
    tinyLogo:{
      height:40,
      width:40,
      borderRadius:30,
      borderWidth:2,
      borderColor:"black"
    },
    headerThingsCnt:{
      padding:6,
      paddingLeft:15,
      flexDirection:"row",
      alignItems:"center",
    },
  
    feedCntText:{
      color:"black",
      marginLeft:15,
      fontSize:16,
      fontWeight:"600"
    },
    photoCnt:{
      height:430,
      backgroundColor:color3,
      borderRadius:20,
    },
    cardPhoto:{
      height:"100%",
      width:"100%",
      borderRadius:20,
    }
  });
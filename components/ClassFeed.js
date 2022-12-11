import { ScrollView, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import { useState } from 'react'

export function Spacer(height){
  return(
    <View stylele={{height:height}}>
      <Text> </Text>
    </View>
  )
}
import FeedCard from './FeedCard';

const bg_color = '#ecf39e';
const color1 = '#90a955';
const color2 = '#4f772d';
const color3 = '#31572c';
const color4 = '#132a13';

export function Like()
{
  const [liked,setLiked] = useState("bg_color")
  const [like, setLike] = useState(0)
  const [likes, setLikes] = useState(0)

  return(
    <View style = {styles.likeCnt}>
        <Icon name="ios-heart-circle-outline" size={36} color={liked} onPress={()=>{
      if (like == 0){
        setLike(1)
        setLiked("red")
        setLikes(likes+1)
      }
      else if (like == 1){
        setLike(0)
        setLiked("black")
        setLikes(likes-1)
      }
    }}  />
    <Text style={{fontSize:19}}>{likes}</Text>

    </View>
    
  );
}

const Stack = createNativeStackNavigator()

export function Feed({navigation,route}) {

    
    const [posts, setPosts] = useState(route.params.classPost)
    const [acces, setAcces ] = useState(true)



    return (
      <View style={{backgroundColor:bg_color, height:"100%"}}>
        <View style={styles.mainScreen}>
  
          <View style={styles.header}>
            <Text style={styles.headerText}>{route.params.name}</Text>
          </View>
  
          
  
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.feedCnt}>
                {posts.map((e)=>{
                    return(
                      <View>
                          <FeedCard feedPhoto={e.uri} profilePht={require('../images/user.png')}/>
                          
                          <View style={styles.footer}>
                            <Like/>
                            <TouchableOpacity><Text>Add a comment...</Text></TouchableOpacity>
                          </View>

                          <Spacer height={40}/>
                      </View>
                    )
                })}
            </View>



          </ScrollView>
  
          <TouchableOpacity style={styles.accesCameraBtn} onPress={()=>{
            if(acces == true || acces == false){
                navigation.navigate("Camera",{
                    posts:posts,
                    setPosts:setPosts,
                    setAcces:setAcces,
                    setClassPost:route.params.setClassPost,
                    classPost:route.params.classPost
                })
            }else{alert("Ai incarcat deja prezenta!")}
          }}
          >
            <Image source={require("../images/icons/camera.png")} style={{height:40,width:40}}/>
          </TouchableOpacity>
        </View>
      </View> 
      );
}

export function CameraScreen({navigation,route}){
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
      
  
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type} ref={ref =>{setCameraRef(ref)}}>
          <View
            style={styles.containerCamera}>
            <TouchableOpacity
              style={styles.flipCameraBtn}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Image style={{height:40,width:40}} source={require("../images/icons/repeat.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
              if(cameraRef){
                let photo = await cameraRef.takePictureAsync();
                
                route.params.setPosts([...route.params.posts,photo])
                route.params.setClassPost([...route.params.posts,photo])
                route.params.setAcces(false)
                navigation.navigate("Feed",{
                  classPost:route.params.classPost,
                  setClassPost:route.params.setClassPost
                })
              }
            }}>
              <View style={styles.takePictureBtn}
              >
                <View style={styles.flipBtn} >
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    accesCameraBtn:{
        alignItems:"center",
        height:60,
        justifyContent:'center'
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
      fontSize:"25",
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
    },

    containerCamera:{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },

    flipCameraBtn:{
        flex: 0.1,
        alignSelf: 'flex-end'
    },

    flipText:{
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white'
    },

    takePictureBtn:{
        borderWidth: 2,
        borderRadius:"50%",
        borderColor: 'white',
        height: 50,
        width:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    flipBtn:{
        borderWidth: 2,
        borderRadius:"50%",
        borderColor: 'white',
        height: 40,
        width:40,
        backgroundColor: 'white'
    },
    footer:{
      paddingLeft:20,
      paddingRight:20,
      height:35,
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
  
  
    likeCnt:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:50
    }
  });
  
import { ScrollView, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import  Courses  from './components/CoursesScreen';
import LoginStack from './components/LoginStack';
import { Feed, CameraScreen } from './components/ClassFeed';


const Stack = createNativeStackNavigator()

const bg_color = '#ecf39e';
const color1 = '#90a955';
const color2 = '#4f772d';
const color3 = '#31572c';
const color4 = '#132a13';

export default function App(){
    return(
        
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'LoginStack'} component={LoginStack} options={{headerShown: false}}/>
                    <Stack.Screen name={'Courses'} component={Courses} options={{headerShown: false,rgestureEnabled:false}}/>
                    <Stack.Screen name={'Feed'} component={Feed} options={{headerShown: false}}/>
                    <Stack.Screen name={"Camera"} component={CameraScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: bg_color,
        alignItems:'center',
        justifyContent:'center',
    }
})
import {StartPage} from "./StartPage";
import {LoginPage} from "./LoginPage";
import {SignupPage} from "./SignupPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function LoginStack() {

    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'StartPage'} component={StartPage}/>
            <Stack.Screen name={'LoginPage'} component={LoginPage}/>
            <Stack.Screen name={'SignupPage'} component={SignupPage}/>
        </Stack.Navigator>
)
}
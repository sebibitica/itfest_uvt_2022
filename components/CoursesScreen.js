import { StatusBar } from "expo-status-bar";
import {useState} from "react"

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const bg_color = "#ecf39e";
const color1 = "#90a955";
const color2 = "#4f772d";
const color3 = "#31572c";
const color4 = "#132a13";

export function Spacer() {
  return <View style={{ width: 20, height: 30 }}></View>;
}



export function Card({
  numeCurs,
  numeProf,
  customIcon,
  intervalOra,
  ziSaptamana,
  navigation,
  classPost,
  setClassPost
}) {

  return (
    <View styles={{ width: 320, height: 170 }}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => {
          console.log(setClassPost)
          navigation.navigate("Feed",{
            name:numeCurs,
            classPost:classPost,
            setClassPost:setClassPost
          })
          }} style={styles.detaliiCursStyle}>
          <View styles={styles.customIcon}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: customIcon,
              }}
            ></Image>
          </View>
          <View style={styles.numeCurs_Prof}>
            <Text style={styles.numeCurs}>{numeCurs}</Text>
            <Text style={styles.numeProf}>{numeProf}</Text>
          </View>
          <View styles={styles.joinIcon}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2252/2252525.png",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.parteJos}>
          <View style={styles.zisapt}>
            <Text style={{ fontWeight: "500", fontSize: 15, color: "white" }}>
              {ziSaptamana}
            </Text>
          </View>
          <View style={styles.ora}>
            <Text style={{ fontWeight: "500", fontSize: 15, color: "white" }}>
              {intervalOra}
            </Text>
          </View>
        </View>
      </View>
      <Spacer />
    </View>
  );
}

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>PICK THE COURSE</Text>
    </View>
  );
}

export default function Courses({navigation}) {

  const[p1,setP1] = useState([])
  const[asd,setAsd1] = useState([])
  const[ac,setAc1] = useState([])
  const[eisa,setEisa1] = useState([])
  const[lc,setLc1] = useState([])
  const[fm,setFm1] = useState([])


  return (
    <View style={styles.tot}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Card
          numeCurs="Programare1"
          numeProf="Boncis"
          customIcon="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
          intervalOra="13:00 - 14:30"
          ziSaptamana="Joi"
          navigation={navigation}
          classPost={p1}
          setClassPost={setP1}
        />
        <Card
          numeCurs="ASD"
          numeProf="Zaharie"
          customIcon="https://cdn-icons-png.flaticon.com/512/2621/2621040.png"
          intervalOra="11:20 - 12:50"
          ziSaptamana="Joi"
          navigation={navigation}
          classPost={asd}
          setClassPost={setAsd1}
        />
        <Card
          numeCurs="Arhitectura Calculatoarelor"
          numeProf="Scai"
          customIcon="https://cdn-icons-png.flaticon.com/512/1508/1508874.png"
          intervalOra="16:20 - 17:50"
          ziSaptamana="Marti"
          navigation={navigation}
          classPost={ac}
          setClassPost={setAc1}
        />
        <Card
          numeCurs="EISA"
          numeProf="Scai"
          customIcon="https://cdn.iconscout.com/icon/premium/png-256-thumb/ethics-2854590-2376610.png"
          intervalOra="16:20 - 17:50"
          ziSaptamana="Luni"
          navigation={navigation}
          classPost={eisa}
          setClassPost={setEisa1}
        />
        <Card
          numeCurs="Logica Computationala"
          numeProf="Fortis"
          customIcon="https://cdn-icons-png.flaticon.com/512/6747/6747010.png"
          intervalOra="14:40 - 16:10"
          ziSaptamana="Marti"
          navigation={navigation}
          classPost={lc}
          setClassPost={setLc1}
        />
        <Card
          numeCurs="Fundamentele Matematicii"
          numeProf="Chis"
          customIcon="https://cdn-icons-png.flaticon.com/512/746/746960.png"
          intervalOra="8:00 - 9:30"
          ziSaptamana="Vineri"
          navigation={navigation}
          classPost={fm}
          setClassPost={setFm1}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tot: {
    flex: 1,
    backgroundColor: "#ecf39e",
  },
  scroll: {
    paddingTop: 30,
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: "#4f772d",
    borderRadius: 20,
    elevation: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  detaliiCursStyle: {
    flexDirection: "row",
    width: "90%",
    height: "50%",
    backgroundColor: "#90a955",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#4f772d",
    elevation: 20,
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingTop: 35,
  },
  numeCurs_Prof: {
    width: "60%",
    alignItems: "center",
  },
  numeCurs: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  numeProf: {
    fontSize: 15,
    fontWeight: "bold",
  },
  joinIcon: {
    width: "20%",
    alignItems: "center",
  },
  customIcon: {
    width: "20%",
    alignItems: "center",
  },
  parteJos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-between",
    width: "100%",
  },
  zisapt: {
    width: "50%",
    alignItems: "center",
  },
  ora: {
    width: "50%",
    alignItems: "center",
  },
});
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

const MainScreen = () => {
  const navigation = useNavigation()
  return (
    <View style = {styles.container}>
      <View style = {styles.box}>
        <Text style = {styles.header}>My Profile</Text>
      </View>
      <View style = {styles.body}>
      <View style = {styles.imgBox}>
        <Image
          source = {require("../assets/images/my_img.jpg")}
          style = {styles.image}
        />
      </View>
      <View style = {styles.detailsBox}>
        <View style = {styles.innerCont}>
          <Text style = {styles.normalText}>Name:</Text>
          <Text style = {styles.mainText}>Silas Idowu</Text>
        </View>
        <View style = {styles.innerCont}>
          <Text style = {styles.normalText}>Phone Number:</Text>
          <Text style = {styles.mainText}>+234 816 129 9594</Text>
        </View>
        <View style = {styles.innerCont}>
          <Text style = {styles.normalText}>Email Address:</Text>
          <Text style = {styles.mainText}>idowusilas2019@gmail.com</Text>
        </View>
        <View style = {styles.btnBox}>
          <Pressable 
            style = {styles.btn}
            onPress = {() => navigation.navigate("Web")}
          >
            <Text style = {styles.btnText}>Open Github</Text>
          </Pressable>
        </View>
      </View>
      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  box:{
    height: 200,
    width: "100%",
    backgroundColor: "#230023",
    paddingTop: 40
  },
  body: {
    marginTop: -100,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    width: "85%",
    borderWidth: 2,
    borderColor: "#ededed",
  },
  imgBox: {
    backgroundColor: "#230023",
    borderRadius: 80,
    padding: 3,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    
  },
  detailsBox: {
    gap: 20,
    width: "100%",
  },
  normalText: {
    fontSize: 12,
    marginBottom: 5,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  innerCont: {
    width: "100%",
    borderBottomWidth: 0.5,
    paddingBottom: 5
  },
  btnBox: {
    flexDirection: "row",
    width: "100%"
  },
  btn: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: "#230023",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
})
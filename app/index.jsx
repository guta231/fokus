import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import {useState} from "react";

const pomodoro = [
  {
    id: "fokus",
    initialValue: 25,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./short.png"),
    display: "Pausa curta",


  },
  {
    id: "long",
    initialValue: 15,
    image: require("./long.png"),
    display: "Pausa longa",
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);


  

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} style={styles.image}/>
      <View style={styles.action}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <Pressable key={p.id} style={timerType.id == p.id ? styles.contextButtonActive : null} onPress={() => setTimerType(p)}>
              <Text style={styles.contextButtonText}>{p.display}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"})}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins lucrativos. Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#021123",
      gap: 40,
  },
  image: {
    width: 300,
    height: 300,
  
  },
  action: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextButtonText: {
    padding: 8,
    fontSize: 12,
    color: "#fff",
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    textAlign: "center",

  },
  button: {
    backgroundColor: "#8872ff",
    padding: 8,
    borderRadius: 32,


  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,

  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  }

})
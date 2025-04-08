import { Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require("./pomodoro.png")} style={styles.image}/>
      <View style={styles.action}>

        <Text style={styles.timer}>25:00</Text>
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
    width: "90%",
    height: "45%",
  
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
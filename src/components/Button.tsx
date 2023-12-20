import React from "react";
import { 
    StyleSheet,
    Text, 
    TouchableOpacity
 } from "react-native"; 

export function Button({ onPress }) { //Esse "onPress é um atributo criado e passado pelo componente utilizado na Home. Seu valor é passado na Home.
    return (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A370F7",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20
      },
    
      buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold"
      }
})
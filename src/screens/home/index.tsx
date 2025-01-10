import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export function Home() {

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento:
      </Text>
      <Text style={styles.eventDate}>
        Segunda-Feira, 06 de Janeiro de 2025.
      </Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome do evento"
          placeholderTextColor="#555"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Adrian Lopes" onRemove={() => handleParticipantRemove("Adrian Lopes")}/>
      <Participant name="Cintia Avelar" onRemove={() => handleParticipantRemove("Cintia Avelar")}/>
    </View>
  );
}
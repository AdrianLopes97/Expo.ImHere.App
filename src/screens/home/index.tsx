import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export function Home() {

  const participants = ['Adrian Lopes', 'Cintia Avelar','Pedro Henrique','Isabel Luz', 'Eliel Silva','Tatiane Lopes','Matheus Henrique','Davi Luca','Lorenzo Gabriel'];

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant 
            key={index} 
            name={participant} 
            onRemove={() => handleParticipantRemove(participant)}/>
          ))
        }
      </ScrollView>
    </View>
  );
}
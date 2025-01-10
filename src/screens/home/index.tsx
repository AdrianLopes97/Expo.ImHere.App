import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export function Home() {

  const participants = ['Adrian Lopes', 'Cintia Avelar','Pedro Henrique','Isabel Luz', 'Eliel Silva','Tatiane Lopes','Matheus Henrique','Davi Luca','Lorenzo Gabriel'];

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado', `${name} foi removido com sucesso!`),
      },
    ]);
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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum participante cadastrado
          </Text>
        )}
      />
    </View>
  );
}
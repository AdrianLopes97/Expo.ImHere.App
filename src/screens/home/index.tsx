import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";
import dayjs from "dayjs";

export function Home() {

  const participants = ['Adrian Lopes', 'Cintia Avelar','Pedro Henrique','Isabel Luz', 'Eliel Silva','Tatiane Lopes','Matheus Henrique','Davi Luca','Lorenzo Gabriel'];

  function handleParticipantAdd() {
    Alert.alert('Adicionar participante', 'Deseja realmente adicionar o participante XXXX?', 
      [ 
        { 
          text: 'Cancelar',
          style: 'cancel' 
        }, 
        { 
          text: 'Adicionar', 
          onPress: () => Alert.alert('Adicionado', 'Participante adicionado com sucesso!') 
        } 
      ]);
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
        Oração para o 2025 do Grêmio:
      </Text>
      <Text style={styles.eventDate}>
        {dayjs().format('dddd, DD [de] MMMM [de] YYYY')}
      </Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome do participante"
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
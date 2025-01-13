import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";
import dayjs from "dayjs";
import { useState } from "react";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');

  function handleParticipantAdd() {

    if (!newParticipant) {
      return Alert.alert('Erro', 'Digite o nome do(a) participante para adicionar!');
    }

    if(participants.includes(newParticipant)) {
      return Alert.alert('Erro', 'Este participante já foi adicionado!');
    }

    Alert.alert('Adicionar participante', `Deseja realmente adicionar o(a) participante ${newParticipant}?`, 
      [ 
        { 
          text: 'Cancelar',
          style: 'cancel' 
        }, 
        { 
          text: 'Adicionar', 
          onPress: () => (
            setParticipants([...participants, newParticipant]),
            setNewParticipant(''),
            Alert.alert('Adicionado', 'Participante adicionado com sucesso!')
          )
        } 
      ]);
  }

  function handleParticipantRemove(name: string) {

    const participantIndex = participants.indexOf(name);

    if(participantIndex === -1) {
      return Alert.alert('Erro', 'Participante não encontrado!');
    }

    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => (
          participants.splice(participantIndex, 1),
          setParticipants([...participants]),
          Alert.alert('Deletado', `${name} foi removido com sucesso!`)
        ),
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
          onChangeText={setNewParticipant}
          value={newParticipant}
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
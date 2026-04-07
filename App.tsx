import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { initDB, insertEntry, getEntries } from './src/services/database';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [entries, setEntries] = useState<any[]>([]);
  const [note, setNote] = useState('');
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    initDB();
    load();
  }, []);

  const load = async () => {
    const data = await getEntries();
    setEntries(data);
  };

  const capture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    await insertEntry({ note, uri: photo.uri });
    setNote('');
    load();
  };

  if (!permission) return <Text>Loading...</Text>;
  if (!permission.granted) {
    return <Button title="Grant Camera" onPress={requestPermission} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }} />
      <TextInput
        placeholder="Notes (plates, stickers, meaning...)"
        value={note}
        onChangeText={setNote}
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Button title="Capture" onPress={capture} />

      <ScrollView style={{ flex: 1 }}>
        {entries.map((e, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <Image source={{ uri: e.uri }} style={{ height: 100 }} />
            <Text>{e.note}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

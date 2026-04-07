import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SUBJECTS } from '../constants/subjects';

type Props = {
  selected: string[];
  onToggle: (subject: string) => void;
};

export default function SubjectChips({ selected, onToggle }: Props) {
  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ fontWeight: '600', marginBottom: 6 }}>Subjects</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {SUBJECTS.map((subject) => {
            const active = selected.includes(subject);
            return (
              <Pressable
                key={subject}
                onPress={() => onToggle(subject)}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor: active ? '#2563eb' : '#cbd5e1',
                  backgroundColor: active ? '#dbeafe' : '#ffffff',
                  marginRight: 8,
                }}
              >
                <Text style={{ color: active ? '#1d4ed8' : '#334155' }}>{subject}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

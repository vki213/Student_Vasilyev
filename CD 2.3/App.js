import React from 'react'
import {Text, Button, View, Style, StyleSheet,SafeAreaView, Alert} from 'react-native'

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Обычная кнопка
      </Text>
      <Button
        title="Жмяк"
        onPress={() => Alert.alert('ЖМЯК')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Розовая кнопка
      </Text>
      <Button
        title="Жмяк"
        color="#f194ff"
        onPress={() => Alert.alert('ЖМЯК')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Нельзя жмякать
      </Text>
      <Button
        title="Меня нельзя жмякнуть"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Они на одной линии
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Кнопка слева"
          onPress={() => Alert.alert('Левая кнопка жмякнута')}
        />
        <Button
          title="Кнопка справа"
          onPress={() => Alert.alert('Правая кнопка жмякнута')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App
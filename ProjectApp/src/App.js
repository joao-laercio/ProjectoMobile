import React from 'react';

import {ImageBackground, StyleSheet, Button, View, SafeAreaView, Text, Alert,} from 'react-native';

const image = {uri: 'https://sm.ign.com/ign_br/news/p/playstatio/playstation-wrap-up-returns-with-your-2020-ps5-and-ps4-gamin_w54u.jpg'};

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <View>

      <Text style={styles.title}>
        The título e manipulador onPress são obrigatórios. Recomenda-se definir
        acessibilidadeLabel para ajudar a tornar seu aplicativo utilizável po.
      </Text>

      <Button
        title="START"
        onPress={() => Alert.alert('Botão simples pressionado')}
      />
    </View>

    </ImageBackground>
    
  </View>
    
    <View>
     
    </View>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: -32,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 50,
    fontSize: 20,
  },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
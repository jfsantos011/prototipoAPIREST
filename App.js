import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Produtos from './src/components/Prod';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }
  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      produtos: response.data
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.state.produtos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Produtos
                description={item.description}
                category={item.category}
                image={item.image}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

export default App;

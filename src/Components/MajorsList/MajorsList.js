import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import LawyersList from './LawyersList'
import { goBack, navigate } from '../../Services/NavigationServices'

export default class MajorsList extends React.Component {

  renderItem = ({ item, index }) => {
    var { id, name, lawyers } = item
    return (
      <View>
        <Text 
          style={styles.majorTitle}
          onPress={()=>navigate('LawyersScreen', { major: item })}
        >
          {name}
        </Text>
        <LawyersList lawyers={lawyers} />
      </View>
    )
  }

  _keyExtractor = (item, index) => String(index)

  renderMajors = (majors) => {
    return (
      <FlatList
        data={majors}           
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        scrollEnabled={true}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
        onEndReachedThreshold={0.2}
        style={styles.majorContainer}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMajors(this.props.majors)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  majorContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f6f6f6'
  },
  majorTitle: {
    marginLeft: 20,
    marginTop: 25,
    fontFamily: "Cairo-Black",
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#131314"
  },
});
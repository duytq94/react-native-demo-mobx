import React from "react";
import {observer} from "mobx-react";
import {computed, observable} from "mobx";
import {Text, TouchableOpacity, View} from "react-native";

@observer
export default class App extends React.Component {
  @observable boxVisible = true;

  @observable tax = 1.07;
  @observable price = 10;

  toggleBox = () => {
    this.boxVisible = !this.boxVisible;
  };

  @computed
  get total() {
    const total = this.price * this.tax;
    return parseFloat(total).toFixed(2);
  }

  doublePrice = () => {
    this.price = this.price * 2;
  };

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={this.toggleBox}>
          <Text>Toggle Box</Text>
        </TouchableOpacity>
        {this.boxVisible && <View style={styles.box}/>}
        <TouchableOpacity style={styles.button} onPress={this.doublePrice}><Text>Double Price</Text></TouchableOpacity>
        <Text>{this.total}</Text>
      </View>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
  },
  box: {
    margin: 10,
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
};
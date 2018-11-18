import React, { Component } from 'react';
import { 
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'; 
import Voice from 'react-native-voice';
import { 
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux'; 
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { 
  searchForRestaurant,
  clearSearchResult
} from './../../../actions/index';
import Styles from './../Styles';
/**
 * Defines the search bar component.
 * 
 * @class SearchBar
 * @extends {Component}
 */
class SearchBar extends Component { 
  /**
   * @constructor
   * @param {object} props Used for passing data to the search bar component.
   * @property {string} micColor Defines the color of the mic icon .
   * @property {string} onPressIndex Used for toggling the mic icon button.
   * @property {string} text Defines the text to be placed in the input text .
   * @property {string} end Defines when the voice search ends.
   * @property {string} started Defines when the voice search starts.
   * @property {string} result Defines the value of the voice search result.
   *   search result. 
   * 
   */
  constructor(props) {
    super(props);
    this.state = {
      micColor: '#000000',
      placeholderText: 'ابحث بالاسم او النوع او مكان المطعم',
      onPressIndex: 0, 
      text: '',
      end: '',
      started: '',
      result: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    this.startRecognizing.bind(this);
    this.stopRecognizing.bind(this);
  }  
  /**  
   * used to set the voice recognition start state.
   * 
   * @returns void
   */
  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }
  /**  
   * used to set the voice recognition end state.
   * 
   * @returns void
   */
  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
  }
  /**  
   * used to get voice recognition results.
   * 
   * @returns void
   */
  onSpeechResults(e) {
    this.setState({
      result: e.value,
    });
  }
  /**
   * Used to enable or disable the voice recognition
   * 
   * @returns void
   */
  onMicPress() {
    if (this.state.onPressIndex === 0) {
      this.setState({ onPressIndex: 1 });
      this.setState({ micColor: '#e30613' });
      this.startRecognizing();
      this.setState({ placeholderText: '...' });
    }
    if (this.state.onPressIndex === 1) {
      this.setState({ onPressIndex: 0 });
      this.setState({ micColor: '#000000' });
      this.stopRecognizing();
      this.setState({ placeholderText: 'ابحث بالاسم او النوع او مكان المطعم', });
      if (this.state.result[0]) {
        this.setState({ text: this.state.result[0] });
      } 
      if (!this.state.result[0]) {
        this.setState({ placeholderText: 'Please try again' });
        this.setState({ text: '' });
      } 
    }
  }
  /**
   * Used to navigate to the search srceen.
   * 
   * @param {string} text the text to be searched.
   */
  search(text) {
    this.props.clearSearchResult();
    if (text) {
      Actions.searchDishScreen(text);
    }
  }
  /**
   * start voice recognition
   * 
   * @async
   */
  async startRecognizing(e) {
    this.setState({
      started: '',
      results: [],
      end: ''
    });
    try {
      await Voice.start('en');
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * stop voice recognition
   * 
   * @async
   */
  async stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Used to render the search bar component
   * 
   * @returns {ReactElement} SearchBar component
   */
  render() {
    return (
      <View style={Styles.searchBar}>
        <TouchableOpacity 
          style={{ flex: 1 }} 
          onPress={() => this.onMicPress()}
        >
          <Icon
            name='mic'
            color={this.state.micColor}
            size={responsiveFontSize(4)}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.searchTextInput}
          placeholder={this.state.placeholderText}
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={(event) => this.search(event.nativeEvent.text)}
          value={this.state.text}
          underlineColorAndroid='#a5a4a4'
        />
        <TouchableOpacity 
          style={{ flex: 1 }} 
          onPress={() => this.search(this.state.text)}
        >
          <Icon
            name='search'
            color='#000000'
            size={responsiveFontSize(4.5)}
          />
        </TouchableOpacity>  
      </View>
    ); 
  }
}
export default connect(null, { searchForRestaurant, clearSearchResult })(SearchBar);

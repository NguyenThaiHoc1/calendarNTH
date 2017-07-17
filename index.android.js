import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var items = [
        {
            'day': '2017-07-19',
            items: [{
              'Eventdescription' : 'Google I/O',
              'Time' : '10:45:00'
            }]
        },
        {
            'day': '2017-07-20',
            items: [{
              'Eventdescription' : 'Apple development',
              'Time' : '9:45:00'
            }]
        },
        {
            'day': '2017-07-20',
            items: [{
              'Eventdescription' : 'MS for improve',
              'Time' : '12:00:00'
            }]
        }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
      events: ''
    };
  }

  checkAccpect = () => {
      alert("hellos");
  }



  render() {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2017-07-19','2017-07-20', '2017-07-21', '2017-07-22']}
          events={[
                    {
                      date: '2017-07-19', hasEventCircle: {backgroundColor: 'powderblue'}
                    }
                  ]}
          scrollEnabled
          showControls
          showEventIndicators
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={
              (date) => {
                  var Stringevents = '';
                  items.forEach((dayCounter) => {
                      var dayContent = dayCounter;
                      if( moment(dayContent.day).format('YYYY MM DD') === moment(date).format('YYYY MM DD')) {
                          //console.warn(dayContent.items[0].Eventdescription);
                          Stringevents = Stringevents + '\n' + dayContent.items[0].Eventdescription;
                          this.setState({ events: Stringevents })
                      }
                  })
                  //this.setState({ selectedDate: date })
              }
          }
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
        />
        <Text>Selected Date: {this.state.events}</Text>

      </View> // (date) => this.setState({ selectedDate: date })
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => App);

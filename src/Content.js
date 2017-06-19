import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { List, ListItem, Icon, Button } from 'react-native-elements';
import Tabs from 'react-native-tabs';

export class ContentScreen extends Component {
state={
  page1Display: 'flex',
  page2Display: 'none',
  selectedPage: '1',

}


onSwitchPage() {
  if(this.state.page1Display === 'flex'){ 
    this.setState({ 
      page1Display: 'none',
      page2Display: 'flex', 
      selectedPage: '2',
    });

  }else if (this.state.page1Display === 'none'){
    this.setState({ 
      page1Display: 'flex',
      page2Display: 'none', 
      selectedPage: '1',
    });
  }

}

render() {
  const { container} = styles;
  
  return (
    
      <View style={container}>        
        <Tabs selected={this.state.selectedPage} 
              style={{backgroundColor: '#a6e0d7', position: 'absolute', top: 0, 
                      shadowColor: 'gray', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.3 }} 
              onSelect={ () => this.onSwitchPage() }
              selectedStyle={{ color: '#37bc9b' }}
        >
          <Text name={1} style={{ color: '#37bc9b75'}}>課程資訊</Text>
          <Text name={2} style={{ color: '#37bc9b75'}}>待辦事項</Text>
        </Tabs>
          <View style={{ top: 55, display: this.state.page1Display }}>
            <List>
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.teacher} 老師`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_teacher.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.room} 教室`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_room.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.credit} 學分`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_credit.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`每週${this.props.day} ${this.props.startTime}～${this.props.endTime}`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_time.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title="備註"
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_note.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
          </List>
        </View>
        <View style={{ top: 50 ,display: this.state.page2Display }}>
          <View style={{ flexDirection: 'row', top: 19, marginBottom: 2 }}>
            <Text style={{ color: '#999999', left: 10, fontSize: 13 }}>已完成</Text>
            <Text style={{ color: '#999999', left: 23, fontSize: 13 }}>項目／時間</Text>
            <Text style={{ color: '#999999', left: 225, fontSize: 13 }}>提醒</Text>
          </View>
          <List>
            <ListItem
              containerStyle={{ height: 65, justifyContent: 'center' }}
              title="期末考"
              titleContainerStyle={{ paddingLeft: 10 }}
              leftIcon={{ name: 'check-box-outline-blank',
                          style: ({ color: '#37bc9b' })
                       }}
              rightIcon={{ name: 'notifications',
                           style: ({ paddingRight: 5 }),
                           color: 'red', 
                        }}
              subtitle='2017/06/15  15:30'
              subtitleStyle={{ paddingLeft: 10 }}
            />
            <ListItem
              containerStyle={{ height: 65, justifyContent: 'center' }}
              title="期中考"
              titleContainerStyle={{ paddingLeft: 10 }}
              leftIcon={{ name: 'check-box',
                          style: ({ color: '#37bc9b' })
                       }}
              rightIcon={{ name: 'notifications-none',
                           style: ({ paddingRight: 5 })
                        }}
              subtitle='2017/04/24  15:30'
              subtitleStyle={{ paddingLeft: 10 }}
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              hideChevron
              title="新增待辦事項"
              titleStyle={{ textAlign: 'center', color: '#0084ff' }}
              leftIcon={{ name: 'add', color: '#545454', style: { left: 105, color: '#0084ff' } }}

            />
          </List>
        </View>
      </View>
      
  );
}
}


const styles = StyleSheet.create({
  container: {
      position: 'relative',
      flex: 1,
  },
  height: {
    
  },
});
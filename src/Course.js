import React from 'react';
// import { TabNavigator, StackNavigator } from 'react-navigation';
import { ContentScreen } from './Content';
import { TabRouter } from './Content';
import Tabs from 'react-native-tabs';

const CourseScreen = (props) => {
    const {
      name,
      description,
      teacher,
      room,
      day,
      startTime,
      endTime,
      credit,
    } = props.navigation.state.params;
    return(
      <ContentScreen 
        name={name}
        description={description}
        teacher={teacher}
        credit={credit}
        room={room}
        day={day}
        startTime={startTime}
        endTime={endTime}
      />
    )
};

export default CourseScreen;
import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import TimeLine from '../Common/TimeLine';

class About extends Component{
  render() {
    return(
      <div>
        <Header
          title= "Welcome To My Website!"
          subtitle="IT'S NICE TO MEET YOU"
          showButton={false}
          image={image}
        />
        <TimeLine />
      </div>
      )
  }
}


export default About;

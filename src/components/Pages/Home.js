import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import TimeLine from '../Common/TimeLine';

class Home extends Component {
  render(){
    return(
      <div>
        <Header
          title= "Welcome To My Website!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
         />

        <Services />
        <Portfolio />
        <TimeLine />
      </div>
    )
  }
}

export default Home;

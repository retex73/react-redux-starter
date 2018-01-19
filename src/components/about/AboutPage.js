import React from 'react';
import AboutPara from './AboutPara';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, react Router and a variety of other helpful libraries.</p>
        <AboutPara name={'Peter'}/>
        <AboutPara/>
      </div>
    );
  }
}

export default AboutPage;

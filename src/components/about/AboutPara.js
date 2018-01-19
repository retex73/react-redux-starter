import React from 'react';

class AboutPara extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    return (
      <div>
        <p>This is some additional info about me {this.state.name}</p>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

AboutPara.defaultProps = {
  name: 'Paul'
};

export default AboutPara;

import React from "react";

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        App
      </div>
    );
  }
}

export default App;

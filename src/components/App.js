import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i onClick={() => this.onLanguageChange('english')} className="flag us" />
          <i onClick={() => this.onLanguageChange('polish')} className="flag pl" />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;

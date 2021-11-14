import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/SearchField/search-Field.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      string:"Naruto",
      monsters : [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then( users => this.setState({ monsters : users}))
  }
  onChangeHandler = e=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
         <h1>Monsters Rolodex</h1>
         <SearchBox 
         placeholder="search a monster"
         changeHandler = {this.onChangeHandler}
         />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }

}

export default App;

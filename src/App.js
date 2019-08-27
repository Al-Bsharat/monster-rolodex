import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        };
    };

    async componentDidMount() {
        let objectSource = await fetch('https://jsonplaceholder.typicode.com/users');
        let monsters = await objectSource.json();
        this.setState({monsters: monsters});
    }

    render() {
        const {monsters, searchField} = this.state; // Destructuring.
        const filteredMonsters = monsters
            .filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monster'
                    handelChange={e => this.setState({searchField: e.target.value})}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;

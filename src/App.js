import React from 'react'
import './App.css'
import ListItem from './components/ListItem'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      items: [],

      currentItem: {
        text: '',
        key: ''
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  handleInput(e) {

    this.setState({

      currentItem: {
        text: e.target.value,
        key: Date.now()
      }

    })
  }

  addItem(e) {

    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== null || newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="app">

        <header>

          <form className="to-do-form">

            <input type="text" placeholder="Enter your todo"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />

            <button type="button" onClick={this.addItem}>Add</button>
          </form>

        </header>

        <ListItem items={this.state.items}
          deleteItem={this.deleteItem} />

      </div>
    );
  }
}

export default App;


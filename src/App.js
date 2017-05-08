import React, { Component } from 'react';
import { CardsDisplay } from './CardsDisplay';
import { Comparison } from './Comparison';
import { Controls } from './Controls';
import DistrictRepository from './helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

const renderedData = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: renderedData.data,
      selectedCards: []
    }
  }

  handleChange(userInput) {
    const sortedData = renderedData.findAllMatches(userInput)
    this.setState({ data: sortedData });
  }

  handleSelect(input) {
    const object = renderedData.findByName(input);
    let temp = this.state.selectedCards;
    temp.push(object);

      if(temp.length < 3) {
      this.setState({
        selectedCards: temp,
      })
      event.target.classList.toggle('selected');
    }
  }

  compareCards(district1, district2) {
    return renderedData.compareDistrictAverages(district1, district2);
  }

  resetState() {
    this.setState({
      selectedCards: []
    })
  }

  render() {
    return (
      <main>
        <section className='header-container'>
          <h2>Welcome To Headcount 2.0</h2>
          <Controls onChange={this.handleChange.bind(this)}
                    resetComparison={this.resetState.bind(this)} />
        </section>
          <Comparison compareCards={this.compareCards.bind(this)}
                      selectedCards={this.state.selectedCards} />

        <CardsDisplay cards={this.state.data}
                      selectedCards={ this.state.selectedCards }
                      onClick={ this.handleSelect.bind(this) } />
      </main>

    );
  }
}

export default App;

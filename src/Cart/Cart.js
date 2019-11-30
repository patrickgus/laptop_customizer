import React from 'react'
import Summary from '../Summary/Summary';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

export default class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h3>Your cart</h3>
          <Summary selected={this.props.selected} />
          <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

import React from 'react';
import './FeatureOption.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class FeatureOption extends React.Component {
  render() {
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input 
          type="radio"
          id={this.props.itemHash}
          className={this.props.featureClass}
          name={this.props.featureName}
          onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          { this.props.item.name } ({USCurrencyFormat.format(this.props.item.cost) })
        </label>
      </div>
    )
  }
}

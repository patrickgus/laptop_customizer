import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class Summary extends React.Component {
  render () {
    return (
      Object.keys(this.props.selected).map((feature, index) => {
        const featureHash = feature + '-' + index;
        const selectedOption = this.props.selected[feature];
        return(
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature}</div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              { USCurrencyFormat.format(selectedOption.cost) }
            </div>
          </div>
        ); 
      })
    );
  }
}

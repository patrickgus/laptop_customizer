import React from 'react'
import FeatureItem from '../FeatureItem/FeatureItem'
import './Features.css';

export default class Features extends React.Component {
  render() {
    const { selected } = this.props;
    const features = Object.keys(this.props.features).map((key, index) => {
      const featureHash = key + '-' + index;
      return (
          <FeatureItem 
            featureHash={featureHash}
            name={key} 
            key={key} 
            options={this.props.features[key]} 
            selected={selected}
            onSelect={this.props.onSelect}
          />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

import React from 'react'
import FeatureItem from '../FeatureItem/FeatureItem'
import './FeatureList.css';

export default class Features extends Component {
  render() {
    const { selected } = this.props;
    const features = Object.keys(this.props.features).map(key => {
      return (
          <FeatureItem 
            name={key} 
            key={key} 
            options={this.props.features[key]} 
            selected={selected}
            onSelect={this.props.onSelect}
          />
      );
    });

    return (
      <section className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </section>
    );
  }
}

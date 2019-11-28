import React from 'react';
import slugify from 'slugify';
import FeatureOption from '../FeatureOption/FeatureOption';
import './FeatureItem.css';

export default class FeatureItem extends React.Component {
  render() {
    const options = this.props.options.map((item, index) => {
      const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureOption 
          featureClass={featureClass}
          key={index} 
          onSelect={this.props.onSelect}
          item={item}
          featureName={slugify(this.props.name)}
          itemHash={itemHash}
        />
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

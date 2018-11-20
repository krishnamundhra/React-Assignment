import React from 'react';
import './section-separator.scss';

const classes = ['normal', 'light-dark', 'light', 'dark'];

const Item = props => {
  return <div className={`ssss ${props.class}`} />;
};

const SectionSeparator = props => {
  const repeatation = 13;
  const items = [];
  let index = -1;
  for (let i = 0; i < repeatation; i++) {
    index = index >= 3 ? 0 : index + 1;
    items.push(<Item key={i} class={classes[index]} />);
  }
  return <div className="row">{items}</div>;
};

export default SectionSeparator;

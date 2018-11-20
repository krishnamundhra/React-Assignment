import React from 'react';
import Logo from '../logo/Logo';
import './header.scss';

const HeaderItem = props => {
  let classes = ['item', 'btn', 'transparent', 'w-auto'];
  if (props.selected) classes.push('selected');
  return (
    <button onClick={props.onClick} className={classes.join(' ')}>
      {props.text}
    </button>
  );
};

class Header extends React.Component {
  state = {
    selectedItemIndex: 0
  };

  handleMenuItemClick = index => {
    if (this.state.selectedItemIndex !== index) {
      this.setState({ selectedItemIndex: index });
    }
  };

  render() {
    let { opacity, isMouseOver, onMouseEnter, onMouseLeave } = this.props;
    if (isMouseOver) {
      opacity = 1;
    }
    let display = opacity === 0 ? 'none' : 'initial';

    const items = [
      'home',
      'about us',
      'jobs',
      'clients',
      'employers',
      'contact us'
    ];
    const headerItems = items.map((item, i) => (
      <li key={i}>
        <HeaderItem
          selected={this.state.selectedItemIndex === i}
          text={item}
          onClick={() => this.handleMenuItemClick(i)}
        />
      </li>
    ));

    return (
      <header
        style={{ display: display, opacity: opacity }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="row">
          <Logo />
          <nav>
            <ul className="row">{headerItems}</ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

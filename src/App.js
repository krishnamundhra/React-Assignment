import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import SectionSeparator from './components/section-separator/SectionSeparator';
import Footer from './components/footer/Footer';
import Modal from './modals/Modal';

const FirstSection = props => {
  return (
    <React.Fragment>
      <section className="first">
        <div className="content">
          <p className="text-large">
            <i>I'm looking for..</i>
          </p>
          <form className="row mt-2">
            <div className="col-8">
              <div className="job-search">
                <input type="text" placeholder="Enter a Job Description" />
              </div>
              <div className="row mt-2">
                <div className="type col-8">
                  <label className="mr-2">
                    <input
                      className="mr-1 transparent w-auto"
                      type="checkbox"
                    />
                    Full time
                  </label>
                  <label>
                    <input
                      className="mr-1 transparent w-auto"
                      type="checkbox"
                    />
                    Part time / Casual / Freelance
                  </label>
                </div>
                <select className="col-4">
                  <option value="">Select your location</option>
                </select>
              </div>
            </div>
            <div className="col-2 ">
              <button type="submit" className="btn btn-primary">
                <i className="material-icons">search</i>Search
              </button>
            </div>
          </form>
          <div className="align-center mt-4">
            <button
              onClick={props.onRegisterClick}
              className="btn btn-primary w-auto"
            >
              Register
            </button>
          </div>
        </div>
      </section>
      <SectionSeparator />
    </React.Fragment>
  );
};

const SecondSection = props => {
  return (
    <React.Fragment>
      <section className="second">
        <div className="content align-center">
          <div className="light-dark-font text-medium">
            <em>We're leaders in</em>
          </div>
          <h3 className="mt-1 dark-font text-large">
            Creative Digital Recruitment
          </h3>
          <p className="w-50 text-normal light-dark-font font-medium-dark">
            Based in Surry Hills, the creative hub of Sydney we are surrounded
            by creativity and that reflects on the type of jobs we recruit for.
          </p>
          <button className="btn bordered p-1-2 mt-4 w-auto uppercase font-medium-dark">
            find out more about us!
          </button>
        </div>
      </section>
      <SectionSeparator />
    </React.Fragment>
  );
};

const ThirdSection = props => {
  return (
    <React.Fragment>
      <section className="third">
        <div className="content align-center">
          <div>Subscribe to our Job Seeker Mailing List</div>
          <div className="bordered inline-block p-default mt-2">
            <input
              type="text"
              className="w-auto transparent"
              style={{ width: 'auto' }}
              placeholder="Enter your Email Address"
            />
            <i className="material-icons">mail</i>
          </div>
        </div>
      </section>
      <SectionSeparator />
    </React.Fragment>
  );
};

class App extends Component {
  state = {
    headerOpacity: 1,
    isMouseOver: false,
    isModalOpen: false
  };
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    const opacity = (300 - scrollY) / 300;
    this.setState({ headerOpacity: opacity });
  };

  onHover(isOnTheElement) {
    let isMouseOver = null;
    if (isOnTheElement) {
      isMouseOver = true;
    } else {
      isMouseOver = false;
    }
    this.setState({ isMouseOver: isMouseOver });
  }

  onRegisterClick = () => {
    // Open Modal
    if (!this.state.isModalOpen) {
      this.setState({ isModalOpen: true });
    }
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="container">
        <Header
          opacity={this.state.headerOpacity}
          isMouseOver={this.state.isMouseOver}
          onMouseEnter={() => this.onHover(true)}
          onMouseLeave={() => this.onHover(false)}
        />
        <FirstSection onRegisterClick={this.onRegisterClick} />
        <SecondSection />
        <ThirdSection />
        <Footer />

        <Modal
          title="Registration"
          isOpen={this.state.isModalOpen}
          modalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

export default App;

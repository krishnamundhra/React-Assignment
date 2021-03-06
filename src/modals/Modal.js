import React from 'react';
import './modal.scss';

class Modal extends React.Component {
  state = {
    age: 1
  };

  handleAgeChange = event => {
    const newAge = event.target.value;
    this.setState({ age: newAge });
  };

  modalClose = e => {
    e.preventDefault();
    this.props.modalClose();
  };

  render() {
    const open = this.props.isOpen ? 'open' : '';
    if (this.props.isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return (
      <React.Fragment>
        <div className={`modal ${open}`}>
          <div className="modal-header row v-center p-1-2">
            <div className="modal-title text-normal">{this.props.title}</div>
            <div className="modal-close" onClick={this.modalClose}>
              <svg viewBox="0 0 212.982 212.982" width="15px">
                <g id="Close">
                  <path
                    style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
                    d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="modal-body p-2">
            <div className="row">
              <div className="col-4">
                <button className="btn link">
                  <div className="profile">
                    <svg viewBox="0 0 58 58">
                      <path
                        style={{ fill: '#7383BF' }}
                        d="M53.566,45.283l-9.552-4.776C42.78,39.89,42,38.628,42,37.248V33.5
	c0.268-0.305,0.576-0.698,0.904-1.162c1.302-1.838,2.286-3.861,2.969-5.984C47.098,25.977,48,24.845,48,23.5v-4
	c0-0.88-0.391-1.667-1-2.217V11.5c0,0,1.187-9-11-9c-12.188,0-11,9-11,9v5.783c-0.609,0.55-1,1.337-1,2.217v4
	c0,1.054,0.554,1.981,1.383,2.517C26.382,30.369,29,33.5,29,33.5v3.655c0,1.333-0.728,2.56-1.899,3.198L18.18,45.22
	C15.603,46.625,14,49.326,14,52.261V55.5h44v-3.043C58,49.419,56.283,46.642,53.566,45.283z"
                      />
                      <path
                        style={{ fill: '#556080' }}
                        d="M18.18,45.22l5.946-3.243c-0.034-0.033-0.005-0.043,0.065-0.036l2.91-1.587
	C28.272,39.715,29,38.489,29,37.155V33.5c0,0-1.062-1.275-2.092-3.323h0c0-0.001-0.001-0.002-0.001-0.003
	c-0.135-0.268-0.268-0.551-0.399-0.844c-0.018-0.041-0.036-0.08-0.054-0.121c-0.133-0.303-0.263-0.616-0.386-0.944
	c-0.008-0.021-0.015-0.044-0.023-0.065c-0.108-0.29-0.209-0.589-0.306-0.896c-0.026-0.084-0.052-0.167-0.077-0.251
	c-0.101-0.338-0.196-0.682-0.278-1.038C24.554,25.481,24,24.554,24,23.5v-4c0-0.88,0.391-1.667,1-2.217v-5.648
	C23.587,10.539,21.397,9.5,18,9.5c-9.563,0-10,8-10,8v4.995c-0.526,0.475-1,1.154-1,1.914v3.455c0,0.911,0.479,1.711,1.194,2.174
	c0.863,3.758,3.76,6.463,3.76,6.463v3.157c0,1.151-0.629,2.211-1.64,2.762L3.61,46.622C1.385,47.836,0,50.168,0,52.703V55.5h14
	v-3.239C14,49.326,15.603,46.625,18.18,45.22z"
                      />
                    </svg>
                    upload your photo
                  </div>
                </button>
              </div>
              <div className="col-8">
                <form className="form">
                  <div className="form-group row">
                    <input
                      type="text"
                      className="mr-1 input-bordered"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      className="ml-1 input-bordered"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="input-bordered"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="input-bordered"
                      placeholder="0000000000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="row v-center">
                      Age
                      <span className="disabled ml-1 mr-1">
                        {this.state.age}
                      </span>
                      <input
                        type="range"
                        min="1"
                        max="110"
                        className="transparent"
                        value={this.state.age}
                        onChange={this.handleAgeChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <select className="input-bordered">
                      <option value="">State</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select className="input-bordered">
                      <option value="">Country</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="input-bordered"
                      placeholder="Address"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="input-bordered"
                      placeholder="Tags"
                    />
                  </div>
                  {/* TAGS */}
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        className="transparent w-auto mr-1"
                      />
                      subscribe to newsletter
                    </label>
                  </div>

                  <div className="form-group">
                    <div className="row flex-right">
                      <button className="btn w-auto" onClick={this.modalClose}>
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary w-auto ml-1"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal-background ${open}`}
          onClick={this.props.modalClose}
        />
      </React.Fragment>
    );
  }
}

export default Modal;

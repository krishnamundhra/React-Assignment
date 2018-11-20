import React from 'react';
import './footer.scss';

const Footer = props => {
  return (
    <React.Fragment>
      <footer>
        <div className="mailing">
          <button className="p-0 w-auto transparent dark-font">
            <i className="material-icons accent-color mr-1">mail</i>
            <strong>hello@twobytes.com.au</strong>
          </button>
        </div>
        <div className="row mt-2">
          <p className="col-8">
            Copyright &copy; 2018 Two Bytes Consulting.
            <strong> Terms & Policies.</strong>
          </p>
          <div className="col-4 row">
            <div>
              <a
                href="https://twitter.com/intent/tweet?screen_name=SapientIndia&ref_src=twsrc%5Etfw"
                className="twitter-mention-button"
                data-show-count="false"
              >
                Tweet to @SapientIndia
              </a>
            </div>

            <div
              className="fb-like"
              data-href="https://www.facebook.com/SapientIndia/"
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-show-faces="false"
              data-share="false"
            />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

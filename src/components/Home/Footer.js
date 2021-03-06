import React from 'react';
// import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-position">
          <div
            className="ui stackable three column grid row"
            style={{ marginRight: 0 }}
          >
            <div
              className="column col-lg-6 col-md-4 col-sm-12 col-xs-12"
              style={{ left: 120 }}
            >
              <h3 className="footer-title" style={{ left: 0 }}>
                BKU BlockChain Labs
              </h3>
              <p>
                Copyright
                <i className="fa fa-copyright" />
                2017. All right reserved.
              </p>
              <p>
                <i className="fa fa-home" /> Địa chỉ: TpHCM
              </p>
            </div>

            <div
              className="column col-lg-3 col-md-4 col-sm-12 col-xs-12"
              style={{ left: '-100px' }}
            >
              <h3 className="footer-title">Support</h3>
              <p>
                <i className="fa fa-envelope" /> Email: thuthaocse@gmail.com
              </p>

              <p>
                <i className="fa fa-mobile" /> Số điện thoại: 0342788099
              </p>
            </div>

            <div className="column col-lg-2 col-md-4 col-sm-12 col-xs-12 contact">
              <h3 className="footer-title">Contact</h3>
              <span className="">
                <i className="fa fa-facebook" />
              </span>
              <span>
                <i className="fa fa-twitter" />
              </span>
              <span>
                <i className="fa fa-linkedin" />
              </span>
              <span>
                <i className="fa fa-google-plus " />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

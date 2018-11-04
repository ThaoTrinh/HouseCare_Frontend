import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      <div className="footer-position">
        <div className="ui stackable three column grid row" style={{marginRight: 0}}>
          <div className="column col-lg-6 col-md-4 col-sm-12 col-xs-12" style={{left: 150}}>
            <h3 className="footer-title">BKU BlockChain Labs</h3>
            
            <p>Copyright
              <i className="fa fa-copyright"></i>
              2017. All right reserved.
            </p>
            <p><i className="fa fa-envelope"></i> Email: thuthaocse@gmail.com</p>
            <p><i className="fa fa-home"></i> Địa chỉ: TpHCM</p>
            <p><i className="fa fa-mobile"></i> Số điện thoại: 0342788099</p>
          </div>

          <div className="column col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <h3 className="footer-title">Support</h3>
            <p><i className="fa fa-info"></i><Link to="/">Điều khoản sử dụng</Link></p>
            <p><i className="fa fa-key"></i><Link to="/">Chính sách bảo mật</Link></p>
            <p><i className="fa fa-warning"></i><Link to="/feedback">Feedback</Link></p>
          </div>

          <div className="column col-lg-2 col-md-4 col-sm-12 col-xs-12 contact">
            <h3 className="footer-title">Contact</h3>
            <span className="">
                <i className="fa fa-facebook"></i>
              </span>
              <span >
                <i className="fa fa-twitter"></i>
              </span>
              <span >
                <i className="fa fa-linkedin"></i>
              </span>
              <span >
                <i className="fa fa-google-plus "></i>
              </span>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer
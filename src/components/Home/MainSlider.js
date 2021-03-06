import React from 'react';
import { Carousel } from 'element-react';
import 'element-theme-default';

require('styles/App.css');

export default class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Slider: [
        {
          image: '/logo/slider3.png',
        },
        {
          image: '/logo/slider5.png',
        },
      ],
    };
  }
  render() {
    return (
      <div className="demo-3 medium">
        <Carousel height="500px" weight="1300px">
          {this.state.Slider.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt=""
                  style={{ weight: 1000, height: 500 }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

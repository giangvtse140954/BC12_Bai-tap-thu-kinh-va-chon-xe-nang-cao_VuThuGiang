import React, { Component } from 'react';
import ThreeSixty from 'react-360-view';
import list from './data/arrayFeatures.json';

export default class CarsCustomizing extends Component {
  state = {
    color: 'black',
    wheel: 1,
    car: list[0],
  };
  handleChangeColor = (color, index) => {
    this.setState({ color, car: list[index] });
  };
  handleChangeWheel = (wheel) => {
    this.setState({ wheel });
  };
  render() {
    const { color, wheel, car } = this.state;
    const url = [
      './images/images-black/images-black-1',
      './images/images-steel/images-steel-1',
      './images/images-silver/images-silver-1',
      './images/images-red/images-red-1',

      './images/images-black/images-black-2',
      './images/images-steel/images-steel-2',
      './images/images-silver/images-silver-2',
      './images/images-red/images-red-2',

      './images/images-black/images-black-3',
      './images/images-steel/images-steel-3',
      './images/images-silver/images-silver-3',
      './images/images-red/images-red-3',
    ];
    return (
      <div className='container-fluid mt-4'>
        <h1
          style={{ backgroundColor: '#00000050' }}
          className='text-center py-4'
        >
          CUSTOMIZE YOUR DREAM CAR
        </h1>
        <div className='row'>
          <div className='col-7'>
            {url.map((item, i) => {
              if (
                item.charAt(item.length - 1) == wheel &&
                item.includes(color)
              ) {
                return (
                  <ThreeSixty
                    key={i}
                    amount={8}
                    imagePath={item}
                    fileName='civic-{index}.jpg'
                  />
                );
              }
              return '';
            })}
            <div className='card'>
              <div className='card-header'>Description</div>
              <table class='table'>
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>{car.color}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{car.price}</td>
                  </tr>
                  <tr>
                    <td>Engine Type</td>
                    <td>{car.type}</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>{car.displacement}</td>
                  </tr>
                  <tr>
                    <td>Horsepower (SAE net)</td>
                    <td>{car.horsepower}</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>{car.torque}</td>
                  </tr>
                  <tr>
                    <td>Redline</td>
                    <td>{car.redline}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-5'>
            <div className='card'>
              <div className='card-header'>Exterior Color</div>
              <ul className='list-group list-group-flush'>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeColor('black', 0)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-black.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Crystal Black
                    </div>
                  </div>
                </li>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeColor('steel', 1)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-steel.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Modern Steel
                    </div>
                  </div>
                </li>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeColor('silver', 2)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-silver.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Crystal Silver
                    </div>
                  </div>
                </li>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeColor('red', 3)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-red.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Rallye Red
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* wheel */}
            <div className='card'>
              <div className='card-header'>Wheels</div>
              <ul className='list-group list-group-flush'>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeWheel(1)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-wheel-1.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Wheel 1
                    </div>
                  </div>
                </li>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeWheel(2)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-wheel-2.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Wheel 2
                    </div>
                  </div>
                </li>
                <li
                  className='list-group-item'
                  onClick={() => this.handleChangeWheel(3)}
                >
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        src='../images/icons/icon-wheel-3.jpg'
                        width='60px'
                        alt=''
                      />
                    </div>
                    <div className='col-10 d-flex align-items-center'>
                      Wheel 3
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

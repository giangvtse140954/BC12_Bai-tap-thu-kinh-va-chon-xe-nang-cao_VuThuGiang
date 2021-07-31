import React, { useState } from 'react';
import glassesList from './dataGlasses.json';

export default function GlassesTryingOn() {
  const [currentGlass, setCurrentGlass] = useState({});
  const changeGlass = (glass) => {
    setCurrentGlass({ ...glass });
  };
  return (
    <div>
      <h1 style={{ backgroundColor: '#00000050' }} className='text-center py-4'>
        TRY GLASSES APP ONLINE
      </h1>
      <div className='container'>
        <div className='d-flex justify-content-around'>
          <div className='model' style={{ width: '300px' }}>
            <div className='cover' style={{ position: 'relative' }}>
              <img
                src='./glassesImage/model.jpg'
                alt='v1'
                style={{ width: '100%' }}
              />
              {currentGlass.url !== undefined ? (
                <img
                  src={currentGlass.url}
                  alt=''
                  className='glass'
                  style={{
                    position: 'absolute',
                    width: '160px',
                    left: '50%',
                    top: '25%',
                    transform: 'translate(-50%)',
                  }}
                />
              ) : (
                ''
              )}
              <div
                className='overlay'
                style={{
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: '#fbc56167',
                }}
              >
                <h4 style={{ color: 'purple' }}>{currentGlass.name}</h4>
                <p style={{ color: 'white' }}>{currentGlass.desc}</p>
              </div>
            </div>
          </div>
          <div className='model' style={{ width: '300px' }}>
            <div className='cover' style={{ position: 'relative' }}>
              <img
                src='./glassesImage/model.jpg'
                alt='v1'
                style={{ width: '100%' }}
              />
              {currentGlass.url !== undefined ? (
                <img
                  src={currentGlass.url}
                  alt=''
                  className='glass'
                  style={{
                    position: 'absolute',
                    width: '160px',
                    left: '50%',
                    top: '25%',
                    transform: 'translate(-50%)',
                  }}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          {glassesList.map((glass) => {
            return (
              <div
                key={glass.id}
                className='col-2 m-2'
                style={{ border: '1px solid #333', cursor: 'pointer' }}
                onClick={() => {
                  changeGlass(glass);
                }}
              >
                <img src={glass.url} alt='glass' style={{ width: '100%' }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

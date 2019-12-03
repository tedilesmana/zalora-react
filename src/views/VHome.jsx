import React, { Component } from 'react';
import HeadContent from '../component/home/HeadContent';
import Event from '../component/home/Event';
import NewProduk from '../component/home/NewProduk';
import Brand from '../component/home/Brand';

class VHome extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12"> 
          	<HeadContent />
            <div className="mb-5 pb-5">
          	 <Event />
            </div>
            <div className="mt-5 pt-5">
          	 <Brand />
            </div>
          	<NewProduk />
          </div>
        </div>
      </div>
    );
  }
}

export default VHome;
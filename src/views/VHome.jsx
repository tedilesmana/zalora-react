import React, { Component } from 'react';
import HeadContent from '../component/home/HeadContent';
import Event from '../component/home/Event';
import NewProduk from '../component/home/NewProduk';
import Brand from '../component/home/Brand';

class VHome extends Component {

  render() {
    return (
      <div className="p-5">
      	<HeadContent />
      	<Event />
      	<Brand />
      	<NewProduk />
      </div>
    );
  }
}

export default VHome;
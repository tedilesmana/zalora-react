import React, { Component } from 'react';
import HeadContent from '../component/home/HeadContent';
import Event from '../component/home/Event';
import NewProduk from '../component/home/NewProduk';
import Brand from '../component/home/Brand';

class VHome extends Component {

  render() {
    return (
      <div>
      	<HeadContent />
      	<Event />
      	<Brand />
      	<NewProduk />
      </div>
    );
  }
}

export default VHome;
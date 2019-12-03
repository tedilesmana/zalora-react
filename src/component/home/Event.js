import React from 'react';

const Event = (props) => {
  return (
      <div>
     {/*   <!-- ####################################### -->
		<!-- Start Event -->
		<!-- ####################################### -->*/}
		<div className="content" id="nowEvent">
			<div className="box">
				<div className="l-box">
					
				</div>
				<div className="r-box">
					<div className="text">
						<h3 className="brand">NOW ON BABASTORE</h3>
						<h1 className="banner">kids fashion</h1>
						<p>Jadikan buah hati anda lebih stylist dengan beragam produk fashion anak-anak di BABASTORE</p>
					</div>
				</div>
				<div className="style_hover"></div>
			</div>
			<br />
			<div className="b-label">
				<img src="images/bni.png" height="40" alt="" />
				<div className="c-label">Additional Diskon 25% Dengan Kode Voucher: BNI1111</div>
				<div className="r-label">Info Selengkapnya <i className="material-icons">arrow_right</i></div>
				<div className="style_hover"></div>
			</div>
		</div>
		{/*<!-- ####################################### -->
		<!-- End Event -->
		<!-- ####################################### -->*/}
      </div>
  )
}

export default Event;
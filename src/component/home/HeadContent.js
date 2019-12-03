import React from 'react';


// function left_btn_change(){
// 	console.log('ok');
// }

// function left_btn_remove(){
// 	console.log('ok');
// }

// function right_btn_change(){
// 	console.log('ok');
// }

// function right_btn_remove(){
// 	console.log('ok');
// }

// function right_href(){
// 	window.location.href = 'http://localhost/babastudio/ujian#';
// }

// function left_href(){
// 	window.location.href = 'http://localhost/babastudio/ujian#';
// }

const HeadContent = (props) => {
  return (
      <div>
          
		{/*	<!-- ####################################### -->
			<!-- Start Image Slider -->
			<!-- ####################################### -->*/}
			<div className="content" id="slider">
				<div className="label">
					<div className="l-label">
						<ul>
							<li className="bold">
								<i className="material-icons">loyalty</i>
								PRODUK ORIGINAL & TERJAMIN
							</li>
							<li className="bold">
								<i className="material-icons">assignment</i>
								RIBUAN FASHION BRAND
							</li>
							<li className="bold">
								<i className="material-icons">autorenew</i>
								GRATIS PENGEMBALIAN
							</li>
							<li className="bold">
								<i className="material-icons">help_outline</i>
								PERTANYAAN?
							</li>
						</ul>
					</div>
					<div className="r-label">
						<b className="bold">Download & Dapatkan Diskon 22%! </b>
						<i className="material-icons">phone_iphone</i>
					</div>
				</div>

				<div className="c-box">
					<div className="t-box">
						<div className="l-box">
							<div className="text-tlc">
								<h1>Everything Mush Go!</h1>
								<h1 className="text-banner">UP TO 70% OFF <br/> + EKSTRA 20% OFF</h1>
							</div>
							<div className="btn-left"><i className="material-icons md-48">arrow_left</i> WOMENS</div>
						</div>

						<div className="r-box">
							<div className="text-brc">
								<div className="text">
									<div className="t-text">
										<div className="l-text">
											<h3 className="bold">Tanpa Min. Pembelian Untuk Pelanggan Baru</h3>
										</div>
										<div className="r-text">
											<h3 className="bold">Tanpa Min. Pembelian Untuk Pelanggan Baru</h3>
										</div>
									</div>
									<div className="voucher">Kode Voucher: TERBAIK20</div>
									<br/>
									<h3 className="bold">Syarat dan Ketentuan Berlaku</h3>
								</div>
							</div>
							<div className="btn-right">MENS <i className="material-icons md-48">arrow_right</i></div>
						</div>
					</div>

					<div className="b-box">
						<ul>
							<li className="bold"> 
								<i className="material-icons">loyalty</i>
								PRODUK ORIGINAL & TERJAMIN
							</li>
							<li className="bold"> 
								<i className="material-icons">assignment</i>
								RIBUAN FASHION BRAND
							</li>
							<li className="bold"> 
								<i className="material-icons">autorenew</i>
								GRATIS PENGEMBALIAN
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	
  )
}

export default HeadContent;
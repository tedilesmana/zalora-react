import React from 'react';

const NewProduk = (props) => {
  return (
      <div>
        	{/*<!-- ####################################### -->
			<!-- Start New Produk -->
			<!-- ####################################### -->*/}
			<br><br><br>
			<div class="content" id="newProduk">
				<center><h1>New This Week</h1></center>
				<br><br><br>
				<div class="produk">
					<div class="ls-produk">
						<img src="images/jam.jpg" alt="" height="350" width="300">
						<br><br>
						<h4>All Under Rp. 188.000</h4>
						<p>Semua produk fashion untuk stylish anda di bawah Rp.188.000</p>
					</div>
					<div class="ls-produk">
						<img src="images/shoe.jpg" alt="" height="350" width="300">
						<br><br>
						<h4>All Under Rp. 228.000</h4>
						<p>Temukan pilihan sepatu kasual dengan harga di bawah Rp. 228.000</p>
					</div>
					<div class="ls-produk">
						<img src="images/men.jpg" alt="" height="350" width="300">
						<br><br>
						<h4>Diskon Up To 50%</h4>
						<p>Style fashion paling popular untuk menemani hari-hari kasual anda</p>
					</div>
				</div>
			</div>
			{/*<!-- ####################################### -->
			<!-- End New Produk -->
			<!-- ####################################### -->*/}
      </div>
  )
}

export default NewProduk;

data1 = [65.5, 34.5];
colors1 = ['#49a9ea', '#36caab']
let myChart1 = document.getElementById('myChart').getContext('2d');
let chart1 = new Chart(myChart1, {
	type: 'doughnut',
	data: {
		datasets: [ {
			data: data1,
			backgroundColor: colors1
		}]
	}
})


document.getElementById('innerNewScore').innerHTML=`
<div class="title">Bảng thông tin nhập điểm mới nhất</div>
                <ul class="table">
                    <div class="line-10"></div>
                    <div class="line-40"></div>
                    <div class="line-50"></div>
                    <div class="line-60"></div>
                    <div class="line-70"></div>
                    <div class="line-80"></div>
                    <div class="line-90"></div>
                    <li class="table-header">
                        <div class="col col-p10">Mã lớp</div>
                        <div class="col col-p30">Tên Lớp</div>
                        <div class="col col-p10">Trọng số QT</div>
                        <div class="col col-p10">Điểm QT</div>
                        <div class="col col-p10">TT điểm QT</div>
                        <div class="col col-p10">Điểm thi</div>
                        <div class="col col-p10">TT điểm thi</div>
                        <div class="col col-p10">Tùy chọn</div>
                    </li>
                    <li class="row underline">
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search">
                        </div>
                        <div class="col col-p30">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10">
                            <i class='bx bx-search'></i>
                            <input type="text" class="class-search"></div>
                        <div class="col col-p10"></div>
                    </li>
                </ul>
                <div class="total">Không có dữ liệu</div>`;

document.getElementById('innerScore').innerHTML = `
<div class="title">Bảng điểm sinh viên</div>
<ul class="table">
    <div class="line-10"></div>
    <div class="line-20"></div>
    <div class="line-50"></div>
    <div class="line-60"></div>
    <div class="line-70"></div>
    <div class="line-80"></div>
    <div class="line-90"></div>
    <li class="table-header">
        <div class="col col-p10">Học kỳ</div>
        <div class="col col-p10">Mã học phần</div>
        <div class="col col-p30">Tên học phần</div>
        <div class="col col-p10">Tín chỉ</div>
        <div class="col col-p10">Lớp học</div>
        <div class="col col-p10">Điểm QT</div>
        <div class="col col-p10">Điểm thi</div>
        <div class="col col-p10">Điểm chữ</div>
    </li>
    <li class="row underline">
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p30">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search">
        </div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search"></div>
        <div class="col col-p10">
            <i class='bx bx-search'></i>
            <input type="text" class="class-search"></div>
        </div>
    </li>	
    <li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">FL1100</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Tiếng Anh 1</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">106602</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI1111</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích I</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">106937</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI1141</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Đại số</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">106940</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MI2001</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Nhập môn HTTTQL</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">106947</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">MIL1110</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Đường lối quân sự</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">106945</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">PE1014</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Lý luận TDTT</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">107152</div>
		<div class = "col col-p10"> </div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20181</div>
		<div class = "col col-p10">SSH1110</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Những NLCB của CNML I</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">106944</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">EM1170</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Pháp luật đại cương</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">108115</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">FL1101</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Tiếng Anh 2</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">107896</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">IT1110</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Tin học đại cương</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">108114</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MI1121</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108102</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">1</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MI1131</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích III</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108105</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">MIL1120</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Công tác quốc phòng-An ninh</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">108116</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">PE2301</div>
		<<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Bóng rổ 1</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">632008</div
		><div class = "col col-p10"> </div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">PH1110</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Vật lý đại cương I</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108109</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20182</div>
		<div class = "col col-p10">SSH1120</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Những NLCB của CNML II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">108113</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class = "row underline">
		<div class = "col col-p10">20183</div>
		<div class = "col col-p10">MI1111</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích I</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">110152</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class = "row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">EM3102</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Kinh tế đại cương</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112187</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MI3010</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Toán rời rạc</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112185</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">4.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MI3370</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Hệ điều hành</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">112186</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">MIL1130</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">QS chung và KCT bắn súng AK</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">625813</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">3.5</div>
		<div class = "col col-p10">D</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">PE2302</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Bóng rổ 2</div>
		<div class = "col col-p10">0</div>
		<div class = "col col-p10">626573</div>
		<div class = "col col-p10"> </div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">PH1120</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Vật lý đại cương II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">112175</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">2.5</div>
		<div class = "col col-p10">F</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20191</div>
		<div class = "col col-p10">SSH1050</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Tư tưởng HCM</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">112953</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">EM1010</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Quản trị học đại cương</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116893</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">EM3190</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Hành vi của tổ chức</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116437</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI1121</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">115374</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">5</div>
		<div class = "col col-p10">D+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI2020</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Xác suất thống kê</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116435</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3041</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Giải tích số</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116438</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">4</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3060</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Cấu trúc dữ liệu và giải thuật</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116440</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">5.5</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3090</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Cơ sở dữ liệu</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">116443</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20192</div>
		<div class = "col col-p10">MI3310</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Kỹ thuật lập trình</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">116444</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20193</div>
		<div class = "col col-p10">EM1180</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Văn hóa kinh doanh và tinh thần khởi nghiệp</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">117570</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20193</div>
		<div class = "col col-p10">PH1120</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Vật lý đại cương II</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">117475</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">EM3211</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Nguyên lý marketing</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119635</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">EM4527</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Kế toán doanh nghiệp</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119637</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI3031</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Suy luận thống kê</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119633</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">6.5</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI3130</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Toán kinh tế</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119638</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">B+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4024</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Phân tích số liệu</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">119624</div>
		<div class = "col col-p10">10</div>
		<div class = "col col-p10">7</div>
		<div class = "col col-p10">B</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4060</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Hệ thống và mạng máy tính</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119634</div>
		<div class = "col col-p10">7.5</div>
		<div class = "col col-p10">6</div>
		<div class = "col col-p10">C+</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4090</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Lập trình hướng đối tượng</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">119627</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">A</div>
	</li>
	<li class ="row underline">
		<div class = "col col-p10">20201</div>
		<div class = "col col-p10">MI4344</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Kiến trúc máy tính</div>
		<div class = "col col-p10">2</div>
		<div class = "col col-p10">119625</div>
		<div class = "col col-p10">9</div>
		<div class = "col col-p10">8</div>
		<div class = "col col-p10">B+</div>
	</li>
	<li class= "row underline">
		<div class = "col col-p10">20202</div>
		<div class = "col col-p10">MI3380</div>
		<div class = "col col-p30" style = "text-align: left; padding-left: 5px;">Đồ án I</div>
		<div class = "col col-p10">3</div>
		<div class = "col col-p10">705483</div>
		<div class = "col col-p10">9.5</div>
		<div class = "col col-p10">8.5</div>
		<div class = "col col-p10">A</div>
	</li>
</ul>
`;

document.getElementById('innerFinalScore').innerHTML = `
<div class="title">Kết quả học tập sinh viên</div>
                    <ul class="table">
                        <div class="line-10"></div>
                        <div class="line-15"></div>
                        <div class="line-20"></div>
                        <div class="line-25"></div>
                        <div class="line-35"></div>
                        <div class="line-45"></div>
                        <div class="line-50"></div>
                        <div class="line-60"></div>
                        <div class="line-70"></div>
                        <div class="line-80"></div>
                        <div class="line-90"></div>
                        <li class="table-header">
                            <div class="col col-p10">Học kỳ</div>
                            <div class="col col-p5">GPA</div>
                            <div class="col col-p5">CPA</div>
                            <div class="col col-p5">TC qua</div>
                            <div class="col col-p10">TC tích lũy</div>
                            <div class="col col-p10">TC nợ ĐK</div>
                            <div class="col col-p5">TC ĐK</div>
                            <div class="col col-p10">Trình độ</div>
                            <div class="col col-p10">Mức CC</div>
                            <div class="col col-p10">Thiếu điểm</div>
                            <div class="col col-p10">Không tính</div>
                            <div class="col col-p10">CTĐT</div>
                        </li>
                        <li class = "row underline"><div class = "col col-p10">20201</div><div class = "col col-p5">3.11</div><div class = "col col-p5">2.62</div><div class = "col col-p5">22</div><div class = "col col-p10">85</div><div class = "col col-p10">0</div><div class = "col col-p5">85</div><div class = "col col-p10">Năm thứ ba</div><div class = "col col-p10">Mức 0</div><div class = "col col-p10"> </div><div class = "col col-p10"> </div><div class = "col col-p10">HTTTQL 2018</div></li><li class = "row underline"><div class = "col col-p10">20192</div><div class = "col col-p5">2.58</div><div class = "col col-p5">2.3</div><div class = "col col-p5">20</div><div class = "col col-p10">58</div><div class = "col col-p10">3</div><div class = "col col-p5">61</div><div class = "col col-p10">Năm thứ hai</div><div class = "col col-p10">Mức 0</div><div class = "col col-p10"> </div><div class = "col col-p10"> </div><div class = "col col-p10">HTTTQL 2018</div></li><li class = "row underline"><div class = "col col-p10">20191</div><div class = "col col-p5">2</div><div class = "col col-p5">2.02</div><div class = "col col-p5">10</div><div class = "col col-p10">38</div><div class = "col col-p10">6</div><div class = "col col-p5">44</div><div class = "col col-p10">Năm thứ hai</div><div class = "col col-p10">Mức 0</div><div class = "col col-p10"> </div><div class = "col col-p10"> </div><div class = "col col-p10">HTTTQL 2018</div></li><li class = "row underline"><div class = "col col-p10">20182</div><div class = "col col-p5">1.72</div><div class = "col col-p5">1.77</div><div class = "col col-p5">15</div><div class = "col col-p10">24</div><div class = "col col-p10">7</div><div class = "col col-p5">31</div><div class = "col col-p10">Năm thứ nhất</div><div class = "col col-p10">Mức 0</div><div class = "col col-p10"> </div><div class = "col col-p10"> </div><div class = "col col-p10">HTTTQL 2018</div></li><li class = "row underline"><div class = "col col-p10">20181</div><div class = "col col-p5">1.85</div><div class = "col col-p5">1.85</div><div class = "col col-p5">9</div><div class = "col col-p10">9</div><div class = "col col-p10">4</div><div class = "col col-p5">13</div><div class = "col col-p10">Năm thứ nhất</div><div class = "col col-p10">Mức 0</div><div class = "col col-p10"> </div><div class = "col col-p10"> </div><div class = "col col-p10">HTTTQL 2018</div></li></ul>
`


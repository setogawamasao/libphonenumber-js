import React, { useState, useEffect } from "react";
import parsePhoneNumber ,{ AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'

const TelTest = () => {
	const [TelInput1, setTelInput1] = useState("09012345678");
	const [TelOutput1, setTelOutput1] = useState("");

	const [TelInput2, setTelInput2] = useState("+12025550178");
	const [TelOutput2, setTelOutput2] = useState("");
	useEffect(() => {
		const phoneNumber1 = new AsYouType('JP').input(TelInput1) || "";
		const parsedPhoneNumber1 = parsePhoneNumber(phoneNumber1,'JP');

		if (parsedPhoneNumber1) {
			if(parsedPhoneNumber1.isValid()){
				let temptext =  "";
				temptext += `入力：${TelInput1}\n`;
				temptext += `フォーマット:${phoneNumber1}\n`;
				temptext += `国際規格(ITU-T)：${parsedPhoneNumber1.number}\n`;
				temptext += `国：${parsedPhoneNumber1.country}\n`;
				setTelOutput1(temptext);
			}else{
				let temptext = "Error";
				setTelOutput1(temptext);
			}
		}else{
			let temptext =  "no input";
			setTelOutput1(temptext);
		}
	
		const phoneNumber2 = new AsYouType().input(TelInput2) || "";
		const parsedPhoneNumber2 = parsePhoneNumber(phoneNumber2);
		if (parsedPhoneNumber2) {
			if(parsedPhoneNumber2.isValid()){
				let temptext =  "";
				temptext += `入力：${TelInput2}\n`;
				temptext += `フォーマット:${phoneNumber2}\n`;
				temptext += `国際規格(ITU-T)：${parsedPhoneNumber2.number}\n`;
				temptext += `国：${parsedPhoneNumber2.country}\n`;
				setTelOutput2(temptext);
			}else{
				let temptext =  "Error";
				setTelOutput2(temptext);
			}
		}else{
			var temptext =  "no input";
			setTelOutput2(temptext);
		}
	

	});
	return (
		<div>
			<div>国コード：日本固定</div>
			<div><input name="TelInput1" value= {TelInput1} onChange={ (e) => { setTelInput1(e.target.value) }} /></div>
			<pre>{TelOutput1}</pre>
			<hr/>
			<div>国コード：指定なし</div>
			<div><input name="TelInput4" value= {TelInput2} onChange={ (e) => { setTelInput2(e.target.value) }} /></div>
			<pre>{TelOutput2}</pre>
		</div>
	);
};
export default TelTest;

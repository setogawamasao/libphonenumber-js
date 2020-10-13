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
		let tempText1 =  "";

		if (parsedPhoneNumber1) {
			if(parsedPhoneNumber1.isValid()){
				tempText1 += `フォーマット:${phoneNumber1}\n`;
				tempText1 += `国際規格(ITU-T)：${parsedPhoneNumber1.number}\n`;
				tempText1 += `国：${parsedPhoneNumber1.country}\n`;
				setTelOutput1(tempText1);
			}else{
				tempText1 = "Error";
				setTelOutput1(tempText1);
			}
		}else{
			tempText1 =  "no input";
			setTelOutput1(tempText1);
		}
	
		const phoneNumber2 = new AsYouType().input(TelInput2) || "";
		const parsedPhoneNumber2 = parsePhoneNumber(phoneNumber2);
		let tempText2 =  "";
		if (parsedPhoneNumber2) {
			if(parsedPhoneNumber2.isValid()){
				tempText2 += `フォーマット:${phoneNumber2}\n`;
				tempText2 += `国際規格(ITU-T)：${parsedPhoneNumber2.number}\n`;
				tempText2 += `国：${parsedPhoneNumber2.country}\n`;
				setTelOutput2(tempText2);
			}else{
				tempText2 =  "Error";
				setTelOutput2(tempText2);
			}
		}else{
			tempText2 =  "no input";
			setTelOutput2(tempText2);
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

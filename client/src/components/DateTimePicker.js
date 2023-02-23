import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Button from "react-bootstrap/Button";

function DateTimePicker() {
	const [values, setValues] = useState(
		[1, 2, 3].map((number) =>
			new DateObject().set({
				day: number,
			})
		)
	);



	return (
		<div>
			<hr />
			<h1>Select your availability date and time</h1>
			<DatePicker


				onChange={setValues}
				format="MM/DD/YYYY"
				multiple
				plugins={[<DatePanel markFocused />]}
				minDate={new DateObject()}
				maxDate={new DateObject().add(7, "days")}
				render={<InputIcon />}
			/>
			<Button as="input" type="submit" value="Submit" />
			<hr />
		</div>
	);
}

export default DateTimePicker;

import React from "react";
import SendEmail from "./components/SendEmail";
import DateTimePicker from "./components/DateTimePicker";

const App = () => (
	<div>
		{/*	<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
		</Routes>*/}
		<SendEmail />
		<DateTimePicker />
	</div>
	// eslint-disable-next-line
);

export default App;
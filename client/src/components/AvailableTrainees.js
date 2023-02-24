import React from "react";
import Button from "react-bootstrap/Button";

function AvailableTrainees() {
	const [trainees, setTrainees] = React.useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("daily");

	React.useEffect(() => {
		fetch(
			`http://localhost:3001/availabilities?search=${search}&filter=${filter}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setTrainees(data.data);
			});
	}, [search, filter]);

	const handleSearch = (event) => {
		const { value } = event.target;
		setSearch(value);
	};

	function handleDailyFilter() {
		setFilter("daily");
	}

	function handleWeeklyFilter() {
		setFilter("weekly");
	}

	function handleMonthlyFilter() {
		setFilter("monthly");
	}

	return (
		<div>
			<h1 style={{ color: "yellow", textAlign: "center" }}>Trainees with matching availability</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<input
							type="text"
							className="form-control"
							placeholder="Search"
							value={search}
							onChange={handleSearch}
						/>
					</div>
					<div className="col-md-6">
						<div className="btn-group" role="group" aria-label="Basic example">
							<button
								type="button"
								className="btn btn-outline-info"
								onClick={handleDailyFilter}
							>
								Daily
							</button>
							<button
								type="button"
								className="btn btn-outline-info"
								onClick={handleWeeklyFilter}
							>
								Weekly
							</button>
							<button
								type="button"
								className="btn btn-outline-info"
								onClick={handleMonthlyFilter}
							>
								Monthly
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<span>
					<div className="col-md-6">
						<div className="btn-group" role="group" aria-label="Basic example">
							<LogOut />
							<button
								className="btn btn-outline-info"
								style={{ float: "right", margin: "10px" }}
							>
								<Link to="/availability" style={{ textDecoration: "none" }}>
									Add Availability
								</Link>
							</button>
						</div>
					</div>
				</span>
			</div>
			<div className="container">
				<div className="row">
					{trainees.map((trainee) => {
						return (
							<div className="col-md-6">
								<div
									className="card mb-4 shadow-sm"
									style={{
										background: "#2f4d0a",
										border: "black solid 1px",
										margin: "2px",
										padding: "2px",
									}}
								>
									<AvailibityCards
										key={trainee.id}
										trainee={trainee}
										trainees={trainees}
										setTrainees={setTrainees}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AvailableTrainees;

// ====> List all trainees with their availability
// SELECT  *
// FROM    trainees A
// JOIN    availability B USING ( id );

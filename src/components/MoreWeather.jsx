import { Card, Col, Container, Row } from "react-bootstrap";

const MoreWeather = (props) => {
	console.log(props.forecast);
	return (
		<Container>
			<Row className="mt-2 g-2 justify-content-around">
				{props.forecast.list.map((element) => {
					const date = new Date(element.dt_txt);
					const hour = date.getHours();
					const min = date.getMinutes();
					const day = date.getDate();
					const month = date.getMonth() + 1;
					return (
						<Col xs={6} md={3} key={element.dt}>
							<Card className="align-items-center rounded-5 border-0 bg-light dark-shadow">
								<Card.Img
									style={{ width: "100px" }}
									className="rounded-circle"
									variant="top"
									src={props.iconurl + element.weather[0].icon + ".png"}
								/>
								<Card.Body>
									<Card.Text className="fs-4">
										{day}/{month < 10 ? "0" + month : month} - {hour}:{min < 10 ? "0" + min : min}
									</Card.Text>
									<Card.Text className="fs-3 text-primary">
										{Math.round(element.main.temp - props.toCelsius)} °C
									</Card.Text>
									<Card.Text>{element.weather[0].description}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
export default MoreWeather;

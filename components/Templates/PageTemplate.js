import { Col, Container, Row } from "react-bootstrap";
import { MainTempate } from "./MainTemplate";

export default function PageTemplate({ children }) {
	return (
		<MainTempate>
			<Container>
				<Row>
					<Col>{children}</Col>
				</Row>
			</Container>
		</MainTempate>
	);
}

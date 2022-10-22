import styles from "./Header.module.scss";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
	return (
		<header className={classNames(styles.header)}>
			<Container fluid>
				<Row>
					<Col md="6">
						<h6 className={classNames("color2", "m-0", "d-inline-block")}>Tommaso Elli</h6>
						{" "}
						<p className={classNames("color2", "m-0", "d-inline-block")}>Researcher + Designer + Developer</p>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

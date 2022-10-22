import styles from "./Footer.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
	return (
		<footer className={classNames(styles.footer)}>
			<Container fluid>
				<Row>
					<Col md="6" className={classNames("text-start")}>
						Designed and coded by me
					</Col>
					<Col md="6" className={classNames("text-end")}>
						<Link href="https://twitter.com/iosonosempreio">
							<a target="_blank" rel="noopener noreferrer">
								tw
							</a>
						</Link>{" "}
						/{" "}
						<Link href="https://github.com/iosonosempreio">
							<a target="_blank" rel="noopener noreferrer">
								gh
							</a>
						</Link>{" "}
						/{" "}
						<Link href="https://observablehq.com/@iosonosempreio">
							<a target="_blank" rel="noopener noreferrer">
								hq
							</a>
						</Link>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

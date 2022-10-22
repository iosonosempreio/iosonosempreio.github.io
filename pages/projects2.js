import classNames from "classnames";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import profileImage from "../images/profile-picture.jpeg";
import Header from "../components/header/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Projects() {
	return (
		<>
			<Container className={classNames("d-block", "d-md-flex", "flex-md-column", "justify-content-md-between", styles.cover)} fluid>
				<Row className={classNames("my-3")}>
					<Col xs={{ span: 8 }} className={classNames()}>
						<Header />
					</Col>
					<Col xs={{ span: 4 }}>{/* <Menu /> */}</Col>
				</Row>
				<Row className={classNames(styles.profile, "my-3")}>
					<Col
						xs={{ span: 12, offset: 0, order: 2 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 8, offset: 2, order: 2 }}
						lg={{ span: 5, offset: 1, order: 1 }}
						xl={{ span: 4, offset: 2 }}
						className={classNames("d-lg-flex", "align-items-lg-center")}
					>
						<span>
							<p className="big">
								This page is not here yet. In the meanwhile you can browse my projects at my profile page at{" "}
								<a href="https://densitydesign.org/person/tommaso-elli/" target="_blank" rel="noreferrer">
									densitydesign.org
								</a>{" "}
								or my (old) <a href="https://www.behance.net/tommasoelli">Behance profile</a>.
							</p>
							<p>
								{" "}
								Back to <Link href="/">home</Link>
							</p>
						</span>
					</Col>
				</Row>
				<Row className={classNames("my-3")}>
					<Col>
						<Footer />
					</Col>
				</Row>
			</Container>
		</>
	);
}

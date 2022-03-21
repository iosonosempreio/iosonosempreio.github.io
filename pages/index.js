import classNames from "classnames";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import profileImage from "../images/profile-picture.jpeg";
import Header from "../components/header/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Container
				className={classNames(
					"d-flex",
					"flex-column",
					"justify-content-between",
					styles.cover
				)}
				fluid
			>
				<Row>
					<Col xs={{ span: 8 }} className={classNames("pt-3")}>
						<Header />
					</Col>
					<Col xs={{ span: 4 }}>
						<Menu />
					</Col>
				</Row>
				<Row className={classNames(styles.profile, "my-3")}>
					<Col
						xs={{ span: 12, offset: 0, order: 2 }}
						sm={{ span: 8, offset: 2 }}
						md={{ span: 5, offset: 1, order: 1 }}
						lg={{ span: 5, offset: 1 }}
						// xl={{ span: 3, offset: 3 }}
						className={classNames("d-flex", "align-items-center")}
					>
						<p className={classNames("mt-3", "mb-0", "my-md-4")}>
							He is an information designer and design researcher working across
							data, information visualization, digital humanities, and creative
							coding. He obtained a Ph.D. in Design in 2022 with a thesis on
							visualization, literary studies, and design. He is a member of{" "}
							<a href="https://densitydesign.org/person/tommaso-elli/">
								DensityDesign
							</a>{" "}
							since 2016, and he is one of the founders of{" "}
							<a href="https://abilitiamo.org/">Abilítiamo Autismo</a>. In his
							spare time, he enjoys mountains and music.
						</p>
					</Col>
					<Col
						xs={{ span: 12, offset: 0, order: 1 }}
						sm={{ span: 8, offset: 2 }}
						md={{ span: 5, offset: 0, order: 2 }}
						lg={{ span: 5, offset: 0 }}
						// xl={{ span: 3, offset: 0 }}
						className={classNames("d-flex", "align-items-center")}
					>
						<div
							className={classNames(
								"img-fluid",
								styles.profileImage,
								"Xmb-5",
								"Xmb-md-0"
							)}
						>
							<div style={{ backgroundImage: `url(${profileImage.src})` }} />
						</div>
					</Col>
				</Row>
				<Row>
					<Col className={classNames("pb-3")}>
						<Footer />
					</Col>
				</Row>
			</Container>
		</>
	);
}

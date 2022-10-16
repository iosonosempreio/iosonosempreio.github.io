import classNames from "classnames";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import profileImage from "../images/profile-picture.jpeg";
import Header from "../components/header/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
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
								An information designer, design researcher and front-end developer working across data, information visualization, digital humanities, and
								creative coding.
								<br />
								He obtained a Ph.D. in Design in 2022 with a thesis on visualization, literary studies, and design. He is a member of{" "}
								<a href="https://densitydesign.org/person/tommaso-elli/">DensityDesign</a> since 2016, participates in the development of{" "}
								<a href="https://rawgraphs.io/">RAWGraphs</a>, and is one of the founders of{" "}
								<a href="https://abilitiamo.org/">Associazione Abilítiamo Autismo</a>. In his spare time, he enjoys mountains and music.
							</p>
							<p className="big">
								Have a look at my{" "}
								<a
									href="Résumé Elli Tommaso 20221016.pdf"
									rel="noreferrer"
									target="_blank"
								>
									resumé
								</a>
								, at my{" "}
								<a href="2022-10-10.pdf" download="tommaso-elli-CV2022-10-10.pdf">
									extended CV
								</a>
								, or at some{" "}
								<a href="https://docs.google.com/document/d/1Kips9qZ3bBYpxM4ASabZhgg5xm5az7n0_DPoyQThQJo/edit?usp=sharing" rel="noreferrer" target="_blank">
									projects
								</a>
								.
							</p>
						</span>
					</Col>
					<Col
						xs={{ span: 12, offset: 0, order: 1 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 8, offset: 2, order: 1 }}
						lg={{ span: 5, offset: 0, order: 2 }}
						xl={{ span: 4, offset: 0 }}
						className={classNames("XXd-flex", "XXalign-items-center", "mb-3", "mb-lg-0")}
					>
						<div className={classNames("img-fluid", styles.profileImage)}>
							<div style={{ backgroundImage: `url(${profileImage.src})` }} />
						</div>
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

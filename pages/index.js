import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import profileImage from "../images/profile-picture.jpeg";
import Header from "../components/header/Header";
import Footer from "../components/Footer/FOoter";

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
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col
						md={{ span: 4, offset: 2 }}
						className={classNames("d-flex", "align-items-center")}
					>
						<p>
							He is a Designer and researcher working with data, information
							visualization, digital humanities, and creative coding.He obtained
							a Ph.D. in Design in 2022 with a thesis on visualization and
							literary studies. He is a member of{" "}
							<a href="http://densitydesign.org/">DensityDesign</a> since 2016,
							and he is one of the founders of{" "}
							<a href="https://abilitiamo.org/">Abilítiamo Autismo</a>. In his
							spare time, he enjoys mountains and music.
						</p>
					</Col>
					<Col
						md={{ span: 4, offset: 0 }}
						className={classNames("d-flex", "align-items-center")}
					>
						<div className={classNames("img-fluid", styles.profileImage)}>
							<div style={{backgroundImage: `url(${profileImage.src})`}} />
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<Footer />
					</Col>
				</Row>
			</Container>
		</>
	);
}

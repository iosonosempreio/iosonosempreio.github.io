import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import profileImage from "../images/profile-picture.jpeg";
import { PageTemplate } from "../components/Templates";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Home() {
	return (
		<PageTemplate>
			<Container className={classNames("align-self-center")}>
				<Row>
					<Col
						xs={{ span: 12, offset: 0, order: 2 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 5, offset: 1, order: 1 }}
						xl={{ span: 4, offset: 2 }}
						className={classNames("py-3")}
					>
						<span>
							<p className="">
								I am an information designer, design researcher and front-end developer. I work across data, information visualization, digital humanities, and
								creative coding.
								<br />I obtained a Ph.D. in Design in 2022 with a thesis on visualization, literary studies, and design. I am a member of{" "}
								<a href="https://densitydesign.org/person/tommaso-elli/">DensityDesign</a> since 2016, I participate in the development of{" "}
								<a href="https://rawgraphs.io/">RAWGraphs</a>, and I am one of the founders of{" "}
								<a href="https://abilitiamo.org/">Associazione Abilítiamo Autismo</a>. In my spare time, I enjoy mountains and music.
							</p>
							<p className="">
								Have a look at my{" "}
								<a href="/resume202210.pdf" download="tommaso-elli-resume-2022-10.pdf">
									résumé
								</a>
								, my{" "}
								<a href="/cv202210.pdf" download="tommaso-elli-CV2022-10.pdf">
									extended CV
								</a>
								, or at some <Link href="/projects">projects</Link>.
							</p>
						</span>
					</Col>
					<Col
						xs={{ span: 12, offset: 0, order: 1 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 5, offset: 0, order: 2 }}
						xl={{ span: 4, offset: 0 }}
					>
						<div className={classNames("position-relative", "rounded", "h-100", "w-100")} style={{ overflow: "hidden", minHeight: "30vh" }}>
							<ExportedImage
								src={profileImage.src}
								alt={profileImage.src}
								// width={profileImage.width}
								// height={profileImage.height}
								layout="fill"
								objectFit="cover"
								useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
							/>
						</div>
					</Col>
					{/* <Col
						xs={{ span: 12, offset: 0, order: 2 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 8, offset: 2, order: 2 }}
						lg={{ span: 5, offset: 1, order: 1 }}
						xl={{ span: 4, offset: 2 }}
						className={classNames("d-lg-flex", "align-items-lg-center")}
					>
						<span>
							<p className="">
								I am an information designer, design researcher and front-end developer. I work across data, information visualization, digital humanities, and
								creative coding.
								<br />I obtained a Ph.D. in Design in 2022 with a thesis on visualization, literary studies, and design. I am a member of{" "}
								<a href="https://densitydesign.org/person/tommaso-elli/">DensityDesign</a> since 2016, I participate in the development of{" "}
								<a href="https://rawgraphs.io/">RAWGraphs</a>, and I am one of the founders of{" "}
								<a href="https://abilitiamo.org/">Associazione Abilítiamo Autismo</a>. In my spare time, I enjoy mountains and music.
							</p>
							<p className="">
								Have a look at my{" "}
								<a href="/resume202210.pdf" download="tommaso-elli-resume-2022-10.pdf">
									résumé
								</a>
								, my{" "}
								<a href="/cv202210.pdf" download="tommaso-elli-CV2022-10.pdf">
									extended CV
								</a>
								, or at some{" "}
								<a href="https://densitydesign.org/person/tommaso-elli/" rel="noreferrer" target="_blank">
									projects
								</a>{" "}
								done at Density.
							</p>
						</span>
					</Col>
					<Col
						xs={{ span: 12, offset: 0, order: 1 }}
						sm={{ span: 10, offset: 1 }}
						md={{ span: 8, offset: 2, order: 1 }}
						lg={{ span: 5, offset: 0, order: 2 }}
						xl={{ span: 4, offset: 0 }}
						className={classNames("mb-3", "mb-lg-0")}
					>
						<div className={classNames("img-fluid", styles.profileImage)}>
							<div style={{ backgroundImage: `url(${profileImage.src})` }} />
						</div>
					</Col> */}
				</Row>
			</Container>
		</PageTemplate>
	);
}

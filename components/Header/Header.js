import styles from "./Header.module.scss";
import classNames from "classnames";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const { basePath } = useRouter();
	return (
		<>
			<Navbar expand="lg" className={classNames(styles.headerBootstrap, "sticky-top")} collapseOnSelect={true}>
				<Container>
					<Navbar.Brand className="py-0" style={{ fontSize: "inherit" }}>
						<h6 className={classNames("color2", "m-0", "d-inline-block")}>Tommaso Elli</h6>{" "}
						<p className={classNames("color2", "m-0", "d-inline-block")}>Researcher + Designer + Developer</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link href="/">
								<a className={classNames("nav-link")}>Home</a>
							</Link>
							<Link href="/projects">
								<a className={classNames("nav-link")}>Projects</a>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

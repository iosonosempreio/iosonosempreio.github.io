import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import classNames from "classnames";

export default function MainTemplate({ children, title }) {
	return (
		<>
			<Head>
				<title>Tommaso Elli—{title}</title>
			</Head>
			<div className={classNames("min-vh-100", "d-flex", "flex-column", "justify-content-between")}>
				<Header />
				<div className={classNames("flex-grow-1", "d-flex")}>{children}</div>
				<Footer />
			</div>
		</>
	);
}

MainTemplate.defaultProps = {
	title: "Personal website",
};

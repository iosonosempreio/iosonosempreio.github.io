import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function MainTemplate({ children, title }) {
	return (
		<>
			<Head>
				<title>Tommaso Elli—{title}</title>
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
}

MainTemplate.defaultProps = {
	title: "Personal website",
};

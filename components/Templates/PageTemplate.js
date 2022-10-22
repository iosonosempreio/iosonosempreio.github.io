import { Col, Container, Row } from "react-bootstrap";
import MainTemplate from "./MainTemplate";

export default function PageTemplate({ children }) {
	return (
		<MainTemplate>
			{children}
		</MainTemplate>
	);
}

import styles from "./Header.module.scss";
import classNames from "classnames";

export default function Header() {
	return <div className={classNames(styles.header, "my-3")}>
		<h6>Tommaso Elli</h6>
		<p>Design Researcher + Information Designer</p>
	</div>;
}

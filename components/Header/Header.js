import styles from "./Header.module.scss";
import classNames from "classnames";

export default function Header() {
	return <div className={classNames(styles.header)}>
		<h6 className={classNames("color2", "m-0")}>Tommaso Elli</h6>
		<p className={classNames("color2", "m-0")}>Researcher + Designer</p>
	</div>;
}

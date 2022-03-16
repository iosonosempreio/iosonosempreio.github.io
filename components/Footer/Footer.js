import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
	return (
		<footer className={classNames(styles.footer, "my-3", "text-end")}>
			Footer
		</footer>
	);
}

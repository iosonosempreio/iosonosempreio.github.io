import styles from "./Footer.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={classNames(styles.footer, "my-3", "text-end")}>
			{/* <Link href="/">cv</Link> /{" "} */}
			<Link href="https://twitter.com/iosonosempreio">tw</Link> /{" "}
			<Link href="https://github.com/iosonosempreio">gh</Link> /{" "}
			<Link href="https://observablehq.com/@iosonosempreio">hq</Link>
		</footer>
	);
}

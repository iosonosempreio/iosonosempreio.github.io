import styles from "./Footer.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={classNames(styles.footer, "text-end")}>
			<p className={classNames("p-0", "m-0")}>
				{/* <Link href="/">cv</Link> /{" "} */}
				<Link href="https://twitter.com/iosonosempreio">
					<a target="_blank" rel="noopener noreferrer">
						tw
					</a>
				</Link>{" "}
				/{" "}
				<Link href="https://github.com/iosonosempreio">
					<a target="_blank" rel="noopener noreferrer">
						gh
					</a>
				</Link>{" "}
				/{" "}
				<Link href="https://observablehq.com/@iosonosempreio">
					<a target="_blank" rel="noopener noreferrer">
						hq
					</a>
				</Link>
			</p>
		</footer>
	);
}

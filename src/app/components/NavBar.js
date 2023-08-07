import Link from "next/link";
import styles from "../page.module.css";

export default function NavBar() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href="/greetings">Greetings</Link>
          </li>
          <li>
            {" "}
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/review">Review</Link>
          </li>
          <li>
            <Link href="/client">Clientpage</Link>
          </li>
          <li>
            <Link href="/blog">BlogPages</Link>
          </li>
          <li>
            <Link href="/product">ProductPage</Link>
          </li>
          <li>
            <Link href="/comments">CommentsPage</Link>
          </li>
          <li>
            <Link href="/signup">SignUpPage</Link>
          </li>
          <li>
            <Link href="/signin">SignInPage</Link>
          </li>
          <li>
            <Link href="/game">GamePage</Link>
          </li>
          <li>
            <Link href="/panel">PanelPage</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

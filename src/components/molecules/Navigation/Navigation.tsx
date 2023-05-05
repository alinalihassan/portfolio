import { FC } from "react";
import Link from "next/link";
import { List, StyledNavigation } from "./styles";

interface NavigationProps {
  onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
  return (
    <StyledNavigation>
      <List>
        <li>
          <Link href="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={onClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={onClick}>
            Blog
          </Link>
        </li>
      </List>
    </StyledNavigation>
  );
};

export { Navigation };

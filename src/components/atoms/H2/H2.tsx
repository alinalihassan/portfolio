import { FC } from "react";
import { AnchorLink, Heading } from "./styles";

interface H2Props {
  children?: React.ReactNode;
}

let getAnchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");

const H2: FC<H2Props> = ({ children }: H2Props) => {
  const anchor = getAnchor(children!.toString());
  const link = `#${anchor}`;
  return (
    <Heading id={anchor}>
      <AnchorLink href={link}>#</AnchorLink>
      {children}
    </Heading>
  );
};

export { H2 };

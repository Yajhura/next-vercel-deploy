import React, { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



const style:CSSProperties = {
  color: "red",
  fontWeight: "bold",
  textDecoration: "underline",
};

interface Props {
  href: string;
  text: string;
}

const LinksActivos = ({ href, text }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default LinksActivos;

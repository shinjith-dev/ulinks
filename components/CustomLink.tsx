import Link from "next/link";

const CustomLink = (props: any) => {
  const { href } = props;
  const isInternalLink =
    href &&
    !(
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("ftp://")
    );

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;

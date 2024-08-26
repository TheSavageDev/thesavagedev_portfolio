export const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a
        href={href}
        className="transition-colors duration-300 text-gray-300 hover:text-brick"
      >
        {text}
      </a>
    </li>
  );
};

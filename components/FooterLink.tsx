export const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-300 transition-colors duration-200 hover:text-yellow"
      >
        {text}
      </a>
    </li>
  );
};

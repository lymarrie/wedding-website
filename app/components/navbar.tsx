import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="p-10">
      <div className="container mx-auto flex justify-center space-x-12 items-center tracking-wide">
        <Link href="/">
          Home
        </Link>
        <Link href="/wedding-weekend">
          Wedding Weekend
        </Link>
        <Link href="/insert-name-and-luc">
          [Insert Name] and Luc
        </Link>
        <Link href="/faqs">
          FAQs
        </Link>
        <Link href="/travel">
          Travel
        </Link>
        <Link href="/accomodations">
          Accomodations
        </Link>
        <Link href="/rsvp">
          RSVP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

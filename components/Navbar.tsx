import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/"><button>Home</button></Link>
      <Link href="/about"><button>About</button></Link>
      <Link href="/contact"><button>Contact</button></Link>
      <Link href="/footer"><button>Footer</button></Link>
    </nav>
  );
};

export default Navbar;

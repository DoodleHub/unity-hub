import Image from 'next/image';
import Link from 'next/link';

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1 flex justify-start items-center">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <p className="text-white text-xl">UnityHub</p>
      </Link>
      {children}
    </div>
  );
};

export default Header;

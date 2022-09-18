import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';


export default function Header() {

  return (
    <>
      <div>
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <p>Ambassy</p>
        </div>
      </div>
    </>
  );
}

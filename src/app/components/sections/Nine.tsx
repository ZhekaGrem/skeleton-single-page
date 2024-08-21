// 'use client'
// import styles from '@/styles/nine.module.css';
// import Image from "next/image";
// import { usePortal } from '@/components/layout/PortalContext';

const Nine: React.FC = () => {
  return (
    <section className="flex min-h-screen">
      <div className="container mx-auto">
        <h2>exaple how build section contacts</h2>
        <dl>
          <dt>Adress</dt>
          <dd>
            {' '}
            <address>Lviv</address>
          </dd>
          <dt>Number</dt>
          <dd>
            <a href="tel:0000000">0000000</a>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default Nine;

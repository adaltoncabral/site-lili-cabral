import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import dynamic from 'next/dynamic';

const BannerCarousel = dynamic(() => import('../components/BannerCarousel'), { ssr: false });
const CategoryIcons = dynamic(() => import('../components/CategoryIcons'), { ssr: false });
const WatermarkConstrucao = dynamic(() => import('../components/WatermarkConstrucao'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Conforto que Presenteia</title>
        <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:title" content="Lili Cabral – Conforto que Presenteia" />
        <meta property="og:description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:image" content="/banners/banner1.webp" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', fontFamily: 'Montserrat, sans-serif' }}>
        <BannerCarousel />
        <CategoryIcons />
        <WatermarkConstrucao />
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}

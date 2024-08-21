import { lazy, Suspense } from 'react';
import Loading from '@/app/loading';

const One = lazy(() => import('@/app/components/sections/One'));
// const Two = lazy(() => import('@/app/components/sections/Two'));
// const Three = lazy(() => import('@/app/components/sections/Three'));
// const Four = lazy(() => import('@/app/components/sections/Four'));
// const Five = lazy(() => import('@/app/components/sections/Five'));
// const Six = lazy(() => import('@/app/components/sections/Six'));
// const Seven = lazy(() => import('@/app/components/sections/Seven'));
// const Eighth = lazy(() => import('@/app/components/sections/Eighth'));
const Nine = lazy(() => import('@/app/components/sections/Nine'));

export default function Home(): React.ReactNode {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <One />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <Two />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Three />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Four />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Five />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Six />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Seven />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Eighth />
      </Suspense>
      */}
      <Suspense fallback={<Loading />}>
        <Nine />
      </Suspense>
    </>
  );
}

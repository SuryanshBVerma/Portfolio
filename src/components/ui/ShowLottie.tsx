'use client';

import dynamic from 'next/dynamic';

type Props = {
  path: any;
  className?: string;
};

const DynamicPlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <DynamicPlayer autoplay loop src={path} />
    </div>
  );
};

export default ShowLottie;

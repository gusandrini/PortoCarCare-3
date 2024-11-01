import Not from '@/Images/not-found.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="NotFound">
      <Image
        src={Not}
        alt="Not Found"
      />
    </div>
  );
}

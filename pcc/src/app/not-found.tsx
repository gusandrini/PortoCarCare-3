import Image from 'next/image';
import Link from 'next/link';
import Not from '@/Images/not-found.png'

export default function NotFound() {
  return (
    <div className="NotFound">
      <Image
        src={Not} 
        alt="Not Found"
        width={3000} 
        height={1000} 
      />
    </div>
  );
}

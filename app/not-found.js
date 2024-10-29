import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LucideMessageCircleWarning } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center space-y-6 text-center">
      <div className="flex items-center space-x-4">
        <LucideMessageCircleWarning />
        <h2 className="text-3xl font-bold">Page Not Found</h2>
      </div>
      <p className="text-lg text-gray-600">
        Apologies, but the page you requested could not be found. It&apos;s
        possible the page has been moved or no longer exists.
      </p>
      <div className="flex space-x-4">
        <Button>
          <Link href="/">Return to Home</Link>
        </Button>
        <Button variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
      <div className="text-gray-500">
        <p>Error code: 404</p>
      </div>
    </div>
  );
}

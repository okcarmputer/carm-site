import { CircleX, LoaderCircle } from 'lucide-react';

export type LoadingOverlayProps = {
  text?: string;
};

export function LoadingScreen({ text }: LoadingOverlayProps) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background opacity-100">
      <div className="flex flex-col items-center">
        <LoaderCircle className="h-20 w-20 animate-spin" />{' '}
        <span className="text-3xl">{text || 'Loading...'}</span>
      </div>
    </div>
  );
}

export function ErrorScreen({ text }: LoadingOverlayProps) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background opacity-100">
      <div className="flex flex-col items-center">
        <CircleX className="text-red h-20 w-20" />
        <span className="text-3xl">{text || 'Error'}</span>
      </div>
    </div>
  );
}

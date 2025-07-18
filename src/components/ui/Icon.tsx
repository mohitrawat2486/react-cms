// src/components/ui/Icon.tsx
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type IconName = keyof typeof Icons;

export const Icon = ({
  name,
  size = 20,
  className = '',
  ...props
}: LucideProps & { name: IconName }) => {
  const LucideIcon = Icons[name];

  if (!LucideIcon || typeof LucideIcon !== 'function') {
    return null;
  }

  return <LucideIcon size={size} className={className} {...props} />;
};

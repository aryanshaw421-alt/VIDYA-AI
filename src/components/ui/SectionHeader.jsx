import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  badge,
  badgeIcon,
  badgeVariant = 'neutral',
  title,
  highlightText,
  description,
  align = 'left', // 'left' | 'center'
  action,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} icon={badgeIcon} size="md">
          {badge}
        </Badge>
      )}

      <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold font-display tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
        {title}{' '}
        {highlightText && (
          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          {description}
        </p>
      )}

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};

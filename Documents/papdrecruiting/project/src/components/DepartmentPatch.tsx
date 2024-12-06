import React from 'react';
import { getImagePath } from '../lib/imageUtils';

interface DepartmentPatchProps {
  imageUrl?: string;
}

export function DepartmentPatch({ imageUrl = 'patch.png' }: DepartmentPatchProps) {
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full overflow-hidden border-2 border-blue-200">
      <img
        src={getImagePath(imageUrl)}
        alt="Port Arthur Police Department Patch"
        className="w-14 h-14 object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = getImagePath('fallback-patch.png');
        }}
      />
    </div>
  );
}
import React from 'react';

interface DepartmentPatchProps {
  imageUrl?: string;
}

export function DepartmentPatch({ imageUrl }: DepartmentPatchProps) {
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full overflow-hidden border-2 border-blue-200">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Port Arthur Police Department Patch"
          className="w-14 h-14 object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <span className="text-xs text-gray-500 text-center px-1">Add Department Patch</span>
        </div>
      )}
    </div>
  );
}
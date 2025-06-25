import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-4">
          <span>© 2025 MedIAcompanion</span>
          <span>•</span>
          <span>Données chiffrées, version 4.2.1</span>
        </div>
      </div>
    </footer>
  );
}
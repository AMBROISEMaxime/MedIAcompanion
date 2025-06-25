import React from 'react';
import { Shield, Clock, User } from 'lucide-react';

interface HeaderProps {
  currentTime: string;
}

export function Header({ currentTime }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-gray-900">MedIAcompanion</h1>
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Hébergement HDS</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
          <Clock className="w-4 h-4" />
          <span>{currentTime}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{currentTime}</span>
        </div>
        
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </header>
  );
}
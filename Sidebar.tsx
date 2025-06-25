import React from 'react';
import { 
  BarChart3, 
  History, 
  Search, 
  Settings, 
  CheckCircle,
  AlertTriangle,
  Activity,
  ChevronRight
} from 'lucide-react';

export function Sidebar() {
  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3, active: false },
    { id: 'consultation', label: 'Consultation en cours', icon: CheckCircle, active: true },
    { id: 'history', label: 'Historique & Favoris', icon: History, active: false },
    { id: 'search', label: 'Recherche sémantique', icon: Search, active: false },
    { id: 'settings', label: 'Paramètres', icon: Settings, active: false },
  ];

  return (
    <aside className="w-80 bg-white/90 backdrop-blur-sm border-r border-gray-200 p-6 space-y-6">
      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                item.active
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Patient Card */}
      <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Patient Pierre</h3>
        
        {/* Allergies */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
              Allergènes
            </span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              !
            </span>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <div>Diabète de type 2</div>
            <div>Allergies</div>
            <div>Pénicilline</div>
          </div>
        </div>

        {/* Treatments */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-800">Traitements</h4>
          <div className="text-sm text-gray-600">
            <div className="flex justify-between">
              <span>mog</span>
              <span>2×/jour</span>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-800">Constantes</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between">
              <span>TA</span>
              <span>145/90mmHg</span>
            </div>
            <div className="flex justify-between">
              <span>FC</span>
              <span>78 bpm</span>
            </div>
            <div className="flex justify-between">
              <span>FC-75 bpm</span>
              <span></span>
            </div>
          </div>
        </div>

        {/* ROSP Score */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <span className="font-medium text-gray-800">Score ROSP</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
import React, { useState } from 'react';
import { Calculator, FileText, Brain, ChevronRight, Info, ToggleLeft as Toggle } from 'lucide-react';

export function RightPanel() {
  const [pedagogyMode, setPedagogyMode] = useState(false);

  return (
    <aside className="w-80 p-6 space-y-6">
      {/* Billing Assistant */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Assistant cotation NGAP/CCAM</h3>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-3">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-sm font-medium text-blue-900 mb-1">C + MGE</div>
            <div className="text-xs text-blue-700">Majoration: N, IK, MD</div>
            <div className="text-xs text-blue-600 mt-2">Texte justificatif auto rempli</div>
          </div>
        </div>
      </div>

      {/* Prescription Generator */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Générateur d'ordonnance</h3>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">1re Intention</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="text-sm text-gray-600 px-3">
            <div>Hygiène de vie</div>
          </div>
        </div>
      </div>

      {/* Differential Diagnosis */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Diagnostic différentiel pondéré</h3>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              TOP 3
            </span>
          </div>

          <div className="space-y-2">
            {/* Diagnosis 1 */}
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Gastro</div>
                <div className="text-xs text-gray-600">Coliques</div>
                <div className="text-xs text-gray-600">Gastro entérite</div>
              </div>
              <div className="flex space-x-1">
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <ChevronRight className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pedagogy Mode Toggle */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <Info className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Mode pédagogie interne</span>
          </div>
          <button
            onClick={() => setPedagogyMode(!pedagogyMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              pedagogyMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                pedagogyMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}

import React, { useState } from 'react';
import { Mic, User, ChevronDown, ChevronUp } from 'lucide-react';

export function TranscriptionArea() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [note, setNote] = useState('');

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Live Transcription */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Transcription temps réel</h2>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Doctor Message */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="bg-blue-50 rounded-2xl px-4 py-3 max-w-md">
              <p className="text-gray-800">
                Vous me consultez aujourd'hui pour des douleurs abdominales, c'est bien ça?
              </p>
            </div>
          </div>

          {/* Patient Message */}
          <div className="flex space-x-3 justify-end">
            <div className="bg-green-100 rounded-2xl px-4 py-3 max-w-md">
              <p className="text-gray-800">
                Oui, j'ai mal au ventre depuis deux jours, avec quelques nausées.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Résumé structuré</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Douleurs abdominales présentes depuis deux jours, avec quelques nausées.
            </p>
          </div>
        )}
      </div>

      {/* Note Generation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Générer une note --</h3>
          
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Saisissez une note..."
            className="w-full h-24 px-4 py-3 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md">
            Générer observation + conclusion
          </button>
        </div>
      </div>
    </div>
  );
}
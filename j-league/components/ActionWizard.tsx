import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Plus, X, Camera, Paperclip } from 'lucide-react';

interface ActionWizardProps {
  topic: string;
  onComplete: () => void;
  caseDetails: {
    notes: Array<{ id: string; content: string; date: string }>;
    documents: Array<{ id: string; name: string; url: string }>;
    evidence: Array<{ id: string; type: string; description: string }>;
  };
  setCaseDetails: (details: any) => void;
}

function ActionWizard({ topic, onComplete, caseDetails, setCaseDetails }: ActionWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [newNote, setNewNote] = useState('');
  const [newEvidence, setNewEvidence] = useState({ type: '', description: '' });

  const steps = [
    {
      title: 'Document Situation',
      description: 'Record key details',
      component: 'notes'
    },
    {
      title: 'Gather Evidence',
      description: 'Collect documentation',
      component: 'evidence'
    },
    {
      title: 'Know Your Rights',
      description: 'Review legal options',
      component: 'rights'
    },
    {
      title: 'Take Action',
      description: 'Next steps',
      component: 'action'
    }
  ];

  const handleAddNote = () => {
    if (newNote.trim()) {
      setCaseDetails({
        ...caseDetails,
        notes: [
          ...caseDetails.notes,
          {
            id: Date.now().toString(),
            content: newNote,
            date: new Date().toISOString()
          }
        ]
      });
      setNewNote('');
    }
  };

  const handleAddEvidence = () => {
    if (newEvidence.type && newEvidence.description) {
      setCaseDetails({
        ...caseDetails,
        evidence: [
          ...caseDetails.evidence,
          {
            id: Date.now().toString(),
            ...newEvidence
          }
        ]
      });
      setNewEvidence({ type: '', description: '' });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to storage and get a URL
      const fakeUrl = URL.createObjectURL(file);
      setCaseDetails({
        ...caseDetails,
        documents: [
          ...caseDetails.documents,
          {
            id: Date.now().toString(),
            name: file.name,
            url: fakeUrl
          }
        ]
      });
    }
  };

  const renderStepContent = () => {
    switch (steps[currentStep].component) {
      case 'notes':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a note about your situation..."
                className="w-full p-3 border rounded-lg text-sm"
                rows={4}
              />
              <button
                onClick={handleAddNote}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Note
              </button>
            </div>
            <div className="space-y-2">
              {caseDetails.notes.map((note) => (
                <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{note.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(note.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'evidence':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                value={newEvidence.type}
                onChange={(e) => setNewEvidence({ ...newEvidence, type: e.target.value })}
                placeholder="Type of evidence"
                className="w-full p-3 border rounded-lg text-sm"
              />
              <textarea
                value={newEvidence.description}
                onChange={(e) => setNewEvidence({ ...newEvidence, description: e.target.value })}
                placeholder="Description of evidence..."
                className="w-full p-3 border rounded-lg text-sm"
                rows={3}
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  <Paperclip className="h-4 w-4 mr-2" />
                  Attach File
                </button>
                <button
                  onClick={() => document.getElementById('camera-upload')?.click()}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </button>
              </div>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
                className="hidden"
              />
              <input
                id="camera-upload"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={handleAddEvidence}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Evidence
              </button>
            </div>
            <div className="space-y-2">
              {caseDetails.evidence.map((item) => (
                <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">{item.type}</h4>
                  <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                </div>
              ))}
              {caseDetails.documents.map((doc) => (
                <div key={doc.id} className="p-3 bg-gray-50 rounded-lg flex items-center">
                  <Paperclip className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700">{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">Action Steps</h2>
        <p className="mt-2 text-sm text-gray-600">
          Document and track your case
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-600 text-right">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {steps[currentStep].title}
          </h3>
          <p className="text-sm text-gray-600">{steps[currentStep].description}</p>

          {renderStepContent()}

          <div className="flex justify-between pt-4 border-t mt-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`px-4 py-2 text-sm text-gray-600 rounded-full hover:bg-gray-100 ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              Back
            </button>
            <button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  onComplete();
                }
              }}
              className="flex items-center px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <ChevronRight className="ml-1 h-4 w-4" />
                </>
              ) : (
                'Complete'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionWizard;
import React from 'react';
import { Download, Share2, Bell, FileText, Camera, Paperclip } from 'lucide-react';

interface SummaryProps {
  topic: string;
  chatHistory: any[];
  location: string;
  caseDetails: {
    notes: Array<{ id: string; content: string; date: string }>;
    documents: Array<{ id: string; name: string; url: string }>;
    evidence: Array<{ id: string; type: string; description: string }>;
  };
}

function Summary({ topic, chatHistory, location, caseDetails }: SummaryProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">Your Case Summary</h2>
        <p className="mt-2 text-sm text-gray-600">
          Overview of your case and next steps
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 space-y-6">
        {/* Case Notes */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Case Notes
          </h3>
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
        </section>

        {/* Evidence and Documents */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Evidence Collection
          </h3>
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
                <a 
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {doc.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Key Rights */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Your Key Rights
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full mr-2"></span>
              <span>Right to fair housing and protection against discrimination</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full mr-2"></span>
              <span>Right to a habitable living space</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full mr-2"></span>
              <span>Right to privacy and proper notice before landlord entry</span>
            </li>
          </ul>
        </section>

        {/* Chat History */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Consultation History
          </h3>
          <div className="space-y-2">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`p-3 bg-gray-50 rounded-lg ${
                  msg.type === 'user' ? 'ml-4' : 'mr-4'
                }`}
              >
                <p className="text-sm text-gray-700">{msg.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4 border-t">
          <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download Case File
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700">
            <Share2 className="h-4 w-4 mr-2" />
            Share with Attorney
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700">
            <Bell className="h-4 w-4 mr-2" />
            Set Case Reminders
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
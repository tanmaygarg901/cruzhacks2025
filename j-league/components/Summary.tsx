import React from "react";
import {
  Download,
  Share2,
  Bell,
  FileText,
  Camera,
  Paperclip,
  Home,
} from "lucide-react";

interface ChatMessage {
  type: "user" | "ai";
  content: string;
  timestamp: string;
  isVoice?: boolean;
}

interface SummaryProps {
  topic: string;
  chatHistory: ChatMessage[];
  location: string;
  caseDetails: {
    notes: Array<{ id: string; content: string; date: string }>;
    documents: Array<{ id: string; name: string; url: string }>;
    evidence: Array<{ id: string; type: string; description: string }>;
  };
  onGoHome: () => void;
}

function Summary({
  topic,
  chatHistory,
  location,
  caseDetails,
  onGoHome,
}: SummaryProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-foreground">Your Case Summary</h2>
        <p className="mt-2 text-sm text-muted">
          Overview of your case and next steps
        </p>
      </div>

      <div className="card">
        {/* Case Notes */}
        <section>
          <h3 className="section-title">Case Notes</h3>
          <div className="space-y-2">
            {caseDetails.notes.map((note) => (
              <div key={note.id} className="message-bubble">
                <p className="text-sm text-foreground">{note.content}</p>
                <p className="text-xs text-muted mt-1">
                  {new Date(note.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence and Documents */}
        <section>
          <h3 className="section-title">Evidence Collection</h3>
          <div className="space-y-2">
            {caseDetails.evidence.map((item) => (
              <div key={item.id} className="message-bubble">
                <h4 className="font-medium text-foreground">{item.type}</h4>
                <p className="text-sm text-foreground mt-1">{item.description}</p>
              </div>
            ))}
            {caseDetails.documents.map((doc) => (
              <div
                key={doc.id}
                className="message-bubble flex items-center"
              >
                <Paperclip className="h-4 w-4 text-muted mr-2" />
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {doc.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Key Rights */}
        <section>
          <h3 className="section-title">Your Key Rights</h3>
          <ul className="space-y-3 text-sm text-foreground">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full mr-2"></span>
              <span>
                Right to fair housing and protection against discrimination
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full mr-2"></span>
              <span>Right to a habitable living space</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full mr-2"></span>
              <span>
                Right to privacy and proper notice before landlord entry
              </span>
            </li>
          </ul>
        </section>

        {/* Chat History */}
        <section>
          <h3 className="section-title">Consultation History</h3>
          <div className="space-y-2">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`${msg.type === 'user' ? 'message-bubble-user' : 'message-bubble-ai'} ${
                  msg.type === 'user' ? 'ml-4' : 'mr-4'
                }`}
              >
                <p className="text-sm text-foreground">{msg.content}</p>
                <p className="text-xs text-muted mt-1">
                  {new Date(msg.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4 border-t border-border">
          <button className="btn-primary">
            <Download className="h-4 w-4 mr-2" />
            Download Case File
          </button>
          <button className="btn-secondary">
            <Share2 className="h-4 w-4 mr-2" />
            Share with Attorney
          </button>
          <button className="btn-accent">
            <Bell className="h-4 w-4 mr-2" />
            Set Case Reminders
          </button>
          <button
            onClick={onGoHome}
            className="btn-neutral"
          >
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;

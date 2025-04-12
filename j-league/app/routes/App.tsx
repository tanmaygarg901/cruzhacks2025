import React, { useState } from 'react';
import { Search, BookOpen, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import TopicSelector from '../../components/TopicSelector';
import ChatInterface from '../../components/ChatInterface';
import LocalResources from '../../components/LocalResources';
import ActionWizard from '../../components/ActionWizard';
import Summary from '../../components/Summary';
import '../app.css';
import '../index.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentStep, setCurrentStep] = useState('topics');
  const [userLocation, setUserLocation] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [caseDetails, setCaseDetails] = useState({
    notes: [],
    documents: [],
    evidence: []
  });

  const steps = {
    topics: 'Select Topic',
    chat: 'AI Chat',
    resources: 'Resources',
    wizard: 'Steps',
    summary: 'Summary'
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentStep('chat');
  };

  const handleBack = () => {
    const stepOrder = Object.keys(steps);
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleVoiceRecord = (audioBlob: Blob) => {
    // Here you would typically send the audio to a speech-to-text service
    // For now, we'll simulate by adding a placeholder message
    const newMessage = {
      type: 'user',
      content: '[Voice Recording Transcription]',
      timestamp: new Date().toISOString(),
      isVoice: true
    };
    setChatHistory([...chatHistory, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Mobile Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {currentStep !== 'topics' && (
                <button
                  onClick={handleBack}
                  className="mr-3 p-2 rounded-full hover:bg-gray-100"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-600" />
                </button>
              )}
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">KnowYourRights</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Progress Steps */}
      <div className="px-4 py-3 mt-14 overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {Object.entries(steps).map(([key, label], index) => (
            <div
              key={key}
              className={`flex items-center ${
                index < Object.keys(steps).indexOf(currentStep)
                  ? 'text-blue-600'
                  : index === Object.keys(steps).indexOf(currentStep)
                  ? 'text-blue-800 font-semibold'
                  : 'text-gray-400'
              }`}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full border-2 border-current text-sm">
                {index + 1}
              </span>
              <span className="ml-2 text-sm">{label}</span>
              {index < Object.keys(steps).length - 1 && (
                <ArrowRight className="mx-2 h-4 w-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Content Area */}
      <main className="px-4 py-4 mb-16">
        {currentStep === 'topics' && (
          <TopicSelector 
            onSelect={handleTopicSelect}
            onVoiceRecord={handleVoiceRecord}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        )}
        {currentStep === 'chat' && (
          <ChatInterface
            topic={selectedTopic}
            onComplete={() => setCurrentStep('resources')}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        )}
        {currentStep === 'resources' && (
          <LocalResources
            topic={selectedTopic}
            location={userLocation}
            onComplete={() => setCurrentStep('wizard')}
          />
        )}
        {currentStep === 'wizard' && (
          <ActionWizard
            topic={selectedTopic}
            onComplete={() => setCurrentStep('summary')}
            caseDetails={caseDetails}
            setCaseDetails={setCaseDetails}
          />
        )}
        {currentStep === 'summary' && (
          <Summary
            topic={selectedTopic}
            chatHistory={chatHistory}
            location={userLocation}
            caseDetails={caseDetails}
          />
        )}
      </main>
    </div>
  );
}

export default App;
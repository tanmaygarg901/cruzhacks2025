import React, { useState } from 'react';
import { Shield, Car, Home, Users, Search, Mic, StopCircle } from 'lucide-react';

interface TopicSelectorProps {
  onSelect: (topic: string) => void;
  onVoiceRecord: (blob: Blob) => void;
  chatHistory: any[];
  setChatHistory: (history: any[]) => void;
}

const topics = [
  {
    id: 'tenant-rights',
    title: 'Tenant Rights',
    icon: Home,
    description: 'Learn about your rights as a tenant and housing laws'
  },
  {
    id: 'traffic-stops',
    title: 'Traffic Stops',
    icon: Car,
    description: 'Understand your rights during traffic stops and police interactions'
  },
  {
    id: 'protest-guidelines',
    title: 'Protest Guidelines',
    icon: Users,
    description: 'Know your rights when participating in protests and demonstrations'
  },
  {
    id: 'car-accident',
    title: 'Car Accident',
    icon: Shield,
    description: 'Steps to take after a car accident and your legal rights'
  }
];

function TopicSelector({ onSelect, onVoiceRecord, chatHistory, setChatHistory }: TopicSelectorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        onVoiceRecord(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const newMessage = {
        type: 'user',
        content: searchQuery,
        timestamp: new Date().toISOString()
      };
      setChatHistory([...chatHistory, newMessage]);
      onSelect('custom-query');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          What would you like to learn about?
        </h1>
        <p className="mt-2 text-gray-600">
          Speak, type, or choose a topic
        </p>
      </div>

      {/* Voice Recording Button */}
      <div className="flex justify-center">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`p-6 rounded-full ${
            isRecording 
              ? 'bg-red-100 text-red-600 animate-pulse' 
              : 'bg-blue-100 text-blue-600'
          }`}
        >
          {isRecording ? (
            <StopCircle className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Search Bar */}
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type your legal question..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm"
        >
          Ask
        </button>
      </form>

      {/* Mobile Topics List */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Common Topics</h2>
        {topics.map((topic) => {
          const IconComponent = topic.icon;
          return (
            <button
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className="w-full flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex-shrink-0">
                <IconComponent className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{topic.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TopicSelector;
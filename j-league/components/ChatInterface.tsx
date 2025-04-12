import React, { useState } from 'react';
import { Send, Mic, Bot } from 'lucide-react';

interface ChatInterfaceProps {
  topic: string;
  onComplete: () => void;
  chatHistory: any[];
  setChatHistory: (history: any[]) => void;
}

function ChatInterface({ topic, onComplete, chatHistory, setChatHistory }: ChatInterfaceProps) {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: 'This is a simulated AI response. In the actual implementation, this would be replaced with the real AI response.',
        timestamp: new Date().toISOString()
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-11rem)] flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Chat Header */}
      <div className="bg-blue-600 p-3 text-white">
        <h2 className="text-lg font-semibold">AI Legal Assistant</h2>
        <p className="text-sm text-blue-100">Discussing: {topic.replace('-', ' ').toUpperCase()}</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.type === 'ai' && (
                <div className="flex items-center mb-1">
                  <Bot className="h-4 w-4 mr-1" />
                  <span className="text-sm font-semibold">AI Assistant</span>
                </div>
              )}
              <p className="text-sm">{msg.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Input Area */}
      <div className="border-t p-3 bg-white">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-2 rounded-full ${
              isRecording ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
            }`}
          >
            <Mic className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-3">
          <button
            onClick={onComplete}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700"
          >
            Continue to Local Resources
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
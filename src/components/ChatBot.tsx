
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart } from "lucide-react";
import SignatureCharacter from "./SignatureCharacter";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "안녕하세요! 마미케어 AI 상담사입니다. 임신과 관련된 궁금한 점이 있으시면 언제든 물어보세요. 😊",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    "입덧이 심해요",
    "태동이 느껴지지 않아요",
    "체중이 많이 늘었어요",
    "잠을 잘 못자겠어요",
    "허리가 아파요"
  ];

  const botResponses: { [key: string]: string } = {
    "입덧": "입덧은 임신 초기에 흔한 증상입니다. 소량씩 자주 드시고, 생강차나 레몬을 활용해보세요. 증상이 심하다면 병원에 상담받으시기 바랍니다.",
    "태동": "20주 이후부터 태동을 느낄 수 있습니다. 조용한 시간에 배에 손을 올리고 집중해보세요. 28주 이후에도 태동이 없다면 병원에 문의하세요.",
    "체중": "임신 중 적절한 체중 증가는 중요합니다. BMI에 따라 권장량이 다르니, 정기검진 때 의사와 상담하시기 바랍니다.",
    "잠": "임신 중기 이후 수면 장애는 흔합니다. 옆으로 누워서 다리 사이에 베개를 끼우면 도움이 됩니다.",
    "허리": "배가 커지면서 허리 통증이 생길 수 있습니다. 적절한 운동과 스트레칭, 그리고 바른 자세를 유지하세요."
  };

  const getResponse = (text: string): string => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (text.includes(key)) {
        return response;
      }
    }
    return "궁금한 점에 대해 더 자세히 알려주시면, 더 정확한 답변을 드릴 수 있습니다. 심각한 증상이라면 반드시 병원에 내원하시기 바랍니다.";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(text),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <SignatureCharacter 
          message="궁금한 것이 있으시면 언제든 말씀해주세요! 도와드릴게요 😊" 
          size="md" 
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-4">AI 상담</h2>
        <p className="text-gray-600">궁금한 점을 언제든 물어보세요</p>
        <Badge className="mt-2 bg-blue-100 text-blue-800">
          24시간 상담 가능
        </Badge>
      </div>

      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">자주 묻는 질문</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => sendMessage(question)}
                className="text-xs"
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Messages */}
      <Card className="h-96">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <span>상담 채팅</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full overflow-y-auto pb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-blue-100 text-blue-900'
                      : 'bg-pink-500 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Message Input */}
      <div className="flex space-x-2">
        <Input
          placeholder="궁금한 점을 입력해주세요..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
        />
        <Button 
          onClick={() => sendMessage(inputText)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          전송
        </Button>
      </div>

      <div className="text-center text-xs text-gray-500 bg-yellow-50 p-3 rounded-lg">
        ⚠️ AI 상담은 참고용이며, 심각한 증상 시 반드시 병원에 내원하세요.
      </div>
    </div>
  );
};

export default ChatBot;

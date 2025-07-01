
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Clock, AlertTriangle } from "lucide-react";
import SignatureCharacter from "./SignatureCharacter";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'normal' | 'warning' | 'tip';
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "안녕하세요! 마미케어 AI 상담사 미미입니다. 😊\n\n임신 28주차에 접어드신 것을 축하드려요! 3분기가 시작되는 중요한 시기네요. 궁금한 점이나 걱정되는 증상이 있으시면 언제든 말씀해주세요. 함께 건강한 임신 여정을 만들어가요! 💕",
      isBot: true,
      timestamp: new Date(),
      type: 'normal'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "입덧이 심해요 😢",
    "태동이 느껴지지 않아요",
    "체중이 많이 늘었어요",
    "잠을 잘 못자겠어요",
    "허리가 아파요",
    "출산 준비는 언제부터?",
    "임신 중 운동해도 되나요?",
    "영양제는 뭘 먹어야 하나요?"
  ];

  const detailedResponses: { [key: string]: { text: string; type: 'normal' | 'warning' | 'tip' } } = {
    "입덧": {
      text: "입덧으로 힘드시는군요. 😔 임신 초기에 매우 흔한 증상이니 너무 걱정하지 마세요!\n\n🌿 **완화 방법:**\n• 소량씩 자주 드세요 (2-3시간마다)\n• 생강차나 레몬물이 도움돼요\n• 기름진 음식은 피하시고\n• 충분한 휴식을 취하세요\n• 비타민 B6 섭취도 도움이 됩니다\n\n⚠️ 하루 종일 토하거나 체중이 급격히 감소한다면 반드시 병원에 내원하세요.",
      type: 'tip'
    },
    "태동": {
      text: "태동에 대해 걱정이 많으시군요. 현재 28주차라면 태동을 충분히 느낄 수 있는 시기예요! 👶\n\n✨ **정상적인 태동:**\n• 하루에 10회 이상 느껴져야 해요\n• 아기가 잠들 때는 태동이 줄어들 수 있어요\n• 엄마가 활동할 때는 덜 느껴질 수 있어요\n\n🕐 **태동 체크법:**\n• 조용히 누워서 2시간 동안 10회 이상 느껴지는지 확인\n• 같은 시간대에 매일 체크해보세요\n\n⚠️ 12시간 동안 태동이 전혀 없거나 현저히 줄어들면 즉시 병원에 연락하세요!",
      type: 'warning'
    },
    "체중": {
      text: "체중 관리에 대한 고민이 있으시는군요. 임신 중 적정 체중 증가는 정말 중요해요! ⚖️\n\n📊 **권장 체중 증가:**\n• 정상 체중: 총 11-16kg\n• 저체중: 총 12.5-18kg\n• 과체중: 총 7-11.5kg\n• 28주까지는 전체 증가량의 60-70% 정도가 적당해요\n\n🥗 **건강한 체중 관리:**\n• 균형 잡힌 식단 유지\n• 적절한 운동 (산책, 수영, 요가)\n• 정기적인 체중 측정\n• 과식보다는 영양가 있는 음식 선택\n\n💡 개인차가 있으니 정기검진 때 의사와 상담하세요!",
      type: 'tip'
    },
    "잠": {
      text: "수면 문제로 고생하고 계시는군요. 임신 중기 이후에는 정말 흔한 고민이에요! 😴\n\n🛏️ **숙면을 위한 팁:**\n• 왼쪽으로 누워서 주무세요 (혈액순환에 좋아요)\n• 다리 사이에 베개를 끼워보세요\n• 잠들기 2시간 전에는 물 섭취를 줄이세요\n• 침실 온도를 18-20도로 유지\n• 따뜻한 우유나 캐모마일 차 도움돼요\n\n🧘‍♀️ **릴렉스 방법:**\n• 가벼운 스트레칭\n• 명상이나 심호흡\n• 조용한 음악 듣기\n• 족욕하기\n\n너무 심하게 잠을 못 주무시면 의사와 상담해보세요!",
      type: 'tip'
    },
    "허리": {
      text: "허리 통증으로 힘드시는군요. 임신 중 허리 통증은 80% 이상의 임산부가 경험해요! 🤱\n\n💪 **통증 완화 방법:**\n• 바른 자세 유지하기\n• 무거운 물건 들지 않기\n• 임산부용 복대 착용 고려\n• 따뜻한 찜질 (너무 뜨겁지 않게)\n• 임산부 요가나 스트레칭\n\n🏃‍♀️ **운동법:**\n• 골반 기울이기 운동\n• 고양이-소 스트레칭\n• 벽 밀기 운동\n• 수영 (부력으로 척추 부담 감소)\n\n⚠️ 다리까지 저리거나 심한 통증이 지속되면 의사와 상담하세요!",
      type: 'warning'
    },
    "출산 준비": {
      text: "출산 준비에 대해 미리 생각하고 계시는군요! 현재 28주라면 준비를 시작하기 좋은 시기예요! 🎒\n\n📅 **시기별 준비사항:**\n\n**지금 (28-32주):**\n• 출산 병원 선택 및 등록\n• 출산 방법 결정 (자연분만/제왕절개)\n• 출산 준비 교육 수강 시작\n\n**32-36주:**\n• 신생아용품 준비\n• 병원 가방 챙기기\n• 육아휴직 신청\n• 산후조리원 예약\n\n**36주 이후:**\n• 언제든 출산 가능한 상태로 대기\n• 병원 연락처 숙지\n• 가족 연락망 정리\n\n💡 너무 서두르지 마시고 차근차근 준비하세요!",
      type: 'tip'
    },
    "운동": {
      text: "임신 중 운동에 대해 궁금하시는군요! 적절한 운동은 임신과 출산에 매우 도움이 돼요! 🤸‍♀️\n\n✅ **추천 운동:**\n• 산책 (하루 30분 정도)\n• 임산부 요가\n• 수영 (관절에 부담 적음)\n• 임산부 필라테스\n• 가벼운 근력운동\n• 케겔 운동 (골반저근 강화)\n\n❌ **피해야 할 운동:**\n• 격렬한 운동\n• 넘어질 위험이 있는 운동\n• 복부에 압박이 가는 운동\n• 고온에서 하는 운동\n\n💡 **운동 시 주의사항:**\n• 운동 전후 충분한 수분 섭취\n• 몸의 신호 잘 듣기\n• 무리하지 않기\n• 의사와 상담 후 시작하기\n\n현재 28주라면 안정적인 시기이니 적절한 운동을 시작해보세요!",
      type: 'tip'
    },
    "영양제": {
      text: "영양제에 대해 궁금하시는군요! 임신 중 적절한 영양소 섭취는 정말 중요해요! 💊\n\n🌟 **필수 영양제:**\n• **엽산** (400-800mcg): 신경관 결손 예방\n• **철분** (30mg): 빈혈 예방 (현재 시기에 특히 중요)\n• **칼슘** (1000mg): 아기 뼈 발달\n• **비타민D** (400-600IU): 칼슘 흡수 도움\n\n🐟 **추가 고려사항:**\n• **오메가3 (DHA)**: 아기 뇌 발달\n• **멀티비타민**: 전체적인 영양 보충\n\n⚠️ **주의사항:**\n• 비타민A 과다 섭취 주의\n• 모든 영양제는 의사와 상담 후 복용\n• 개인의 건강 상태에 따라 필요량이 다를 수 있어요\n\n현재 28주라면 철분 섭취가 특히 중요한 시기예요!",
      type: 'tip'
    }
  };

  const getDetailedResponse = (text: string): { text: string; type: 'normal' | 'warning' | 'tip' } => {
    const lowerText = text.toLowerCase();
    
    for (const [key, response] of Object.entries(detailedResponses)) {
      if (lowerText.includes(key)) {
        return response;
      }
    }
    
    // 기본 응답들
    if (lowerText.includes('안녕') || lowerText.includes('hi')) {
      return {
        text: "안녕하세요! 😊 저는 마미케어 AI 상담사 미미예요. 임신 28주차 맞으시죠? 오늘 컨디션은 어떠세요? 궁금한 점이나 걱정되는 증상이 있으시면 언제든 말씀해주세요!",
        type: 'normal'
      };
    }
    
    if (lowerText.includes('감사') || lowerText.includes('고마워')) {
      return {
        text: "천만에요! 💕 도움이 되어서 정말 기뻐요. 임신 여정에서 항상 함께할게요. 또 궁금한 점이 있으시면 언제든 말씀해주세요. 오늘도 건강한 하루 보내세요! ✨",
        type: 'normal'
      };
    }
    
    return {
      text: "궁금한 점에 대해 더 자세히 알려주시면, 더 정확하고 도움이 되는 답변을 드릴 수 있어요! 😊\n\n현재 28주차이시니까 다음과 같은 주제들에 대해 자세히 안내해드릴 수 있어요:\n• 태동과 아기 건강\n• 출산 준비사항\n• 임신 중 운동과 영양\n• 수면과 컨디션 관리\n• 일반적인 임신 증상들\n\n⚠️ 심각한 증상이나 응급상황이라면 반드시 병원에 내원하시기 바랍니다.",
      type: 'tip'
    };
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
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const response = getDetailedResponse(text);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        type: response.type
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);

    setInputText('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <SignatureCharacter 
          message="28주차 축하드려요! 궁금한 것이 있으시면 언제든 말씀해주세요! 😊" 
          size="md" 
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-4">AI 상담</h2>
        <p className="text-gray-600">전문적이고 따뜻한 임신 상담을 받아보세요</p>
        <Badge className="mt-2 bg-blue-100 text-blue-800">
          24시간 상담 가능 • 28주차 맞춤형
        </Badge>
      </div>

      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>자주 묻는 질문</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => sendMessage(question)}
                className="text-xs h-auto py-2 text-left"
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
            {isTyping && (
              <Badge variant="secondary" className="text-xs">
                미미가 답변 중...
              </Badge>
            )}
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
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.isBot
                      ? message.type === 'warning'
                        ? 'bg-orange-100 text-orange-900 border border-orange-200'
                        : message.type === 'tip'
                        ? 'bg-green-100 text-green-900 border border-green-200'
                        : 'bg-blue-100 text-blue-900'
                      : 'bg-pink-500 text-white'
                  }`}
                >
                  {message.isBot && message.type === 'warning' && (
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-4 h-4 mr-1 text-orange-600" />
                      <span className="text-xs font-medium">주의사항</span>
                    </div>
                  )}
                  {message.isBot && message.type === 'tip' && (
                    <div className="flex items-center mb-2">
                      <Heart className="w-4 h-4 mr-1 text-green-600" />
                      <span className="text-xs font-medium">도움말</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('ko-KR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    {message.isBot && (
                      <Clock className="w-3 h-3 opacity-50" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Message Input */}
      <div className="flex space-x-2">
        <Input
          placeholder="궁금한 점을 자세히 입력해주세요..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
          className="flex-1"
        />
        <Button 
          onClick={() => sendMessage(inputText)}
          className="bg-blue-500 hover:bg-blue-600 px-6"
          disabled={isTyping}
        >
          전송
        </Button>
      </div>

      <div className="text-center text-xs text-gray-500 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <AlertTriangle className="w-4 h-4 mx-auto mb-2 text-yellow-600" />
        <p className="font-medium mb-1">⚠️ 중요한 안내사항</p>
        <p>AI 상담은 참고용이며, 응급상황이나 심각한 증상 시 반드시 병원에 내원하세요.</p>
        <p className="mt-1">정기검진과 의사의 진료를 대체할 수 없습니다.</p>
      </div>
    </div>
  );
};

export default ChatBot;

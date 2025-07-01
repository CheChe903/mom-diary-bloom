
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Image, Baby, Bot, Users } from "lucide-react";
import DailyDiary from "@/components/DailyDiary";
import PhotoGallery from "@/components/PhotoGallery";
import AppointmentManager from "@/components/AppointmentManager";
import WeeklyTips from "@/components/WeeklyTips";
import ChatBot from "@/components/ChatBot";
import Community from "@/components/Community";
import SignatureCharacter from "@/components/SignatureCharacter";

const Index = () => {
  const [currentWeek] = useState(28);
  const [activeTab, setActiveTab] = useState('home');

  const getCharacterMessage = () => {
    const messages = [
      "오늘도 건강한 하루 보내세요! 💕",
      "아기와 함께하는 소중한 시간이에요 🤱",
      "궁금한 것이 있으면 언제든 물어보세요! 😊",
      "오늘의 컨디션은 어떠신가요?",
      "매일매일이 소중한 기록이 될 거예요 ✨"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'diary':
        return <DailyDiary />;
      case 'photos':
        return <PhotoGallery />;
      case 'appointments':
        return <AppointmentManager />;
      case 'tips':
        return <WeeklyTips currentWeek={currentWeek} />;
      case 'chatbot':
        return <ChatBot />;
      case 'community':
        return <Community />;
      default:
        return (
          <div className="space-y-6">
            {/* Header with Character */}
            <div className="text-center py-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
              <div className="mb-4">
                <SignatureCharacter message={getCharacterMessage()} size="lg" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">마미케어</h1>
              <p className="text-gray-600">당신과 아기를 위한 스마트 산모수첩</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Badge variant="secondary" className="bg-pink-200 text-pink-800">
                  임신 {currentWeek}주차
                </Badge>
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-pink-600">28</div>
                  <div className="text-sm text-gray-600">주차</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">일기 작성</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">주수 사진</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">다음 진료</div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span>오늘의 요약</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">체중</span>
                    <span className="font-medium">65.2kg (+12kg)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">체온</span>
                    <span className="font-medium">36.5°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">기분</span>
                    <span className="font-medium">😊 좋음</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={() => setActiveTab('diary')} 
                className="h-16 bg-pink-500 hover:bg-pink-600 text-white"
              >
                <div className="text-center">
                  <Heart className="w-6 h-6 mx-auto mb-1" />
                  <div>일기 쓰기</div>
                </div>
              </Button>
              <Button 
                onClick={() => setActiveTab('chatbot')} 
                className="h-16 bg-purple-500 hover:bg-purple-600 text-white"
              >
                <div className="text-center">
                  <Bot className="w-6 h-6 mx-auto mb-1" />
                  <div>AI 상담</div>
                </div>
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Main Content */}
      <div className="pb-20">
        <div className="container mx-auto px-4 py-6">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Button
            variant={activeTab === 'home' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('home')}
            className="flex-col h-12 px-3"
          >
            <Heart className="w-4 h-4 mb-1" />
            <span className="text-xs">홈</span>
          </Button>
          <Button
            variant={activeTab === 'diary' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('diary')}
            className="flex-col h-12 px-3"
          >
            <Calendar className="w-4 h-4 mb-1" />
            <span className="text-xs">일기</span>
          </Button>
          <Button
            variant={activeTab === 'photos' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('photos')}
            className="flex-col h-12 px-3"
          >
            <Image className="w-4 h-4 mb-1" />
            <span className="text-xs">사진</span>
          </Button>
          <Button
            variant={activeTab === 'tips' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('tips')}
            className="flex-col h-12 px-3"
          >
            <Baby className="w-4 h-4 mb-1" />
            <span className="text-xs">정보</span>
          </Button>
          <Button
            variant={activeTab === 'chatbot' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('chatbot')}
            className="flex-col h-12 px-3"
          >
            <Bot className="w-4 h-4 mb-1" />
            <span className="text-xs">AI상담</span>
          </Button>
          <Button
            variant={activeTab === 'community' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('community')}
            className="flex-col h-12 px-3"
          >
            <Users className="w-4 h-4 mb-1" />
            <span className="text-xs">커뮤니티</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

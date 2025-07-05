
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
import PregnancyProgress from "@/components/PregnancyProgress";
import MedicalAccess from "@/components/MedicalAccess";
import DoctorDashboard from "@/components/DoctorDashboard";
import NurseUpload from "@/components/NurseUpload";

const Index = () => {
  const [currentWeek] = useState(28);
  const [currentDay] = useState(3);
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
        return <WeeklyTips currentWeek={currentWeek} currentDay={currentDay} />;
      case 'chatbot':
        return <ChatBot />;
      case 'community':
        return <Community />;
      case 'medical-access':
        return <MedicalAccess />;
      case 'doctor':
        return <DoctorDashboard />;
      case 'nurse':
        return <NurseUpload />;
      default:
        return (
          <div className="space-y-6">
            {/* Header with Character */}
            <div className="text-center py-8 bg-card border border-border rounded-xl">
              <div className="mb-4">
                <SignatureCharacter message={getCharacterMessage()} size="lg" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">마미케어</h1>
              <p className="text-muted-foreground">당신과 아기를 위한 스마트 산모수첩</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  임신 {currentWeek}주 {currentDay}일차
                </Badge>
                <Heart className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Pregnancy Progress */}
            <PregnancyProgress currentWeek={currentWeek} currentDay={currentDay} />

            {/* Medical Access Quick Link */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">의료진과 연결하기</h3>
                    <p className="text-sm text-muted-foreground">담당 의료진이 내 기록을 확인할 수 있도록 설정하세요</p>
                  </div>
                  <Button 
                    onClick={() => setActiveTab('medical-access')}
                    variant="outline"
                  >
                    설정하기
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-foreground">{currentWeek}주 {currentDay}일</div>
                  <div className="text-sm text-muted-foreground">현재 주차</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-foreground">15</div>
                  <div className="text-sm text-muted-foreground">일기 작성</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">주수 사진</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-foreground">2</div>
                  <div className="text-sm text-muted-foreground">다음 진료</div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Summary */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-muted-foreground" />
                  <span>오늘의 요약</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">체중</span>
                    <div className="text-right">
                      <span className="font-medium">65.2kg</span>
                      <span className="text-sm text-muted-foreground ml-2">(+12kg)</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">체온</span>
                    <span className="font-medium">36.5°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">기분</span>
                    <span className="font-medium">😊 행복해요</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">에너지</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">수분 섭취</span>
                    <span className="font-medium">6잔</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Highlight */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Baby className="w-5 h-5 text-muted-foreground" />
                  <span>이번 주 하이라이트</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    🎉 <strong>28주차</strong>에 접어들면서 아기의 뇌가 급속히 발달하고 있어요!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    👁️ 이제 아기가 눈을 뜨고 감을 수 있고, 꿈도 꿀 수 있답니다.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    💡 3분기가 시작되었어요. 출산 준비를 본격적으로 시작해보세요!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={() => setActiveTab('diary')} 
                className="h-20 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <div className="text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-medium">일기 쓰기</div>
                  <div className="text-xs opacity-90">오늘의 기분과 상태 기록</div>
                </div>
              </Button>
              <Button 
                onClick={() => setActiveTab('chatbot')} 
                className="h-20 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              >
                <div className="text-center">
                  <Bot className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-medium">AI 상담</div>
                  <div className="text-xs opacity-90">궁금한 점을 물어보세요</div>
                </div>
              </Button>
            </div>

            {/* Medical Professional Access */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">의료진이신가요?</h3>
                  <p className="text-sm text-muted-foreground">환자의 증상 기록을 확인하거나 검사 결과를 업로드하세요</p>
                  <div className="flex justify-center space-x-3">
                    <Button 
                      onClick={() => setActiveTab('doctor')}
                      variant="outline"
                    >
                      의사 로그인
                    </Button>
                    <Button 
                      onClick={() => setActiveTab('nurse')}
                      variant="outline"
                    >
                      간호사 로그인
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Motivational Quote */}
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-2">
                    "모든 아기는 엄마 배 속에서 기적을 만들어가고 있어요"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    오늘도 소중한 하루를 함께 만들어가요 💝
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-20">
        <div className="container mx-auto px-4 py-6">
          {renderContent()}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2">
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


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar } from "lucide-react";

const DailyDiary = () => {
  const [diaryData, setDiaryData] = useState({
    weight: '',
    temperature: '',
    mood: '',
    symptoms: '',
    babyMessage: '',
    notes: ''
  });

  const moods = ['😊 좋음', '😐 보통', '😟 걱정', '😴 피곤', '🤗 행복', '😤 짜증'];

  const handleSave = () => {
    console.log('Diary saved:', diaryData);
    alert('일기가 저장되었습니다!');
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">하루 일기</h2>
        <p className="text-gray-600">오늘의 몸 상태와 감정을 기록해보세요</p>
        <Badge variant="outline" className="mt-2">
          {new Date().toLocaleDateString('ko-KR')}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-pink-500" />
            <span>몸 상태 기록</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="weight">체중 (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="65.2"
                value={diaryData.weight}
                onChange={(e) => setDiaryData({...diaryData, weight: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="temperature">체온 (°C)</Label>
              <Input
                id="temperature"
                type="number"
                step="0.1"
                placeholder="36.5"
                value={diaryData.temperature}
                onChange={(e) => setDiaryData({...diaryData, temperature: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <Label>증상 기록</Label>
            <Textarea
              placeholder="오늘 몸의 변화나 느낀 증상을 기록해주세요"
              value={diaryData.symptoms}
              onChange={(e) => setDiaryData({...diaryData, symptoms: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>기분과 감정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>오늘의 기분</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {moods.map((mood) => (
                <Button
                  key={mood}
                  variant={diaryData.mood === mood ? "default" : "outline"}
                  onClick={() => setDiaryData({...diaryData, mood})}
                  className="text-sm"
                >
                  {mood}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Baby className="w-5 h-5 text-purple-500" />
            <span>아기에게 한마디</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="오늘 아기에게 전하고 싶은 말을 적어보세요"
            value={diaryData.babyMessage}
            onChange={(e) => setDiaryData({...diaryData, babyMessage: e.target.value})}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>하루 정리</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="오늘 하루를 돌아보며 자유롭게 적어보세요"
            value={diaryData.notes}
            onChange={(e) => setDiaryData({...diaryData, notes: e.target.value})}
          />
        </CardContent>
      </Card>

      <Button 
        onClick={handleSave}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3"
      >
        일기 저장하기
      </Button>
    </div>
  );
};

export default DailyDiary;

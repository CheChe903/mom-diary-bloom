
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Heart, Calendar, Baby, Thermometer, Weight, Activity } from "lucide-react";

const DailyDiary = () => {
  const [diaryData, setDiaryData] = useState({
    weight: '',
    temperature: '',
    mood: '',
    symptoms: '',
    babyMessage: '',
    notes: '',
    energyLevel: [5],
    sleepQuality: [5],
    appetiteLevel: [5],
    stressLevel: [3],
    exerciseTime: '',
    waterIntake: '',
    supplements: []
  });

  const moods = [
    { emoji: '😊', label: '행복해요', color: 'bg-yellow-100 text-yellow-800' },
    { emoji: '😌', label: '평온해요', color: 'bg-green-100 text-green-800' },
    { emoji: '😟', label: '걱정돼요', color: 'bg-orange-100 text-orange-800' },
    { emoji: '😴', label: '피곤해요', color: 'bg-blue-100 text-blue-800' },
    { emoji: '🤗', label: '설레어요', color: 'bg-pink-100 text-pink-800' },
    { emoji: '😤', label: '짜증나요', color: 'bg-red-100 text-red-800' }
  ];

  const commonSymptoms = [
    '입덧', '어지러움', '피로감', '요통', '부종', '속쓰림', '변비', '두통', '불면증', '태동'
  ];

  const supplements = ['엽산', '철분', '칼슘', '오메가3', '비타민D', '멀티비타민'];

  const handleSupplementToggle = (supplement: string) => {
    setDiaryData(prev => ({
      ...prev,
      supplements: prev.supplements.includes(supplement)
        ? prev.supplements.filter(s => s !== supplement)
        : [...prev.supplements, supplement]
    }));
  };

  const handleSave = () => {
    console.log('Diary saved:', diaryData);
    alert('일기가 저장되었습니다! 💕');
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">하루 일기</h2>
        <p className="text-gray-600">오늘의 몸 상태와 감정을 자세히 기록해보세요</p>
        <Badge variant="outline" className="mt-2">
          {new Date().toLocaleDateString('ko-KR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          })}
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
              <Label htmlFor="weight" className="flex items-center space-x-1">
                <Weight className="w-4 h-4" />
                <span>체중 (kg)</span>
              </Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                placeholder="65.2"
                value={diaryData.weight}
                onChange={(e) => setDiaryData({...diaryData, weight: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="temperature" className="flex items-center space-x-1">
                <Thermometer className="w-4 h-4" />
                <span>체온 (°C)</span>
              </Label>
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="exercise">운동 시간 (분)</Label>
              <Input
                id="exercise"
                type="number"
                placeholder="30"
                value={diaryData.exerciseTime}
                onChange={(e) => setDiaryData({...diaryData, exerciseTime: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="water">수분 섭취 (잔)</Label>
              <Input
                id="water"
                type="number"
                placeholder="8"
                value={diaryData.waterIntake}
                onChange={(e) => setDiaryData({...diaryData, waterIntake: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>에너지 레벨: {diaryData.energyLevel[0]}/10</Label>
              <Slider
                value={diaryData.energyLevel}
                onValueChange={(value) => setDiaryData({...diaryData, energyLevel: value})}
                max={10}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label>수면 품질: {diaryData.sleepQuality[0]}/10</Label>
              <Slider
                value={diaryData.sleepQuality}
                onValueChange={(value) => setDiaryData({...diaryData, sleepQuality: value})}
                max={10}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>

            <div>
              <Label>식욕 정도: {diaryData.appetiteLevel[0]}/10</Label>
              <Slider
                value={diaryData.appetiteLevel}
                onValueChange={(value) => setDiaryData({...diaryData, appetiteLevel: value})}
                max={10}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>

            <div>
              <Label>스트레스 레벨: {diaryData.stressLevel[0]}/10</Label>
              <Slider
                value={diaryData.stressLevel}
                onValueChange={(value) => setDiaryData({...diaryData, stressLevel: value})}
                max={10}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>
          </div>
          
          <div>
            <Label>증상 기록</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {commonSymptoms.map((symptom) => (
                <Button
                  key={symptom}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const currentSymptoms = diaryData.symptoms;
                    const newSymptoms = currentSymptoms.includes(symptom)
                      ? currentSymptoms.replace(symptom, '').replace(/,\s*,/g, ',').replace(/^,|,$/g, '')
                      : currentSymptoms ? `${currentSymptoms}, ${symptom}` : symptom;
                    setDiaryData({...diaryData, symptoms: newSymptoms});
                  }}
                  className={diaryData.symptoms.includes(symptom) ? 'bg-blue-100 text-blue-800' : ''}
                >
                  {symptom}
                </Button>
              ))}
            </div>
            <Textarea
              placeholder="오늘 몸의 변화나 느낀 증상을 자세히 기록해주세요"
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
            <div className="grid grid-cols-2 gap-2 mt-2">
              {moods.map((mood) => (
                <Button
                  key={mood.label}
                  variant={diaryData.mood === mood.label ? "default" : "outline"}
                  onClick={() => setDiaryData({...diaryData, mood: mood.label})}
                  className={`text-sm justify-start ${diaryData.mood === mood.label ? mood.color : ''}`}
                >
                  <span className="mr-2 text-lg">{mood.emoji}</span>
                  {mood.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>영양제 복용</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {supplements.map((supplement) => (
              <Button
                key={supplement}
                variant={diaryData.supplements.includes(supplement) ? "default" : "outline"}
                onClick={() => handleSupplementToggle(supplement)}
                className="text-sm"
              >
                {diaryData.supplements.includes(supplement) && <span className="mr-1">✓</span>}
                {supplement}
              </Button>
            ))}
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
            placeholder="오늘 아기에게 전하고 싶은 사랑의 메시지를 적어보세요 💕"
            value={diaryData.babyMessage}
            onChange={(e) => setDiaryData({...diaryData, babyMessage: e.target.value})}
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>하루 정리</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="오늘 하루를 돌아보며 감사한 일, 특별한 순간, 또는 내일의 다짐을 자유롭게 적어보세요"
            value={diaryData.notes}
            onChange={(e) => setDiaryData({...diaryData, notes: e.target.value})}
            className="min-h-[120px]"
          />
        </CardContent>
      </Card>

      <Button 
        onClick={handleSave}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg font-medium"
      >
        오늘의 기록 저장하기 💕
      </Button>
    </div>
  );
};

export default DailyDiary;

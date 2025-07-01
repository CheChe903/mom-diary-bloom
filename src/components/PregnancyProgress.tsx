
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Baby, Calendar } from "lucide-react";

interface PregnancyProgressProps {
  currentWeek: number;
  currentDay: number;
}

const PregnancyProgress = ({ currentWeek, currentDay }: PregnancyProgressProps) => {
  const totalWeeks = 40;
  const totalDays = totalWeeks * 7;
  const currentTotalDays = (currentWeek * 7) + currentDay;
  const progressPercentage = (currentTotalDays / totalDays) * 100;
  
  const remainingWeeks = totalWeeks - currentWeek;
  const remainingDays = totalDays - currentTotalDays;

  const getTrimester = (week: number) => {
    if (week <= 12) return { name: "1분기", color: "bg-green-500", textColor: "text-green-700" };
    if (week <= 28) return { name: "2분기", color: "bg-blue-500", textColor: "text-blue-700" };
    return { name: "3분기", color: "bg-purple-500", textColor: "text-purple-700" };
  };

  const currentTrimester = getTrimester(currentWeek);

  return (
    <Card className="border-l-4 border-l-pink-400">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Baby className="w-5 h-5 text-pink-500" />
          <span>임신 진행 상황</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">전체 진행률</span>
            <span className="text-gray-600">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="flex justify-between text-xs text-gray-500">
            <span>시작</span>
            <span className={`font-medium ${currentTrimester.textColor}`}>
              {currentTrimester.name}
            </span>
            <span>만삭 (40주)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center p-3 bg-pink-50 rounded-lg">
            <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <div className="text-sm text-gray-600">남은 기간</div>
            <div className="font-bold text-pink-700">
              {remainingWeeks}주 {remainingDays % 7}일
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Baby className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-sm text-gray-600">현재 분기</div>
            <div className={`font-bold ${currentTrimester.textColor}`}>
              {currentTrimester.name}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-lg">
          <div className="text-sm text-gray-700 text-center">
            💝 <strong>{currentWeek}주 {currentDay}일</strong>째 함께하는 소중한 여정
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PregnancyProgress;

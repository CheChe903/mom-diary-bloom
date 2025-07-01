
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart } from "lucide-react";

interface WeeklyTipsProps {
  currentWeek: number;
}

const WeeklyTips = ({ currentWeek }: WeeklyTipsProps) => {
  const weeklyInfo = {
    28: {
      babySize: "가지 크기",
      babyWeight: "약 1.1kg",
      development: ["뇌가 급속히 발달", "눈을 뜨고 감을 수 있음", "꿈을 꿀 수 있음"],
      motherTips: [
        "철분 보충제 복용",
        "충분한 수분 섭취",
        "정기적인 태동 확인",
        "스트레스 관리"
      ],
      warnings: ["조산 징후 주의", "임신성 당뇨 검사", "체중 증가 관리"]
    }
  };

  const currentInfo = weeklyInfo[currentWeek as keyof typeof weeklyInfo] || weeklyInfo[28];

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">주수별 정보</h2>
        <p className="text-gray-600">현재 주수에 맞는 정보를 확인하세요</p>
        <Badge className="mt-2 bg-purple-100 text-purple-800">
          임신 {currentWeek}주차
        </Badge>
      </div>

      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Baby className="w-5 h-5 text-purple-500" />
            <span>아기 발달 정보</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">크기</p>
              <p className="font-semibold text-purple-700">{currentInfo.babySize}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">무게</p>
              <p className="font-semibold text-purple-700">{currentInfo.babyWeight}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">이번 주 발달 사항</h4>
            <ul className="space-y-1">
              {currentInfo.development.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-pink-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-pink-500" />
            <span>엄마를 위한 조언</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2 text-green-700">이렇게 해보세요</h4>
              <ul className="space-y-1">
                {currentInfo.motherTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-orange-700">주의사항</h4>
              <ul className="space-y-1">
                {currentInfo.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠</span>
                    <span className="text-sm">{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>이번 주 체크리스트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">철분제 복용</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">태동 카운트 기록</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">체중 측정</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">병원 예약 확인</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyTips;

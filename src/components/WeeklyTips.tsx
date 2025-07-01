
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, AlertCircle, CheckCircle } from "lucide-react";

interface WeeklyTipsProps {
  currentWeek: number;
  currentDay?: number;
}

const WeeklyTips = ({ currentWeek, currentDay = 0 }: WeeklyTipsProps) => {
  const weeklyInfo = {
    12: {
      babySize: "라임 크기",
      babyWeight: "약 14g",
      babyLength: "약 5.4cm",
      development: ["손가락과 발가락이 분리됨", "성별 구분 가능해짐", "신장이 소변을 만들기 시작"],
      motherTips: [
        "엽산 지속 복용",
        "규칙적인 운동 시작",
        "충분한 수분 섭취",
        "스트레스 관리"
      ],
      warnings: ["유산 위험 감소", "정기검진 필수", "술과 담배 금지"],
      milestones: ["첫 초음파에서 아기 모습 확인", "산전검사 시작"]
    },
    16: {
      babySize: "아보카도 크기",
      babyWeight: "약 100g",
      babyLength: "약 11.6cm",
      development: ["머리카락과 눈썹이 자라기 시작", "청각이 발달", "빨기 반사 시작"],
      motherTips: [
        "칼슘과 철분 섭취 증가",
        "태교 시작하기",
        "편안한 의류 착용",
        "적절한 체중 관리"
      ],
      warnings: ["임신성 당뇨 주의", "고혈압 체크", "부종 관찰"],
      milestones: ["성별 확인 가능", "양수검사 시기"]
    },
    20: {
      babySize: "바나나 크기",
      babyWeight: "약 300g",
      babyLength: "약 16.4cm",
      development: ["태동 시작", "피부에 태지 형성", "뇌 발달 가속화"],
      motherTips: [
        "태동 느끼기 시작",
        "단백질 섭취 늘리기",
        "요가나 수영 추천",
        "배둘레띠 사용 고려"
      ],
      warnings: ["조산 징후 인지", "변비 주의", "정맥류 예방"],
      milestones: ["중간 초음파 검사", "태동 첫 경험"]
    },
    24: {
      babySize: "옥수수 크기",
      babyWeight: "약 600g",
      babyLength: "약 21cm",
      development: ["폐 발달 시작", "청각 완성", "눈을 뜨고 감을 수 있음"],
      motherTips: [
        "임신성 당뇨 검사",
        "철분제 복용 시작",
        "출산 준비 교육 고려",
        "충분한 휴식"
      ],
      warnings: ["임신성 당뇨 검사 필수", "조산 위험 관리", "혈압 모니터링"],
      milestones: ["생존 가능성 증가", "태동 규칙적으로 느끼기 시작"]
    },
    28: {
      babySize: "가지 크기",
      babyWeight: "약 1.1kg",
      babyLength: "약 25cm",
      development: ["뇌가 급속히 발달", "눈을 뜨고 감을 수 있음", "꿈을 꿀 수 있음"],
      motherTips: [
        "철분 보충제 복용",
        "충분한 수분 섭취",
        "정기적인 태동 확인",
        "스트레스 관리"
      ],
      warnings: ["조산 징후 주의", "임신성 당뇨 검사", "체중 증가 관리"],
      milestones: ["3분기 시작", "호흡 연습 가능"]
    },
    32: {
      babySize: "코코넛 크기",
      babyWeight: "약 1.7kg",
      babyLength: "약 28cm",
      development: ["뼈가 단단해짐", "머리카락과 손톱 자람", "체온 조절 능력 발달"],
      motherTips: [
        "출산 준비 교육 참여",
        "병원 가방 준비",
        "수면 자세 조절",
        "호흡법 연습"
      ],
      warnings: ["조산 징후 더욱 주의", "부종 관리", "혈압 체크"],
      milestones: ["출산 준비 본격 시작", "신생아용품 준비"]
    },
    36: {
      babySize: "로메인 상추 크기",
      babyWeight: "약 2.6kg",
      babyLength: "약 32cm",
      development: ["폐 완전 발달", "면역력 획득", "머리가 아래로 향함"],
      motherTips: [
        "출산 신호 인지하기",
        "병원과 연락 체계 확인",
        "충분한 휴식",
        "가족 지원체계 준비"
      ],
      warnings: ["출산 징후 주의", "정기 검진 증가", "응급상황 대비"],
      milestones: ["만삭 임박", "언제든 출산 가능"]
    }
  };

  const currentInfo = weeklyInfo[currentWeek as keyof typeof weeklyInfo] || weeklyInfo[28];

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">주수별 정보</h2>
        <p className="text-gray-600">현재 주수에 맞는 정보를 확인하세요</p>
        <Badge className="mt-2 bg-purple-100 text-purple-800">
          임신 {currentWeek}주 {currentDay}일차
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
          <div className="grid grid-cols-3 gap-4 p-4 bg-purple-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">크기</p>
              <p className="font-semibold text-purple-700">{currentInfo.babySize}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">무게</p>
              <p className="font-semibold text-purple-700">{currentInfo.babyWeight}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">길이</p>
              <p className="font-semibold text-purple-700">{currentInfo.babyLength}</p>
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

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              이번 주 마일스톤
            </h4>
            <ul className="space-y-1">
              {currentInfo.milestones.map((milestone, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✨</span>
                  <span className="text-sm font-medium text-green-700">{milestone}</span>
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
              <h4 className="font-semibold mb-2 text-orange-700 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                주의사항
              </h4>
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
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">출산 준비물 점검</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyTips;

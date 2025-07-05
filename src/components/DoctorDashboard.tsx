
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Search, User, AlertCircle, TrendingUp, Heart, Thermometer, Weight } from "lucide-react";

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // 샘플 환자 데이터
  const patients = [
    {
      id: 1,
      name: '김다은',
      age: 27,
      week: 28,
      day: 3,
      phone: '010-1234-5678',
      lastVisit: '2024-06-17',
      nextVisit: '2024-07-15',
      riskLevel: 'normal'
    },
    {
      id: 2,
      name: '이서연',
      age: 31,
      week: 32,
      day: 1,
      phone: '010-9876-5432',
      lastVisit: '2024-06-20',
      nextVisit: '2024-07-20',
      riskLevel: 'attention'
    }
  ];

  // 샘플 증상 기록 데이터
  const symptomRecords = [
    {
      date: '2024-07-05',
      symptoms: '아랫배 통증, 어지러움',
      weight: '65.2kg',
      temperature: '36.8°C',
      mood: '걱정돼요',
      energyLevel: 4,
      notes: '오후 2시경부터 갑자기 아랫배가 많이 아팠어요. 약간의 어지러움도 있었습니다.',
      babyMessage: '아기야, 엄마가 걱정이 되네.. 건강하게 잘 있지?'
    },
    {
      date: '2024-07-04',
      symptoms: '입덧, 피로감',
      weight: '65.0kg',
      temperature: '36.5°C',
      mood: '평온해요',
      energyLevel: 6,
      notes: '입덧이 조금 있었지만 전반적으로 괜찮은 하루였어요.',
      babyMessage: '오늘도 사랑해 우리 아기 💕'
    },
    {
      date: '2024-07-03',
      symptoms: '요통, 부종',
      weight: '64.8kg',
      temperature: '36.4°C',
      mood: '피곤해요',
      energyLevel: 5,
      notes: '허리가 많이 아프고 발이 조금 부었어요. 오래 서있기가 힘들었습니다.',
      babyMessage: '아기야, 엄마 허리가 아픈데 너는 괜찮니?'
    }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'attention': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const getRiskLevelText = (level: string) => {
    switch (level) {
      case 'high': return '고위험';
      case 'attention': return '주의필요';
      default: return '정상';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">의사 전용 대시보드</h2>
        <p className="text-gray-600">환자의 증상 기록을 확인하고 진료에 활용하세요</p>
      </div>

      {/* 환자 검색 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-blue-500" />
            <span>환자 검색</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="환자명 또는 전화번호로 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button>검색</Button>
          </div>
        </CardContent>
      </Card>

      {/* 환자 목록 */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>환자 목록</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedPatient?.id === patient.id 
                      ? 'bg-blue-50 border-blue-300' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-gray-600">{patient.age}세</p>
                    </div>
                    <Badge className={getRiskLevelColor(patient.riskLevel)}>
                      {getRiskLevelText(patient.riskLevel)}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>임신 {patient.week}주 {patient.day}일</p>
                    <p>다음진료: {patient.nextVisit}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 환자 상세 정보 */}
        <div className="md:col-span-2">
          {selectedPatient ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span>{selectedPatient.name} 환자 정보</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">나이</p>
                      <p className="font-medium">{selectedPatient.age}세</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">임신 주차</p>
                      <p className="font-medium">{selectedPatient.week}주 {selectedPatient.day}일</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">연락처</p>
                      <p className="font-medium">{selectedPatient.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">위험도</p>
                      <Badge className={getRiskLevelColor(selectedPatient.riskLevel)}>
                        {getRiskLevelText(selectedPatient.riskLevel)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="symptoms">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="symptoms">증상 기록</TabsTrigger>
                  <TabsTrigger value="trends">추세 분석</TabsTrigger>
                  <TabsTrigger value="notes">특이사항</TabsTrigger>
                </TabsList>

                <TabsContent value="symptoms" className="space-y-4">
                  {symptomRecords.map((record, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-400">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{record.date}</CardTitle>
                          <Badge variant="outline">
                            <Calendar className="w-3 h-3 mr-1" />
                            {Math.abs(new Date().getTime() - new Date(record.date).getTime()) / (1000 * 60 * 60 * 24) < 1 
                              ? '오늘' 
                              : `${Math.floor(Math.abs(new Date().getTime() - new Date(record.date).getTime()) / (1000 * 60 * 60 * 24))}일 전`
                            }
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-center">
                            <Weight className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">체중</p>
                            <p className="font-medium">{record.weight}</p>
                          </div>
                          <div className="text-center">
                            <Thermometer className="w-5 h-5 text-red-500 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">체온</p>
                            <p className="font-medium">{record.temperature}</p>
                          </div>
                          <div className="text-center">
                            <Heart className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">기분</p>
                            <p className="font-medium">{record.mood}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-800 mb-1">증상</p>
                          <div className="flex flex-wrap gap-2">
                            {record.symptoms.split(', ').map((symptom, i) => (
                              <Badge key={i} variant="secondary" className="bg-red-100 text-red-800">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-gray-800 mb-1">상세 기록</p>
                          <p className="text-gray-600 bg-gray-50 p-2 rounded">{record.notes}</p>
                        </div>

                        <div>
                          <p className="font-medium text-gray-800 mb-1">아기에게 한마디</p>
                          <p className="text-purple-700 bg-purple-50 p-2 rounded italic">{record.babyMessage}</p>
                        </div>

                        <div className="flex justify-end">
                          <Button size="sm" variant="outline">
                            진료 메모 추가
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="trends">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span>추세 분석</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">체중 변화</h4>
                          <p className="text-sm text-green-700">지난 일주일간 꾸준한 증가 (+0.4kg)</p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800 mb-2">주요 증상</h4>
                          <p className="text-sm text-yellow-700">아랫배 통증이 7/5일에 처음 보고됨 - 추가 관찰 필요</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">전반적 컨디션</h4>
                          <p className="text-sm text-blue-700">에너지 레벨 평균 5/10 - 적절한 휴식 권장</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes">
                  <Card>
                    <CardHeader>
                      <CardTitle>진료 노트</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">2024-06-17 진료</p>
                          <p className="text-gray-800">정상 진행 중. 다음 검진 시 당뇨 검사 필요.</p>
                        </div>
                        <Button variant="outline" className="w-full">
                          새 진료 노트 작성
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <Card className="h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>환자를 선택해주세요</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

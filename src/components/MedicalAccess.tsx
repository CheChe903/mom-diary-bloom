
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, Share2, Eye, Calendar, FileText, UserCheck, Lock, Unlock } from "lucide-react";

const MedicalAccess = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isSharing, setIsSharing] = useState(true);
  const [permissions, setPermissions] = useState({
    symptoms: true,
    weight: true,
    temperature: true,
    mood: true,
    photos: false,
    messages: false
  });

  const generateAccessCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setAccessCode(code);
  };

  const authorizedMedical = [
    {
      id: 1,
      name: '김OO 원장',
      hospital: '서울산부인과',
      specialty: '산부인과 전문의',
      lastAccess: '2024-07-05 14:30',
      status: 'active'
    },
    {
      id: 2,
      name: '이OO 간호사',
      hospital: '서울산부인과',
      specialty: '간호사',
      lastAccess: '2024-07-04 16:20',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">의료진 접근 관리</h2>
        <p className="text-gray-600">담당 의료진이 내 기록에 안전하게 접근할 수 있도록 설정하세요</p>
      </div>

      {/* 공유 상태 */}
      <Card className="border-l-4 border-l-blue-400">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-blue-500" />
            <span>의료진 공유 설정</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">의료진 접근 허용</h4>
              <p className="text-sm text-gray-600">담당 의료진이 내 증상 기록을 볼 수 있습니다</p>
            </div>
            <Switch 
              checked={isSharing}
              onCheckedChange={setIsSharing}
            />
          </div>
          
          {isSharing && (
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Unlock className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">공유 활성화됨</span>
              </div>
              <p className="text-sm text-green-700">
                인증된 의료진이 진료에 필요한 정보를 확인할 수 있습니다.
              </p>
            </div>
          )}

          {!isSharing && (
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800">공유 비활성화됨</span>
              </div>
              <p className="text-sm text-red-700">
                의료진이 내 기록에 접근할 수 없습니다.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 접근 코드 생성 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <UserCheck className="w-5 h-5 text-purple-500" />
            <span>의료진 인증 코드</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-3">
              새로운 의료진에게 접근 권한을 부여하려면 인증 코드를 생성하세요.
            </p>
            <div className="flex space-x-2">
              <Input
                value={accessCode}
                readOnly
                placeholder="인증 코드가 여기에 표시됩니다"
                className="flex-1 font-mono text-lg text-center"
              />
              <Button onClick={generateAccessCode}>
                코드 생성
              </Button>
            </div>
            {accessCode && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  💡 이 코드를 담당 의료진에게 알려주세요. 코드는 24시간 후 만료됩니다.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 공유 권한 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span>공유 권한 설정</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {Object.entries(permissions).map(([key, value]) => {
              const labels = {
                symptoms: '증상 기록',
                weight: '체중 정보',
                temperature: '체온 정보',
                mood: '기분/감정',
                photos: '사진 갤러리',
                messages: '아기에게 보낸 메시지'
              };
              
              return (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={key} className="text-sm">
                    {labels[key]}
                  </Label>
                  <Switch
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) => 
                      setPermissions({...permissions, [key]: checked})
                    }
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 인증된 의료진 목록 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-500" />
            <span>인증된 의료진</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {authorizedMedical.map((medical) => (
              <div key={medical.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{medical.name}</h4>
                  <p className="text-sm text-gray-600">{medical.hospital}</p>
                  <p className="text-xs text-gray-500">{medical.specialty}</p>
                  <p className="text-xs text-gray-500">최근 접근: {medical.lastAccess}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">
                    활성
                  </Badge>
                  <Button size="sm" variant="outline">
                    권한 해제
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 접근 로그 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gray-500" />
            <span>최근 접근 기록</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>김OO 원장이 증상 기록을 확인했습니다</span>
              <span className="text-gray-500">2024-07-05 14:30</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>이OO 간호사가 검사 결과를 업로드했습니다</span>
              <span className="text-gray-500">2024-07-04 16:20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>김OO 원장이 진료 메모를 추가했습니다</span>
              <span className="text-gray-500">2024-07-03 10:15</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalAccess;

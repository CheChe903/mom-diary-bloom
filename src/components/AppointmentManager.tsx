
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart } from "lucide-react";

const AppointmentManager = () => {
  const [appointments] = useState([
    { 
      id: 1, 
      date: '2024-07-15', 
      time: '14:00', 
      hospital: '서울산부인과', 
      doctor: '김OO 원장', 
      type: '정기검진',
      status: 'upcoming'
    },
    { 
      id: 2, 
      date: '2024-07-29', 
      time: '10:30', 
      hospital: '서울산부인과', 
      doctor: '김OO 원장', 
      type: '초음파검사',
      status: 'upcoming'
    },
    { 
      id: 3, 
      date: '2024-06-17', 
      time: '15:00', 
      hospital: '서울산부인과', 
      doctor: '김OO 원장', 
      type: '정기검진',
      status: 'completed'
    },
  ]);

  const upcomingAppointments = appointments.filter(app => app.status === 'upcoming');
  const completedAppointments = appointments.filter(app => app.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">진료 일정</h2>
        <p className="text-gray-600">다음 진료일을 확인하고 관리하세요</p>
      </div>

      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
        <Calendar className="w-4 h-4 mr-2" />
        새 진료 일정 추가
      </Button>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Heart className="w-5 h-5 text-pink-500 mr-2" />
          다가오는 진료
        </h3>
        <div className="space-y-3">
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="border-l-4 border-l-pink-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{appointment.type}</h4>
                    <p className="text-sm text-gray-600">{appointment.hospital}</p>
                    <p className="text-sm text-gray-600">{appointment.doctor}</p>
                  </div>
                  <Badge className="bg-pink-100 text-pink-800">
                    {new Date(appointment.date).getMonth() + 1}월 {new Date(appointment.date).getDate()}일
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {appointment.time}
                  </span>
                  <Button size="sm" variant="outline">
                    알림 설정
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Completed Appointments */}
      <div>
        <h3 className="text-lg font-semibold mb-3">완료된 진료</h3>
        <div className="space-y-3">
          {completedAppointments.map((appointment) => (
            <Card key={appointment.id} className="opacity-75">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-600">{appointment.type}</h4>
                    <p className="text-sm text-gray-500">{appointment.hospital}</p>
                  </div>
                  <Badge variant="secondary">
                    완료
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">
                  {appointment.date} {appointment.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentManager;

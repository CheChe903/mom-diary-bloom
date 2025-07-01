
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image, Calendar } from "lucide-react";

const PhotoGallery = () => {
  const [photos] = useState([
    { id: 1, week: 12, type: '초음파', date: '2024-01-15', note: '첫 초음파 검사' },
    { id: 2, week: 16, type: '배 사진', date: '2024-02-12', note: '배가 조금씩 나오기 시작' },
    { id: 3, week: 20, type: '초음파', date: '2024-03-10', note: '성별 확인 - 딸!' },
    { id: 4, week: 24, type: '배 사진', date: '2024-04-08', note: '배가 많이 나왔어요' },
    { id: 5, week: 28, type: '초음파', date: '2024-05-05', note: '건강하게 자라고 있어요' },
  ]);

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">주수 사진첩</h2>
        <p className="text-gray-600">소중한 순간들을 기록해보세요</p>
      </div>

      <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
        <Image className="w-4 h-4 mr-2" />
        새 사진 추가하기
      </Button>

      <div className="grid gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{photo.week}주차</CardTitle>
                <div className="flex space-x-2">
                  <Badge variant={photo.type === '초음파' ? 'default' : 'secondary'}>
                    {photo.type}
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {photo.date}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-3">
                <div className="text-center text-gray-500">
                  <Image className="w-12 h-12 mx-auto mb-2" />
                  <p>{photo.week}주차 {photo.type}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{photo.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center py-8">
        <p className="text-gray-500">더 많은 소중한 순간들을 기록해보세요 💕</p>
      </div>
    </div>
  );
};

export default PhotoGallery;

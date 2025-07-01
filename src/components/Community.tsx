
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Users } from "lucide-react";

interface Post {
  id: number;
  author: string;
  week: number;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Community = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: "예비맘A",
      week: 32,
      title: "입덧이 다시 시작됐어요 ㅠㅠ",
      content: "32주인데 갑자기 입덧이 다시 시작됐어요. 혹시 비슷한 경험 있으신 분들 계신가요?",
      category: "증상",
      likes: 12,
      comments: 8,
      timestamp: "2시간 전"
    },
    {
      id: 2,
      author: "행복한엄마",
      week: 28,
      title: "태동이 너무 신기해요!",
      content: "어제부터 태동이 확실하게 느껴져요! 이런 기분이었구나... 너무 감동이에요 💕",
      category: "일상",
      likes: 25,
      comments: 15,
      timestamp: "4시간 전"
    },
    {
      id: 3,
      author: "첫임신맘",
      week: 16,
      title: "임신복 추천해주세요",
      content: "배가 나오기 시작해서 임신복을 사려고 하는데 추천해주실 곳 있나요?",
      category: "정보",
      likes: 18,
      comments: 22,
      timestamp: "6시간 전"
    },
    {
      id: 4,
      author: "든든한아빠",
      week: 24,
      title: "아내를 위해 할 수 있는 일들",
      content: "임신한 아내를 위해 남편이 할 수 있는 것들을 알려주세요. 최선을 다하고 싶어요.",
      category: "가족",
      likes: 45,
      comments: 31,
      timestamp: "8시간 전"
    }
  ]);

  const categories = ["전체", "증상", "일상", "정보", "가족", "출산준비"];

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">산모 커뮤니티</h2>
        <p className="text-gray-600">같은 경험을 하는 엄마들과 소통해요</p>
        <Badge className="mt-2 bg-green-100 text-green-800">
          <Users className="w-3 h-3 mr-1" />
          1,247명 활동 중
        </Badge>
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
        새 글 작성하기
      </Button>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "전체" ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-pink-100 text-pink-600 text-xs">
                      {post.author.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{post.author}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{post.week}주차</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="font-medium mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-pink-500">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  더보기
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center py-4">
        <Button variant="outline">더 많은 글 보기</Button>
      </div>
    </div>
  );
};

export default Community;


import React from 'react';
import { Heart } from "lucide-react";

interface SignatureCharacterProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  showMessage?: boolean;
}

const SignatureCharacter = ({ 
  message = "안녕하세요! 마미케어와 함께 건강한 임신 여정을 시작해요 💕", 
  size = 'md',
  showMessage = true 
}: SignatureCharacterProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      {/* 캐릭터 아바타 */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg`}>
        {/* 얼굴 */}
        <div className="relative">
          {/* 머리 */}
          <div className="w-16 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full relative">
            {/* 눈 */}
            <div className="absolute top-5 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute top-5 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
            
            {/* 볼터치 */}
            <div className="absolute top-6 left-1 w-3 h-2 bg-pink-300 rounded-full opacity-50"></div>
            <div className="absolute top-6 right-1 w-3 h-2 bg-pink-300 rounded-full opacity-50"></div>
            
            {/* 입 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-800 rounded-b-full"></div>
            
            {/* 머리카락 */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-18 h-8 bg-gradient-to-b from-amber-600 to-amber-500 rounded-t-full"></div>
            
            {/* 리본 */}
            <div className="absolute -top-1 right-2 w-3 h-3 bg-pink-500 transform rotate-45"></div>
            <div className="absolute -top-1 right-4 w-3 h-3 bg-pink-500 transform rotate-45"></div>
          </div>
          
          {/* 임산부 배 */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full"></div>
        </div>
        
        {/* 하트 이펙트 */}
        <Heart className="absolute top-1 right-1 w-3 h-3 text-pink-500 fill-pink-500 animate-pulse" />
      </div>
      
      {/* 메시지 말풍선 */}
      {showMessage && (
        <div className="relative bg-white px-4 py-3 rounded-lg shadow-md border border-pink-100 max-w-xs">
          <p className="text-sm text-gray-700 text-center">{message}</p>
          {/* 말풍선 꼬리 */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-pink-100 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default SignatureCharacter;

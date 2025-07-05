
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Upload, FileImage, FileText, User, CalendarPlus } from "lucide-react";

const NurseUpload = () => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [uploadType, setUploadType] = useState('');
  const [formData, setFormData] = useState({
    patientName: '',
    testType: '',
    testDate: '',
    results: '',
    notes: '',
    nextAppointment: '',
    appointmentType: '',
    doctorNotes: ''
  });

  const patients = [
    { id: 1, name: '김다은', week: 28, day: 3 },
    { id: 2, name: '이서연', week: 32, day: 1 },
    { id: 3, name: '박지은', week: 24, day: 5 }
  ];

  const testTypes = [
    '혈액검사', '소변검사', '초음파검사', '양수검사', '당뇨검사', '기타'
  ];

  const appointmentTypes = [
    '정기검진', '초음파검사', '혈액검사', '전문의상담', '응급진료'
  ];

  const handleUpload = () => {
    console.log('업로드 데이터:', { selectedPatient, uploadType, formData });
    alert('업로드가 완료되었습니다! 산모가 앱에서 확인할 수 있습니다.');
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">간호사 업로드 시스템</h2>
        <p className="text-gray-600">검사결과, 초음파 이미지, 다음 진료일을 업로드하세요</p>
      </div>

      {/* 환자 선택 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-500" />
            <span>환자 선택</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedPatient === patient.name 
                    ? 'bg-blue-50 border-blue-300' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  setSelectedPatient(patient.name);
                  setFormData({...formData, patientName: patient.name});
                }}
              >
                <h4 className="font-medium">{patient.name}</h4>
                <p className="text-sm text-gray-600">임신 {patient.week}주 {patient.day}일</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedPatient && (
        <>
          {/* 업로드 타입 선택 */}
          <Card>
            <CardHeader>
              <CardTitle>업로드 유형 선택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant={uploadType === 'test-results' ? 'default' : 'outline'}
                  className="h-20 flex-col"
                  onClick={() => setUploadType('test-results')}
                >
                  <FileText className="w-8 h-8 mb-2" />
                  <span>검사결과</span>
                </Button>
                <Button
                  variant={uploadType === 'ultrasound' ? 'default' : 'outline'}
                  className="h-20 flex-col"
                  onClick={() => setUploadType('ultrasound')}
                >
                  <FileImage className="w-8 h-8 mb-2" />
                  <span>초음파 이미지</span>
                </Button>
                <Button
                  variant={uploadType === 'appointment' ? 'default' : 'outline'}
                  className="h-20 flex-col"
                  onClick={() => setUploadType('appointment')}
                >
                  <CalendarPlus className="w-8 h-8 mb-2" />
                  <span>다음 진료일</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 검사결과 업로드 */}
          {uploadType === 'test-results' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-500" />
                  <span>검사결과 업로드</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="testType">검사 종류</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {testTypes.map((type) => (
                      <Button
                        key={type}
                        variant={formData.testType === type ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFormData({...formData, testType: type})}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="testDate">검사일</Label>
                  <Input
                    id="testDate"
                    type="date"
                    value={formData.testDate}
                    onChange={(e) => setFormData({...formData, testDate: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="results">검사 결과</Label>
                  <Textarea
                    id="results"
                    placeholder="검사 결과를 상세히 입력해주세요"
                    value={formData.results}
                    onChange={(e) => setFormData({...formData, results: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="file-upload">검사 결과지 첨부</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">파일을 드래그하거나 클릭하여 업로드</p>
                    <Input type="file" className="mt-2" accept=".pdf,.jpg,.png" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">추가 메모</Label>
                  <Textarea
                    id="notes"
                    placeholder="산모에게 전달할 추가 정보가 있다면 입력해주세요"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* 초음파 이미지 업로드 */}
          {uploadType === 'ultrasound' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileImage className="w-5 h-5 text-purple-500" />
                  <span>초음파 이미지 업로드</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ultrasound-date">촬영일</Label>
                  <Input
                    id="ultrasound-date"
                    type="date"
                    value={formData.testDate}
                    onChange={(e) => setFormData({...formData, testDate: e.target.value})}
                  />
                </div>

                <div>
                  <Label>초음파 이미지</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileImage className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">초음파 이미지를 업로드해주세요</p>
                    <Input type="file" className="mt-2" accept=".jpg,.png,.jpeg" multiple />
                  </div>
                </div>

                <div>
                  <Label htmlFor="ultrasound-notes">소견</Label>
                  <Textarea
                    id="ultrasound-notes"
                    placeholder="초음파 소견을 입력해주세요 (예: 태아 발육 정상, 추정체중 1.2kg 등)"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* 다음 진료일 설정 */}
          {uploadType === 'appointment' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>다음 진료일 설정</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="next-appointment">다음 진료일</Label>
                  <Input
                    id="next-appointment"
                    type="datetime-local"
                    value={formData.nextAppointment}
                    onChange={(e) => setFormData({...formData, nextAppointment: e.target.value})}
                  />
                </div>

                <div>
                  <Label>진료 유형</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {appointmentTypes.map((type) => (
                      <Button
                        key={type}
                        variant={formData.appointmentType === type ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFormData({...formData, appointmentType: type})}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="doctor-notes">의사 메모</Label>
                  <Textarea
                    id="doctor-notes"
                    placeholder="다음 진료 시 주의사항이나 특별히 확인할 내용을 입력해주세요"
                    value={formData.doctorNotes}
                    onChange={(e) => setFormData({...formData, doctorNotes: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* 업로드 버튼 */}
          {uploadType && (
            <div className="flex justify-center">
              <Button 
                onClick={handleUpload}
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
              >
                <Upload className="w-5 h-5 mr-2" />
                업로드 완료
              </Button>
            </div>
          )}
        </>
      )}

      {/* 최근 업로드 내역 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 업로드 내역</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">김다은 - 혈액검사 결과</p>
                <p className="text-sm text-gray-600">2024-07-05 14:30</p>
              </div>
              <Badge variant="secondary">완료</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">이서연 - 초음파 이미지</p>
                <p className="text-sm text-gray-600">2024-07-04 10:15</p>
              </div>
              <Badge variant="secondary">완료</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NurseUpload;

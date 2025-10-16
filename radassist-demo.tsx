import React, { useState } from 'react';
import { FileText, Activity, TrendingUp, AlertCircle, CheckCircle, Clock, Users, BarChart3, Upload, Sparkles, Brain, Target, Shield } from 'lucide-react';

export default function RadAssistDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedReport, setSelectedReport] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Sample data
  const dashboardStats = [
    { label: 'Pending Follow-ups', value: '847', change: '-12%', icon: Clock, color: 'text-orange-600' },
    { label: 'Reports Processed', value: '3,429', change: '+23%', icon: FileText, color: 'text-blue-600' },
    { label: 'Cases Flagged', value: '156', change: '+8%', icon: AlertCircle, color: 'text-red-600' },
    { label: 'Avg. Turnaround', value: '4.2h', change: '-18%', icon: TrendingUp, color: 'text-green-600' }
  ];

  const pendingCases = [
    { id: 1, patient: 'NHS-2847392', date: '2025-10-14', priority: 'High', finding: 'Pulmonary nodule 8mm - follow-up in 3 months', status: 'Pending' },
    { id: 2, patient: 'NHS-2847401', date: '2025-10-13', priority: 'Medium', finding: 'Liver lesion - recommend MRI', status: 'Pending' },
    { id: 3, patient: 'NHS-2847289', date: '2025-10-12', priority: 'High', finding: 'Suspicious breast mass - urgent ultrasound', status: 'Flagged' },
    { id: 4, patient: 'NHS-2847156', date: '2025-10-11', priority: 'Low', finding: 'Incidental renal cyst - routine follow-up', status: 'Pending' }
  ];

  const sampleReport = {
    original: `CHEST CT WITH CONTRAST

CLINICAL HISTORY: 67-year-old male smoker with persistent cough and weight loss.

TECHNIQUE: Helical CT of the chest was performed with intravenous contrast.

FINDINGS:
LUNGS: There is a spiculated nodule in the right upper lobe measuring 22 x 18 mm with mild surrounding ground glass opacity. Multiple smaller nodules are present bilaterally, the largest measuring 6mm in the left lower lobe. No pleural effusion or pneumothorax.

MEDIASTINUM: Mild mediastinal lymphadenopathy, with the largest node measuring 12mm in the right paratracheal region. Heart size is normal.

CHEST WALL: No chest wall abnormality.

UPPER ABDOMEN: Limited views show no acute abnormality.

IMPRESSION:
1. Spiculated right upper lobe nodule measuring 22mm with surrounding ground glass opacity - highly concerning for primary lung malignancy. Urgent clinical correlation and tissue diagnosis recommended.
2. Multiple bilateral pulmonary nodules - likely metastatic disease vs synchronous primaries.
3. Mediastinal lymphadenopathy - suggestive of nodal involvement.
4. Recommend urgent respiratory referral and MDT discussion.

Dr. Sarah Mitchell, Consultant Radiologist
14/10/2025 14:32`,
    summary: {
      keyFindings: [
        'Suspicious 22mm right upper lobe lung nodule with spiculation',
        'Multiple bilateral pulmonary nodules (largest 6mm)',
        'Mediastinal lymphadenopathy (12mm right paratracheal)'
      ],
      urgency: 'URGENT',
      followUpAction: 'Urgent respiratory referral and MDT discussion required',
      recommendedTimeframe: 'Within 2 weeks',
      patientFriendly: 'A CT scan of the chest has shown an abnormal area in the right lung that requires urgent specialist review. Additional small spots were noted in both lungs and some enlarged lymph nodes in the chest. Your GP will arrange for you to see a lung specialist urgently for further tests.'
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file.name);
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setSelectedReport(sampleReport);
        setActiveTab('workflow');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">RadAssist AI</h1>
                <p className="text-xs text-blue-300">NHS Radiology Workflow Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-white font-medium">Demo Environment</p>
                <p className="text-xs text-blue-300">Ubong Fabian Ekeruke</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                UF
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800/30 backdrop-blur-sm border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'dashboard', label: 'Impact Dashboard', icon: BarChart3 },
              { id: 'workflow', label: 'AI Workflow Tracker', icon: Brain },
              { id: 'summary', label: 'Smart Summary', icon: Sparkles },
              { id: 'upload', label: 'Upload Report', icon: Upload }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-blue-500 bg-blue-500/10'
                    : 'text-blue-200 hover:text-white hover:bg-blue-500/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome to RadAssist AI</h2>
                  <p className="text-blue-100 mb-4">Empowering NHS radiology teams with intelligent workflow automation</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm">DSPT Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      <span className="text-sm">Azure Powered</span>
                    </div>
                  </div>
                </div>
                <Activity className="w-20 h-20 opacity-20" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.color} bg-blue-500/10 p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      stat.change.startsWith('-') ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Workload Distribution */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Workload Distribution
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Dr. Smith', cases: 156, percent: 85 },
                    { name: 'Dr. Johnson', cases: 142, percent: 78 },
                    { name: 'Dr. Williams', cases: 128, percent: 70 },
                    { name: 'Dr. Brown', cases: 98, percent: 53 }
                  ].map((doc, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{doc.name}</span>
                        <span className="text-blue-400 font-medium">{doc.cases} cases</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          style={{ width: `${doc.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priority Cases */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Priority Breakdown
                </h3>
                <div className="flex items-center justify-center h-48">
                  <div className="relative">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#1e293b" strokeWidth="20"/>
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="188 377" strokeLinecap="round"/>
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="113 377" strokeDashoffset="-188" strokeLinecap="round"/>
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="76 377" strokeDashoffset="-301" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-white">847</p>
                        <p className="text-xs text-gray-400">Total Cases</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"/>
                      <span className="text-sm text-gray-300">High (156)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"/>
                      <span className="text-sm text-gray-300">Medium (342)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"/>
                      <span className="text-sm text-gray-300">Low (349)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workflow Tracker Tab */}
        {activeTab === 'workflow' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-400" />
                AI-Detected Follow-up Cases
              </h2>
              <p className="text-gray-400 mb-6">Automatically tracked pending actions from radiology reports</p>
              
              <div className="space-y-3">
                {pendingCases.map(case_ => (
                  <div 
                    key={case_.id} 
                    className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all cursor-pointer"
                    onClick={() => setSelectedReport(sampleReport)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white font-medium">{case_.patient}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            case_.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                            case_.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {case_.priority}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            case_.status === 'Flagged' ? 'bg-red-500/20 text-red-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {case_.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{case_.finding}</p>
                        <p className="text-gray-500 text-xs mt-2">Reported: {case_.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-all">
                          Review
                        </button>
                        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-all">
                          Complete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Smart Summary Tab */}
        {activeTab === 'summary' && selectedReport && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Original Report */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-400" />
                  Original Report
                </h3>
                <div className="bg-slate-900/50 rounded-lg p-4 text-gray-300 text-sm font-mono whitespace-pre-line h-96 overflow-y-auto border border-blue-500/10">
                  {selectedReport.original}
                </div>
              </div>

              {/* AI Summary */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  AI-Generated Summary
                </h3>
                
                <div className="space-y-4">
                  {/* Urgency Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                    selectedReport.summary.urgency === 'URGENT' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-bold">{selectedReport.summary.urgency}</span>
                  </div>

                  {/* Key Findings */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Findings:</h4>
                    <ul className="space-y-2">
                      {selectedReport.summary.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Follow-up Action */}
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2">Recommended Action:</h4>
                    <p className="text-blue-200 text-sm mb-2">{selectedReport.summary.followUpAction}</p>
                    <p className="text-blue-300 text-xs">⏱ Timeframe: {selectedReport.summary.recommendedTimeframe}</p>
                  </div>

                  {/* Patient-Friendly Version */}
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <h4 className="text-white font-semibold mb-2">Patient Communication:</h4>
                    <p className="text-green-200 text-sm leading-relaxed">{selectedReport.summary.patientFriendly}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Upload className="w-6 h-6 text-blue-400" />
                Upload Radiology Report
              </h2>
              <p className="text-gray-400 mb-8">Upload a radiology report to see AI analysis in action</p>
              
              <div className="border-2 border-dashed border-blue-500/30 rounded-xl p-12 text-center hover:border-blue-500/50 transition-all">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".txt,.pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium mb-2">
                    {processing ? 'Processing...' : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Supported formats: TXT, PDF, DOC, DOCX
                  </p>
                  {uploadedFile && !processing && (
                    <p className="text-green-400 text-sm mt-4">✓ Uploaded: {uploadedFile}</p>
                  )}
                  {processing && (
                    <div className="mt-6 flex items-center justify-center gap-3">
                      <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                      <span className="text-blue-400">AI analyzing report...</span>
                    </div>
                  )}
                </label>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/10">
                  <Brain className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">AI Analysis</h4>
                  <p className="text-gray-400 text-sm">Intelligent extraction of key findings</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/10">
                  <Target className="w-8 h-8 text-green-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">Follow-up Detection</h4>
                  <p className="text-gray-400 text-sm">Automatic tracking of action items</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/10">
                  <Sparkles className="w-8 h-8 text-purple-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">Smart Summaries</h4>
                  <p className="text-gray-400 text-sm">GP-friendly and patient communications</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-md border-t border-blue-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-400">
              © 2025 RadAssist AI | Built on Microsoft Azure | NHS DSPT Compliant
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="mailto:contact@radassistai.com" className="hover:text-white transition-colors">
                contact@radassistai.com
              </a>
              <span>|</span>
              <a href="https://www.radassistai.com" className="hover:text-white transition-colors">
                www.radassistai.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
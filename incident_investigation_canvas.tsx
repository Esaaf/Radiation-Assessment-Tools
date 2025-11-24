import React, { useState } from 'react';
import { Search, AlertCircle, Settings, FileCheck, TrendingUp, Layers, BookOpen } from 'lucide-react';

const InvestigationCanvas = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [completedItems, setCompletedItems] = useState({});

  const toggleComplete = (category, item) => {
    const key = `${category}-${item}`;
    setCompletedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const investigationData = {
    timeline: {
      title: "Incident Timeline Reconstruction",
      icon: Search,
      color: "blue",
      sections: [
        {
          phase: "Pre-Transport",
          items: [
            "Gauge assembly inspection completed",
            "Transport container preparation",
            "Fastener installation and torque check",
            "Transport documentation prepared",
            "Driver briefing conducted"
          ]
        },
        {
          phase: "During Transport",
          items: [
            "Departure from mining site logged",
            "Route conditions documented",
            "Stop locations and durations",
            "Vehicle vibration and road conditions",
            "Estimated loss window identified"
          ]
        },
        {
          phase: "Discovery",
          items: [
            "Arrival inspection revealed missing fastener",
            "Source absence confirmed",
            "Immediate supervisor notification",
            "Regulatory authority contacted",
            "Search operation initiated"
          ]
        }
      ]
    },
    rootCause: {
      title: "Root Cause Analysis",
      icon: Layers,
      color: "red",
      sections: [
        {
          phase: "Immediate Causes",
          items: [
            "Fastener failure or inadequate installation",
            "Insufficient securing of capsule in housing",
            "Vibration-induced dislodgement",
            "Capsule housing design inadequacy",
            "Missing secondary retention mechanism"
          ]
        },
        {
          phase: "Contributing Factors",
          items: [
            "Road conditions and vehicle vibration",
            "Maintenance or inspection gaps",
            "Packaging design not transport-rated",
            "Inadequate pre-transport checks",
            "Unclear responsibility for inspection"
          ]
        },
        {
          phase: "Systemic Issues",
          items: [
            "Transport procedure inadequacies",
            "Training gaps for transport personnel",
            "Regulatory compliance verification weak",
            "Quality assurance program deficiencies",
            "Lack of transport packaging standards"
          ]
        }
      ]
    },
    technical: {
      title: "Technical Investigation",
      icon: Settings,
      color: "purple",
      sections: [
        {
          phase: "Hardware Analysis",
          items: [
            "Fastener metallurgy and failure mode",
            "Thread engagement measurements",
            "Torque specifications review",
            "Housing material stress analysis",
            "Vibration testing of assembly"
          ]
        },
        {
          phase: "Design Review",
          items: [
            "Transport package certification status",
            "Compliance with transport regulations",
            "Secondary containment assessment",
            "Fastener redundancy evaluation",
            "Tamper-evident seal requirements"
          ]
        },
        {
          phase: "Operational Factors",
          items: [
            "Route selection and road conditions",
            "Vehicle suspension performance",
            "Packaging placement in vehicle",
            "Frequency of in-transit inspections",
            "Driver awareness and training"
          ]
        }
      ]
    },
    corrective: {
      title: "Corrective Actions",
      icon: AlertCircle,
      color: "green",
      sections: [
        {
          phase: "Immediate (0-30 days)",
          items: [
            "Suspend all similar transports",
            "Inspect all gauges for fastener integrity",
            "Implement dual-fastener system",
            "Add secondary retention device",
            "Enhanced pre-transport checklist"
          ]
        },
        {
          phase: "Short-term (1-6 months)",
          items: [
            "Redesign transport packaging",
            "Certification to transport regulations",
            "GPS tracking for all shipments",
            "Tamper-evident seals mandatory",
            "In-transit inspection protocols"
          ]
        },
        {
          phase: "Long-term (6-12 months)",
          items: [
            "Comprehensive transport procedure overhaul",
            "Enhanced training program development",
            "Quality assurance system revision",
            "Regular packaging integrity audits",
            "Industry best practice adoption"
          ]
        }
      ]
    },
    preventive: {
      title: "Preventive Measures",
      icon: TrendingUp,
      color: "orange",
      sections: [
        {
          phase: "Engineering Controls",
          items: [
            "Capsule permanently welded in housing",
            "Triple-redundant fastening system",
            "Shock-absorbent transport packaging",
            "Real-time GPS and tilt sensors",
            "Alarmed transport containers"
          ]
        },
        {
          phase: "Administrative Controls",
          items: [
            "Two-person verification for closure",
            "Photo documentation before transport",
            "Mandatory route planning approval",
            "Daily transport condition log",
            "Quarterly packaging inspections"
          ]
        },
        {
          phase: "Emergency Preparedness",
          items: [
            "Lost source response plan tested",
            "Survey equipment pre-staged along routes",
            "Public communication templates ready",
            "Recovery team training and drills",
            "Regulatory notification procedure practiced"
          ]
        }
      ]
    },
    verification: {
      title: "Verification & Closeout",
      icon: FileCheck,
      color: "indigo",
      sections: [
        {
          phase: "Action Verification",
          items: [
            "Corrective actions implemented and tested",
            "Updated procedures reviewed by regulator",
            "Personnel trained on new requirements",
            "Equipment modifications completed",
            "Documentation system updated"
          ]
        },
        {
          phase: "Effectiveness Review",
          items: [
            "Trial transports under new system",
            "Independent audit of changes",
            "Staff competency assessments",
            "Similar event monitoring period",
            "Industry peer review conducted"
          ]
        },
        {
          phase: "Regulatory Closeout",
          items: [
            "Final investigation report submitted",
            "Regulator acceptance obtained",
            "Lessons learned disseminated",
            "License conditions updated",
            "Transport authorization renewed"
          ]
        }
      ]
    }
  };

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: Search },
    { id: 'rootCause', label: 'Root Cause', icon: AlertCircle },
    { id: 'technical', label: 'Technical', icon: Settings },
    { id: 'corrective', label: 'Corrective', icon: AlertCircle },
    { id: 'preventive', label: 'Preventive', icon: TrendingUp },
    { id: 'verification', label: 'Verification', icon: FileCheck }
  ];

  const currentData = investigationData[activeTab];
  const Icon = currentData.icon;

  const calculateProgress = () => {
    const total = Object.keys(completedItems).length;
    const completed = Object.values(completedItems).filter(Boolean).length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-2xl p-6 mb-6 text-white">
          <div className="flex items-start gap-4">
            <BookOpen className="w-12 h-12 flex-shrink-0" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                Incident Investigation & Corrective Action Canvas
              </h1>
              <h2 className="text-xl mb-2 text-blue-100">
                Cs-137 Capsule Loss During Transport
              </h2>
              <p className="text-blue-100">
                Root cause analysis, technical investigation, and comprehensive corrective action plan
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-lg p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg text-gray-900">Investigation Progress</h3>
            <span className="text-2xl font-bold text-blue-600">{calculateProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Click items below to mark as completed
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-fit px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-b-4 border-blue-800'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r from-${currentData.color}-500 to-${currentData.color}-600 p-6 text-white`}>
            <div className="flex items-center gap-3">
              <Icon className="w-10 h-10" />
              <h2 className="text-2xl font-bold">{currentData.title}</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {currentData.sections.map((section, idx) => (
                <div key={idx} className="border-l-4 border-gray-300 pl-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className={`bg-${currentData.color}-100 text-${currentData.color}-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}>
                      {idx + 1}
                    </span>
                    {section.phase}
                  </h3>
                  
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => {
                      const key = `${section.phase}-${itemIdx}`;
                      const isCompleted = completedItems[key];
                      
                      return (
                        <div
                          key={itemIdx}
                          onClick={() => toggleComplete(section.phase, itemIdx)}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                            isCompleted 
                              ? 'bg-green-50 border border-green-300' 
                              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300'
                          }`}>
                            {isCompleted && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm flex-1 ${
                            isCompleted ? 'text-green-800 font-medium' : 'text-gray-700'
                          }`}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Findings Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-5 border-t-4 border-red-500">
            <h4 className="font-bold text-gray-900 mb-2">Primary Failure</h4>
            <p className="text-sm text-gray-700">Fastener failure allowed capsule dislodgement from housing during transport vibration</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 border-t-4 border-yellow-500">
            <h4 className="font-bold text-gray-900 mb-2">Contributing Factor</h4>
            <p className="text-sm text-gray-700">Inadequate transport packaging design and lack of secondary retention mechanism</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 border-t-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-2">Prevention Focus</h4>
            <p className="text-sm text-gray-700">Implement redundant fastening, certified packaging, and real-time tracking systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationCanvas;
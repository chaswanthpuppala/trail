'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function FarmerPayTracker() {
  const initialTasks = [
    { id: 1, phase: 'Foundation & Planning', week: 0, task: 'Legal entity setup', priority: 'Critical', status: 'Complete', comments: '', history: [] },
    { id: 2, phase: 'Foundation & Planning', week: 0, task: 'Market research and feasibility', priority: 'High', status: 'Complete', comments: '', history: [] },
    { id: 3, phase: 'Foundation & Planning', week: 0, task: 'Business model finalized', priority: 'High', status: 'Complete', comments: '', history: [] },
    { id: 4, phase: 'Foundation & Planning', week: 1, task: 'Define remaining product specs', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 5, phase: 'Software Development', week: 1, task: 'Complete payment processing module', priority: 'Critical', status: 'In Progress', comments: '', history: [] },
    { id: 6, phase: 'Software Development', week: 1, task: 'Finish KYC system', priority: 'High', status: 'In Progress', comments: '', history: [] },
    { id: 7, phase: 'Software Development', week: 2, task: 'Complete admin dashboard', priority: 'Medium', status: 'In Progress', comments: '', history: [] },
    { id: 8, phase: 'Software Development', week: 2, task: 'Integrate SMS/USSD', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 9, phase: 'Software Development', week: 4, task: 'Security audit', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 10, phase: 'Software Development', week: 4, task: 'Final QA and bug fixing', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 11, phase: 'Banking Partnership', week: 1, task: 'Research and shortlist banks', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 12, phase: 'Banking Partnership', week: 1, task: 'Prepare partnership proposal', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 13, phase: 'Banking Partnership', week: 2, task: 'Initial bank meetings', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 14, phase: 'Banking Partnership', week: 3, task: 'Negotiate and draft MOU', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 15, phase: 'Banking Partnership', week: 5, task: 'Sign MOU', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 16, phase: 'Banking Partnership', week: 6, task: 'API integration', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 17, phase: 'Insurance Partnerships', week: 2, task: 'Identify insurance companies', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 18, phase: 'Insurance Partnerships', week: 3, task: 'Begin negotiations', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 19, phase: 'Insurance Partnerships', week: 5, task: 'Sign agreements', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 20, phase: 'Insurance Partnerships', week: 6, task: 'Platform integration', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 21, phase: 'Regulatory & Compliance', week: 1, task: 'Submit payment license application', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 22, phase: 'Regulatory & Compliance', week: 2, task: 'Implement KYC/AML systems', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 23, phase: 'Regulatory & Compliance', week: 2, task: 'Data privacy compliance', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 24, phase: 'Financial Planning', week: 1, task: '3-year financial projections', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 25, phase: 'Financial Planning', week: 1, task: 'Pricing strategy', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 26, phase: 'Financial Planning', week: 2, task: 'Fundraising deck', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 27, phase: 'Financial Planning', week: 2, task: 'Set up accounting systems', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 28, phase: 'Fund Mobilization', week: 1, task: 'Calculate funding requirements', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 29, phase: 'Fund Mobilization', week: 2, task: 'Identify target investors', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 30, phase: 'Fund Mobilization', week: 3, task: 'Investor meetings', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 31, phase: 'Fund Mobilization', week: 5, task: 'Negotiate term sheets', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 32, phase: 'Fund Mobilization', week: 7, task: 'Close seed funding', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 33, phase: 'Pilot Location', week: 3, task: 'Analyze potential regions', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 34, phase: 'Pilot Location', week: 4, task: 'Site visits', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 35, phase: 'Pilot Location', week: 5, task: 'Finalize location', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 36, phase: 'Pilot Location', week: 6, task: 'Set up local office', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 37, phase: 'Hiring - Leadership', week: 1, task: 'Define CTO role', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 38, phase: 'Hiring - Leadership', week: 2, task: 'Recruit CTO', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 39, phase: 'Hiring - Leadership', week: 4, task: 'Define COO role', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 40, phase: 'Hiring - Leadership', week: 5, task: 'Recruit COO', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 41, phase: 'Hiring - Leadership', week: 6, task: 'Onboard CTO and COO', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 42, phase: 'Hiring - Core Team', week: 6, task: 'Recruit Finance Manager', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 43, phase: 'Hiring - Core Team', week: 6, task: 'Recruit Operations Manager', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 44, phase: 'Hiring - Core Team', week: 6, task: 'Recruit Marketing Manager', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 45, phase: 'Hiring - Field Team', week: 7, task: 'Recruit field staff (3-5)', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 46, phase: 'Hiring - Field Team', week: 7, task: 'Recruit customer support', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 47, phase: 'Hiring - Field Team', week: 8, task: 'Train all staff', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 48, phase: 'Partnership Ecosystem', week: 4, task: 'Partner with FPOs/cooperatives', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 49, phase: 'Partnership Ecosystem', week: 5, task: 'Engage input suppliers', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 50, phase: 'Partnership Ecosystem', week: 7, task: 'Relationships with mandis', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 51, phase: 'Pilot Preparation', week: 7, task: 'Farmer onboarding materials', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 52, phase: 'Pilot Preparation', week: 7, task: 'Marketing collateral', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 53, phase: 'Pilot Preparation', week: 8, task: 'Set up KPIs', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 54, phase: 'Pilot Preparation', week: 9, task: 'Staff training', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 55, phase: 'Pilot Preparation', week: 9, task: 'Analytics dashboard', priority: 'High', status: 'Not Started', comments: '', history: [] },
    { id: 56, phase: 'Pilot Launch', week: 10, task: 'Soft launch (20-30 farmers)', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
    { id: 57, phase: 'Pilot Launch', week: 11, task: 'Official launch event', priority: 'Medium', status: 'Not Started', comments: '', history: [] },
    { id: 58, phase: 'Pilot Launch', week: 11, task: 'Scale farmer onboarding', priority: 'Critical', status: 'Not Started', comments: '', history: [] },
  ];

  const [tasks, setTasks] = useState([]);
  const [expandedTasks, setExpandedTasks] = useState(new Set());
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterWeek, setFilterWeek] = useState('All');
  const [filterPhase, setFilterPhase] = useState('All');
  const [lastUpdated, setLastUpdated] = useState('Never');

  useEffect(() => {
    const stored = localStorage.getItem('farmerPayTasks');
    setTasks(stored ? JSON.parse(stored) : initialTasks);
    setLastUpdated(localStorage.getItem('farmerPayLastUpdated') || 'Never');
  }, []);

  const saveTasks = (updatedTasks) => {
    localStorage.setItem('farmerPayTasks', JSON.stringify(updatedTasks));
    const now = new Date().toLocaleString();
    localStorage.setItem('farmerPayLastUpdated', now);
    setLastUpdated(now);
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (id, newStatus) => {
    const task = tasks.find(t => t.id === id);
    if (task.status !== newStatus) {
      const updatedTasks = tasks.map(t => {
        if (t.id === id) {
          const history = t.history || [];
          history.push({
            date: new Date().toISOString(),
            type: 'status',
            oldValue: t.status,
            newValue: newStatus
          });
          return { ...t, status: newStatus, history };
        }
        return t;
      });
      saveTasks(updatedTasks);
    }
  };

  const saveComment = (id, commentText) => {
    const task = tasks.find(t => t.id === id);
    const updatedTasks = tasks.map(t => {
      if (t.id === id) {
        const history = t.history || [];
        if (commentText !== t.comments && commentText !== '') {
          history.push({
            date: new Date().toISOString(),
            type: 'comment',
            value: commentText
          });
        }
        return { ...t, comments: commentText, history };
      }
      return t;
    });
    saveTasks(updatedTasks);
    alert('Comment saved!');
  };

  const toggleTask = (id) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTasks(newExpanded);
  };

  const stats = {
    total: tasks.length,
    complete: tasks.filter(t => t.status === 'Complete').length,
    inProgress: tasks.filter(t => t.status === 'In Progress').length,
    notStarted: tasks.filter(t => t.status === 'Not Started').length,
  };

  const progressPercent = Math.round((stats.complete / stats.total) * 100);

  const filteredTasks = tasks.filter(task => {
    if (filterStatus !== 'All' && task.status !== filterStatus) return false;
    if (filterWeek !== 'All' && task.week !== parseInt(filterWeek)) return false;
    if (filterPhase !== 'All' && task.phase !== filterPhase) return false;
    return true;
  });

  const phases = [...new Set(tasks.map(t => t.phase))];
  const weeks = [...new Set(tasks.map(t => t.week))].sort((a, b) => a - b);

  const getStatusClass = (status) => {
    if (status === 'Complete') return 'bg-green-100 border-green-500 text-green-800';
    if (status === 'In Progress') return 'bg-blue-100 border-blue-500 text-blue-800';
    return 'bg-gray-100 border-gray-400 text-gray-700';
  };

  const getPriorityColor = (priority) => {
    if (priority === 'Critical') return 'text-red-600';
    if (priority === 'High') return 'text-orange-600';
    return 'text-blue-600';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">FarmerPay Project Tracker</h1>
          <p className="text-gray-600 mb-4">Track daily progress with comments and history</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{stats.complete}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-600">{stats.notStarted}</div>
              <div className="text-sm text-gray-600">Not Started</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span className="font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="All">All Statuses</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Week</label>
              <select
                value={filterWeek}
                onChange={(e) => setFilterWeek(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="All">All Weeks</option>
                {weeks.map(week => (
                  <option key={week} value={week}>Week {week}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phase</label>
              <select
                value={filterPhase}
                onChange={(e) => setFilterPhase(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="All">All Phases</option>
                {phases.map(phase => (
                  <option key={phase} value={phase}>{phase}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {filteredTasks.map(task => {
            const isExpanded = expandedTasks.has(task.id);
            const hasHistory = task.history && task.history.length > 0;

            return (
              <div key={task.id} className={`bg-white rounded-lg shadow border-l-4 ${getStatusClass(task.status)}`}>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-semibold text-gray-500">Week {task.week}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className={`text-xs font-semibold ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                        {hasHistory && <span className="text-xs text-blue-600">• {task.history.length} updates</span>}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1">{task.task}</h3>
                      <p className="text-sm text-gray-600 mb-2">{task.phase}</p>

                      {task.comments && (
                        <div className="text-sm text-gray-700 bg-yellow-50 border-l-2 border-yellow-400 p-2 rounded mb-2">
                          <strong>Latest comment:</strong> {task.comments}
                        </div>
                      )}

                      <button
                        onClick={() => toggleTask(task.id)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {isExpanded ? '▼ Hide Details' : '▶ Show Details & History'}
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded-lg"
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t bg-gray-50 rounded-lg p-4">
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          📝 Daily Comments / Notes:
                        </label>
                        <textarea
                          id={`comment-${task.id}`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          rows="3"
                          defaultValue={task.comments || ''}
                          placeholder="Add your daily updates, blockers, or notes here..."
                        />
                        <button
                          onClick={() => {
                            const text = document.getElementById(`comment-${task.id}`).value;
                            saveComment(task.id, text);
                          }}
                          className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                        >
                          Save Comment
                        </button>
                      </div>

                      {hasHistory ? (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            📜 Task History ({task.history.length} entries):
                          </h4>
                          <div className="space-y-3 max-h-64 overflow-y-auto">
                            {task.history.slice().reverse().map((entry, idx) => (
                              <div key={idx} className="border-l-2 border-gray-300 pl-3">
                                <div className="text-xs text-gray-500 mb-1">{formatDate(entry.date)}</div>
                                <div className="text-sm">
                                  {entry.type === 'status' && (
                                    <>
                                      <span className="font-medium">Status changed:</span>{' '}
                                      <span className="text-gray-600">{entry.oldValue}</span>
                                      <span className="text-gray-400"> → </span>
                                      <span className="text-gray-800 font-semibold">{entry.newValue}</span>
                                    </>
                                  )}
                                  {entry.type === 'comment' && (
                                    <>
                                      <span className="font-medium">Comment added:</span>{' '}
                                      <span className="text-gray-700">{entry.value}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 italic">No history yet. Updates will appear here.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTasks.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-500">No tasks match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

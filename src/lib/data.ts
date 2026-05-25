import type { ActivityEvent, DemoMetric, DemoRecord, NavItem } from './types'

export const metrics: DemoMetric[] = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'approval', label: 'Approval Rate', value: '91%', change: '+7.2%', trend: 'up', detail: 'Decisions completed without escalation' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
  { id: 'risk', label: 'Risk Removed', value: '36', change: '+11', trend: 'up', detail: 'Exceptions closed before handoff' },
]

export const records: DemoRecord[] = [
  { id: 'rec_001', name: 'Enterprise approval desk', customer: 'Northstar Ventures', status: 'approved', owner: 'Avery Shah', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Send executive proof pack', notes: 'Legal, finance, and success evidence reconciled for buyer review.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Renewal risk triage', customer: 'Atlas Commerce', status: 'in_review', owner: 'Mina Patel', value: 64000, priority: 'high', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve discount exception', notes: 'Pricing mismatch detected between signed order and CRM renewal record.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Campaign proof package', customer: 'Signal Labs', status: 'queued', owner: 'Jordan Lee', value: 41000, priority: 'medium', confidence: 81, cycleTime: '3.0d', nextStep: 'Attach final KPI export', notes: 'Client-ready report needs final attribution and narrative summary.', createdAt: '2026-05-04' },
  { id: 'rec_004', name: 'Revenue leakage review', customer: 'BrightPath Health', status: 'blocked', owner: 'Priya Raman', value: 53000, priority: 'high', confidence: 72, cycleTime: '4.6d', nextStep: 'Escalate missing approval', notes: 'Two approval artifacts missing from procurement thread.', createdAt: '2026-05-06' },
  { id: 'rec_005', name: 'Expansion qualification', customer: 'LedgerWorks', status: 'approved', owner: 'Noah Kim', value: 78000, priority: 'high', confidence: 94, cycleTime: '1.5d', nextStep: 'Book paid roadmap session', notes: 'Usage threshold and buyer intent both crossed expansion trigger.', createdAt: '2026-05-08' },
  { id: 'rec_006', name: 'Implementation handoff', customer: 'Cobalt Supply', status: 'in_review', owner: 'Elena Moore', value: 36000, priority: 'medium', confidence: 86, cycleTime: '2.7d', nextStep: 'Confirm success criteria', notes: 'Delivery team needs acceptance criteria before sprint planning.', createdAt: '2026-05-09' },
  { id: 'rec_007', name: 'Compliance evidence vault', customer: 'Riverline Bank', status: 'queued', owner: 'Marcus Chen', value: 97000, priority: 'high', confidence: 79, cycleTime: '3.3d', nextStep: 'Normalize audit fields', notes: 'Audit evidence imported but field names are inconsistent.', createdAt: '2026-05-10' },
  { id: 'rec_008', name: 'Vendor onboarding flow', customer: 'Summit Solutions', status: 'approved', owner: 'Sarah Davies', value: 29000, priority: 'low', confidence: 90, cycleTime: '1.9d', nextStep: 'Finalize contract in Docusign', notes: 'Legal review complete, awaiting vendor signature.', createdAt: '2026-05-11' },
  { id: 'rec_009', name: 'Q3 budget allocation', customer: 'Evergreen Corp', status: 'in_review', owner: 'David Chen', value: 112000, priority: 'high', confidence: 85, cycleTime: '3.1d', nextStep: 'Present to finance committee', notes: 'Proposed budget requires executive sign-off for release.', createdAt: '2026-05-12' },
  { id: 'rec_010', name: 'Product roadmap review', customer: 'Horizon Tech', status: 'blocked', owner: 'Olivia White', value: 72000, priority: 'medium', confidence: 68, cycleTime: '5.0d', nextStep: 'Re-align with engineering capacity', notes: 'New feature requests exceed current sprint capacity.', createdAt: '2026-05-13' },
]

export const activityEvents: ActivityEvent[] = [
  { id: 'act_001', title: 'Proof pack generated for Enterprise approval desk', actor: 'Avery Shah', timestamp: '2026-05-14T10:30:00Z', status: 'approved' },
  { id: 'act_002', title: 'Discount exception escalated for Renewal risk triage', actor: 'Mina Patel', timestamp: '2026-05-14T09:15:00Z', status: 'in_review' },
  { id: 'act_003', title: 'KPI export attached to Campaign proof package', actor: 'Jordan Lee', timestamp: '2026-05-13T16:00:00Z', status: 'queued' },
  { id: 'act_004', title: 'Approval missing for Revenue leakage review', actor: 'Priya Raman', timestamp: '2026-05-13T14:45:00Z', status: 'blocked' },
  { id: 'act_005', title: 'Paid roadmap session booked for Expansion qualification', actor: 'Noah Kim', timestamp: '2026-05-13T11:20:00Z', status: 'approved' },
  { id: 'act_006', title: 'Success criteria confirmed for Implementation handoff', actor: 'Elena Moore', timestamp: '2026-05-12T17:00:00Z', status: 'in_review' },
  { id: 'act_007', title: 'Audit fields normalized for Compliance evidence vault', actor: 'Marcus Chen', timestamp: '2026-05-12T15:30:00Z', status: 'queued' },
  { id: 'act_008', title: 'Contract sent for signature for Vendor onboarding flow', actor: 'Sarah Davies', timestamp: '2026-05-12T10:00:00Z', status: 'approved' },
  { id: 'act_009', title: 'Budget presentation scheduled for Q3 budget allocation', actor: 'David Chen', timestamp: '2026-05-11T16:45:00Z', status: 'in_review' },
  { id: 'act_010', title: 'Engineering capacity reviewed for Product roadmap review', actor: 'Olivia White', timestamp: '2026-05-11T13:00:00Z', status: 'blocked' },
]

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Proof Packs', href: '/dashboard/proof-packs', badge: '10' },
  { label: 'Workflows', href: '/dashboard/workflows' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Settings', href: '/dashboard/settings' },
]
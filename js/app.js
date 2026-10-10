const icon = (name) => {
  const paths = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    reception: '<path d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6M9 9h.01M15 9h.01"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/><path d="M3 12h5l2-3 3 6 2-3h5"/>',
    stethoscope: '<path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="10" r="2"/>',
    pharmacy: '<path d="M10 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M8 10h5M8 14h4M16 3v6M13 6h6"/><path d="m16 15 4-4 2 2-4 4-3 1z"/>',
    lab: '<path d="M9 3h6M10 3v7L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 16h8"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    chart: '<path d="M3 3v18h18M8 15l4-4 4 3 5-7"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 1 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 1 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 1 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 1 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 1 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
};

const navGroups = [
  { label: 'Workspace', links: [['index.html', 'Overview', 'grid'], ['patients.html', 'Patients', 'users'], ['reception.html', 'Reception', 'reception'], ['nursing.html', 'Nursing & Triage', 'heart'], ['consultations.html', 'Consultations', 'stethoscope']] },
  { label: 'Services', links: [['pharmacy.html', 'Pharmacy', 'pharmacy'], ['laboratory.html', 'Laboratory', 'lab'], ['appointments.html', 'Appointments', 'calendar']] },
  { label: 'Management', links: [['reports.html', 'Reports', 'chart'], ['administration.html', 'Administration', 'users'], ['settings.html', 'Settings', 'settings']] }
];
const people = [
  { name: 'Amara Nsubuga', id: 'KG-24018', initials: 'AN', age: '34', gender: 'Female', phone: '+256 700 123 456', reason: 'Follow-up · General', status: 'Waiting' },
  { name: 'Daniel Okello', id: 'KG-24017', initials: 'DO', age: '52', gender: 'Male', phone: '+256 772 456 123', reason: 'Review · Cardiology', status: 'In consultation' },
  { name: 'Sarah Namusoke', id: 'KG-24016', initials: 'SN', age: '27', gender: 'Female', phone: '+256 781 234 567', reason: 'New patient · General', status: 'Checked in' },
  { name: 'Peter Ssemanda', id: 'KG-24015', initials: 'PS', age: '41', gender: 'Male', phone: '+256 755 890 234', reason: 'Laboratory review', status: 'Completed' },
  { name: 'Grace Achieng', id: 'KG-24014', initials: 'GA', age: '19', gender: 'Female', phone: '+256 702 345 678', reason: 'Acute · Paediatrics', status: 'Triage' }
];
const statusBadge = (status) => {
  const type = /waiting|pending|low|urgent|review/i.test(status) ? 'amber' : /consultation|checked|processing|scheduled/i.test(status) ? 'blue' : /complete|released|active|dispensed|verified/i.test(status) ? 'green' : /high|critical|overdue/i.test(status) ? 'red' : 'gray';
  return `<span class="badge badge-${type}">${status}</span>`;
};
const personCell = (person) => `<div class="person-cell"><span class="mini-avatar">${person.initials}</span><div><strong>${person.name}</strong><span>${person.id}</span></div></div>`;
const heading = (title, description, actions = '') => `<div class="page-heading"><div><h1>${title}</h1><p>${description}</p></div><div class="heading-actions">${actions}</div></div>`;
const button = (text, cls = 'button-primary', action = '') => `<button class="button ${cls}" ${action ? `data-action="${action}"` : ''}>${text}</button>`;
const card = (title, content, extra = '') => `<section class="card"><div class="card-header"><h2>${title}</h2>${extra}</div>${content}</section>`;
const table = (headers, rows) => `<div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
let formFieldSequence = 0;
const formField = (label, placeholder = '', type = 'text', options = '') => {
  const id = `demo-field-${++formFieldSequence}`;
  const optional = /optional|notes|comment|address|allerg|blood group|emergency/i.test(label);
  const required = optional ? '' : 'required';
  const control = options
    ? `<select id="${id}" class="field-control" ${required}><option value="">${placeholder || 'Select an option'}</option>${options.split('|').map(o => `<option>${o}</option>`).join('')}</select>`
    : `<input id="${id}" class="field-control" type="${type}" placeholder="${placeholder}" ${required}>`;
  return `<div class="form-field"><label for="${id}">${label}</label>${control}</div>`;
};
const note = (text, color = '') => `<div class="notice ${color}">${text}</div>`;
const stats = (items) => `<div class="stats-grid">${items.map(([label, value, foot, ico, color]) => `<section class="card stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon ${color || ''}">${icon(ico)}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></section>`).join('')}</div>`;
const patientRows = people.map((p, i) => `<tr data-searchable><td>${personCell(p)}</td><td>${p.age} · ${p.gender}</td><td>${p.phone}</td><td>${p.reason}</td><td>${statusBadge(p.status)}</td><td><button class="button button-outline button-small" data-action="patient-profile" data-id="${i}">View</button></td></tr>`).join('');
const appointmentRows = [
  ['09:00 AM', 'Amara Nsubuga', 'General medicine', 'Dr. M. Kato', 'Checked in'],
  ['09:30 AM', 'Daniel Okello', 'Cardiology', 'Dr. J. Atim', 'In consultation'],
  ['10:15 AM', 'Sarah Namusoke', 'New patient', 'Dr. M. Kato', 'Scheduled'],
  ['11:00 AM', 'Grace Achieng', 'Paediatrics', 'Dr. R. Ssebuufu', 'Scheduled']
].map(([time, name, reason, clinician, status], i) => `<tr data-searchable><td>${time}</td><td><strong>${name}</strong><br><span class="muted">${people[i].id}</span></td><td>${reason}</td><td>${clinician}</td><td>${statusBadge(status)}</td></tr>`).join('');

function dashboard(role = 'Administrator') {
  const roleCopy = { Receptionist: 'Today at a glance — registration, check-ins and the waiting room.', Nurse: 'Triage workload, patient observations and care priorities.', Clinician: 'Your consultation list, results and follow-up priorities.', Pharmacist: 'Prescription queue, stock levels and dispensing activity.', 'Laboratory staff': 'Specimen workflow, outstanding tests and results to verify.', Management: 'A service overview of activity across the demonstration clinic.' };
  const cards = role === 'Receptionist' ? [['Arrivals today', '48', '+8% from yesterday', 'users'], ['Checked in', '32', '67% of arrivals', 'reception', 'blue'], ['Waiting', '09', 'Average wait 18 min', 'calendar', 'amber'], ['Appointments', '26', 'Next at 09:30 AM', 'calendar', 'purple']]
    : role === 'Nurse' ? [['Awaiting triage', '09', '3 priority assessments', 'heart', 'amber'], ['Triage completed', '24', 'Today so far', 'heart'], ['Vitals recorded', '31', 'Across 24 patients', 'chart', 'blue'], ['Escalations', '02', 'Clinician review needed', 'bell', 'purple']]
    : role === 'Clinician' ? [['Consultation queue', '08', '2 patients waiting', 'stethoscope', 'blue'], ['Seen today', '16', '+3 from yesterday', 'users'], ['Results to review', '04', 'Laboratory', 'lab', 'amber'], ['Follow-ups due', '06', 'Next 7 days', 'calendar', 'purple']]
    : role === 'Pharmacist' ? [['Pending prescriptions', '12', '4 ready to dispense', 'pharmacy', 'blue'], ['Dispensed today', '27', '+5 from yesterday', 'pharmacy'], ['Low stock items', '05', 'Review stock levels', 'chart', 'amber'], ['Expiring soon', '03', 'Next 30 days', 'calendar', 'purple']]
    : role === 'Laboratory staff' ? [['Pending requests', '14', '5 urgent', 'lab', 'amber'], ['Specimens collected', '21', 'Today so far', 'heart'], ['Processing', '08', 'Across 6 test types', 'chart', 'blue'], ['To verify', '03', 'Results awaiting review', 'users', 'purple']]
    : [['Total patients', '2,486', '<span class="positive">+12%</span> this month', 'users'], ["Today's appointments", '48', 'Across 6 departments', 'calendar', 'blue'], ['Patients waiting', '09', 'Average wait 18 min', 'reception', 'amber'], ['Active consultations', '06', '2 clinicians available', 'stethoscope', 'purple']];
  const title = role === 'Administrator' ? 'Good morning, Admin' : `Good morning, ${role}`;
  return `${heading(title, roleCopy[role] || "Here’s what’s happening at Kagando Clinic today.", `<button class="button button-outline" data-action="date-picker">${icon('calendar')} October 10, 2026</button>${button(`${icon('plus')} New patient`, 'button-primary', 'new-patient')}`)}
    ${stats(cards)}
    <div class="content-grid">
      ${card("Today's patient flow", `<div class="card-body"><div class="chart-legend"><span><i class="legend-dot"></i>Arrivals</span><span><i class="legend-dot pale"></i>Completed</span><span>Last 7 days</span></div><div class="trend-chart">${[['Mon',48,63],['Tue',67,80],['Wed',55,73],['Thu',83,91],['Fri',61,76],['Sat',40,52],['Sun',24,33]].map(([day,a,b]) => `<div class="chart-column"><div class="chart-bar" style="height:${b}%"></div><div class="chart-bar dark" style="height:${a}%"></div><span class="chart-day">${day}</span></div>`).join('')}</div></div>`)}
      ${card('Patient queue', `<div class="card-body"><div class="queue-list">${people.slice(0,4).map((p,i) => `<div class="queue-row"><div class="queue-number">${String(i+1).padStart(2,'0')}</div><div><strong>${p.name}</strong><small>${p.reason}</small></div>${statusBadge(i===0?'Waiting':i===1?'In consultation':'Checked in')}</div>`).join('')}</div></div>`, '<a class="text-link" href="reception.html">Full queue</a>')}
    </div>
    <div class="content-grid equal">
      ${card('Recent patient registrations', table(['Patient','Age / sex','Registered','Status'], people.slice(0,4).map((p,i)=>`<tr data-searchable><td>${personCell(p)}</td><td>${p.age} / ${p.gender==='Female'?'F':'M'}</td><td>Oct ${10-i}, 2026</td><td>${statusBadge(i===0?'New':'Active')}</td></tr>`).join('')), '<a class="text-link" href="patients.html">View all</a>')}
      ${card('Upcoming appointments', table(['Time','Patient','Visit','Status'], appointmentRows.split('</tr>').slice(0,3).join('</tr>')+'</tr>'), '<a class="text-link" href="appointments.html">View schedule</a>')}
    </div>
    ${note('Demonstration environment · All names, records and activity shown here are fictional sample data. Nothing is connected to clinical services.', 'blue')}`;
}

function patientsPage() {
  return `${heading('Patient management','Register patients, review demographic details and explore fictional encounter history.', `${button(`${icon('plus')} Register patient`, 'button-primary', 'new-patient')}`)}
  ${stats([['Total patients','2,486','Across all departments','users'],['Registered today','12','Since 8:00 AM','plus','blue'],['Active records','2,391','96% of directory','heart','purple'],['Follow-ups due','36','Next 7 days','calendar','amber']])}
  ${card('Patient directory', `<div class="toolbar"><input class="field-control" type="search" data-table-search placeholder="Search name, patient ID or phone…" aria-label="Search patients"><select class="field-control" data-filter><option value="">All statuses</option><option>Waiting</option><option>In consultation</option><option>Checked in</option><option>Completed</option><option>Triage</option></select><span class="muted">Showing 5 sample records</span></div>${table(['Patient','Age / sex','Phone','Visit reason','Status',''], patientRows)}`)}
  <div class="content-grid equal" style="margin-top:17px">${card('Patient profile preview', `<div class="card-body" id="patient-preview"><div class="person-cell" style="margin-bottom:18px"><span class="avatar">AN</span><div><strong>Amara Nsubuga</strong><span>KG-24018 · Registered 12 Jun 2024</span></div></div><dl class="detail-list"><div><dt>Date of birth</dt><dd>14 May 1992 (34 years)</dd></div><div><dt>Sex</dt><dd>Female</dd></div><div><dt>Phone</dt><dd>+256 700 123 456</dd></div><div><dt>Next of kin</dt><dd>Fictional contact</dd></div><div><dt>Blood group</dt><dd>O positive</dd></div><div><dt>Address</dt><dd>Kagando, Uganda</dd></div></dl><div class="notice" style="margin-top:16px">Allergy: Penicillin · Current medicines: none recorded</div><h3 class="section-title" style="margin-top:18px">Recent encounter</h3><div class="timeline"><div class="timeline-item"><div class="timeline-date">Oct 10, 2026</div><div class="timeline-mark"></div><div class="timeline-copy"><strong>General medicine · Follow-up</strong><p>Consultation in progress · Dr. M. Kato</p></div></div><div class="timeline-item"><div class="timeline-date">Sep 18, 2026</div><div class="timeline-mark"></div><div class="timeline-copy"><strong>Outpatient · Review</strong><p>Encounter completed · Sample history</p></div></div></div></div>`, '<button class="button button-outline button-small" data-action="edit-patient">Edit details</button>')}${card('Registration form', `<div class="card-body"><form class="demo-form" data-success="Patient registration saved in this demo."><div class="form-grid">${formField('First name','e.g. Amara')}${formField('Last name','e.g. Nsubuga')}${formField('Date of birth','','date')}${formField('Sex','Select sex','','Female|Male|Other|Prefer not to say')}${formField('Phone number','e.g. +256 700 000 000','tel')}${formField('Email address','name@example.com','email')}${formField('Address','Town / district')}${formField('Emergency contact','Name and phone')}${formField('Known allergies','Enter allergies','text')}${formField('Blood group','Select if known','','A positive|A negative|B positive|B negative|AB positive|AB negative|O positive|O negative')}</div><div class="form-actions">${button('Save patient','button-primary')}</div></form></div>`)}</div>`;
}

function receptionPage() {
  return `${heading('Reception & check-in','Manage arrivals, check patients in and keep the waiting room moving.',button(`${icon('plus')} Register patient`,'button-primary','new-patient'))}
  ${stats([['Expected today','48','26 appointments scheduled','calendar','blue'],['Checked in','32','67% of expected arrivals','reception'],['Waiting room','09','Average wait 18 min','users','amber'],['Checked out','17','Today so far','heart','purple']])}
  <div class="content-grid equal">${card('Check in a patient', `<div class="card-body"><form class="demo-form" data-success="Patient checked in. Queue number Q-034 assigned."><div class="form-grid">${formField('Find patient','Name, patient ID or phone')}${formField('Appointment','Select appointment','','Today · 09:00 AM|Today · 09:30 AM|Walk-in')}${formField('Visit type','Select visit','','General medicine|Follow-up|Specialist review|Walk-in')}${formField('Department','Select department','','Outpatient|Cardiology|Paediatrics|Maternity|Laboratory')}</div><div class="form-actions">${button('Confirm check-in','button-primary')}</div></form></div>`)}
  ${card('Today’s appointments', table(['Time','Patient','Visit','Clinician','Status'],appointmentRows),'<a class="text-link" href="appointments.html">Full schedule</a>')}</div>
  ${card('Waiting list', table(['Queue','Patient','Priority','Checked in','Status',''], people.map((p,i)=>`<tr data-searchable><td><strong>Q-${String(34+i).padStart(3,'0')}</strong></td><td>${personCell(p)}</td><td>${statusBadge(i===4?'Priority review':'Routine')}</td><td>0${9+i}:1${i} AM</td><td>${statusBadge(p.status)}</td><td><button class="button button-outline button-small" data-action="check-in">Call next</button></td></tr>`).join('')))}
  <div style="margin-top:16px">${note('Check-in is a demonstration only. No patient information is transmitted or stored.', 'blue')}</div>`;
}

function nursingPage() {
  return `${heading('Nursing & triage','Capture observations and identify patients who may need priority review.',button(`${icon('heart')} Start triage`,'button-primary','triage-form'))}
  ${stats([['Awaiting triage','09','3 priority assessments','heart','amber'],['Completed today','24','Across all departments','users'],['Priority review','03','Clinician attention','bell','purple'],['Average triage','08 min','Target under 10 min','calendar','blue']])}
  <div class="content-grid equal">${card('Patients awaiting triage', `<div class="card-body"><div class="queue-list">${people.filter((_,i)=>i!==1).map((p,i)=>`<div class="queue-row"><div class="queue-number">Q-${34+i}</div><div><strong>${p.name}</strong><small>${p.age} years · ${p.reason}</small></div>${statusBadge(i===3?'Priority review':'Waiting')}</div>`).join('')}</div></div>`)}
  ${card('Triage assessment', `<div class="card-body"><form class="demo-form" data-success="Triage assessment saved in this demo."><div class="form-grid three-cols">${formField('Patient','Search patient or queue #')}${formField('Temperature','°C','number')}${formField('Blood pressure','e.g. 120/80 mmHg')}${formField('Pulse','bpm','number')}${formField('Respiratory rate','breaths/min','number')}${formField('Oxygen saturation','%','number')}${formField('Height','cm','number')}${formField('Weight','kg','number')}${formField('Priority','Select priority','','Routine|Urgent|Emergency')}</div><div class="form-grid" style="margin-top:14px">${formField('Presenting symptoms','Describe symptoms')}${formField('Nursing notes','Observations and notes')}</div><div class="form-actions"><button type="reset" class="button button-outline">Clear</button>${button('Save assessment','button-primary')}</div></form></div>`)}</div>
  <div style="margin-top:17px">${card('Triage status',table(['Patient','Vitals','Priority','Notes','Status'],people.slice(0,4).map((p,i)=>`<tr data-searchable><td>${personCell(p)}</td><td>36.8°C · 118/76 mmHg</td><td>${statusBadge(i===3?'Urgent':'Routine')}</td><td>Fictional sample assessment</td><td>${statusBadge(i===0?'Awaiting':'Completed')}</td></tr>`).join('')))}</div>`;
}

function consultationsPage() {
  return `${heading('Clinician dashboard','Consultation queue, clinical notes and treatment planning in one workspace.',button(`${icon('plus')} Start consultation`,'button-primary','consultation-form'))}
  ${stats([['Waiting','08','2 priority reviews','users','amber'],['In consultation','06','Across 4 clinicians','stethoscope','blue'],['Seen today','16','Today so far','heart'],['Results to review','04','Laboratory','lab','purple']])}
  <div class="content-grid equal">${card('Consultation queue',`<div class="card-body"><div class="queue-list">${people.map((p,i)=>`<div class="queue-row"><div class="queue-number">${String(i+1).padStart(2,'0')}</div><div><strong>${p.name}</strong><small>${p.age} years · ${p.reason}</small></div><button class="button button-outline button-small" data-action="start-consultation">Open</button></div>`).join('')}</div></div>`)}
  ${card('Patient summary · KG-24018',`<div class="card-body"><div class="person-cell" style="margin-bottom:15px"><span class="avatar">AN</span><div><strong>Amara Nsubuga</strong><span>34 years · Female · Q-034</span></div></div><dl class="detail-list"><div><dt>Chief concern</dt><dd>Follow-up review</dd></div><div><dt>Allergies</dt><dd style="color:var(--red)">Penicillin</dd></div><div><dt>Medical history</dt><dd>Fictional sample history</dd></div><div><dt>Current medication</dt><dd>None recorded</dd></div><div><dt>Vitals</dt><dd>36.8°C · 118/76 mmHg</dd></div><div><dt>Last visit</dt><dd>18 September 2026</dd></div></dl><h3 class="section-title" style="margin-top:17px">Encounter history</h3><div class="timeline"><div class="timeline-item"><div class="timeline-date">Sep 18</div><div class="timeline-mark"></div><div class="timeline-copy"><strong>General medicine</strong><p>Follow-up visit · Fictional demo note</p></div></div><div class="timeline-item"><div class="timeline-date">Aug 02</div><div class="timeline-mark"></div><div class="timeline-copy"><strong>Outpatient</strong><p>Initial visit · Fictional demo note</p></div></div></div></div>`)}</div>
  ${card('Encounter workspace',`<div class="tabs" role="tablist"><button class="tab active" role="tab" aria-selected="true" data-tab="notes">Clinical notes</button><button class="tab" role="tab" aria-selected="false" data-tab="orders">Orders</button><button class="tab" role="tab" aria-selected="false" data-tab="plan">Plan & follow-up</button><button class="tab" role="tab" aria-selected="false" data-tab="summary">Summary</button></div>
  <div class="card-body tab-panel" data-panel="notes"><form class="demo-form" data-success="Consultation notes saved in this demo."><div class="form-grid"><div class="form-field full"><label for="consult-symptoms">Symptoms / history</label><textarea id="consult-symptoms" class="field-control" placeholder="Presenting symptoms and relevant history"></textarea></div><div class="form-field full"><label for="consult-examination">Examination findings</label><textarea id="consult-examination" class="field-control" placeholder="Examination observations"></textarea></div>${formField('Diagnosis','Enter diagnosis')}</div><div class="form-actions">${button('Save encounter','button-primary')}</div></form></div>
  <div class="card-body tab-panel" data-panel="orders" hidden><form class="demo-form" data-success="Order added to the fictional encounter."><div class="form-grid"><div class="form-field"><label for="consult-medicine">Prescription medicine</label><input id="consult-medicine" class="field-control" placeholder="Medicine name" required></div><div class="form-field"><label for="consult-dose">Dosage and instructions</label><input id="consult-dose" class="field-control" placeholder="Dose, route, frequency" required></div><div class="form-field"><label for="consult-lab">Laboratory request</label><select id="consult-lab" class="field-control" required><option value="">Select test</option><option>Full blood count</option><option>Malaria rapid test</option><option>Blood glucose</option><option>Urinalysis</option></select></div><div class="form-field"><label for="consult-indication">Clinical indication</label><input id="consult-indication" class="field-control" placeholder="Reason for test" required></div></div><div class="form-actions">${button('Add order','button-primary')}</div></form></div>
  <div class="card-body tab-panel" data-panel="plan" hidden><form class="demo-form" data-success="Treatment plan saved in this demo."><div class="form-grid"><div class="form-field full"><label for="consult-plan">Treatment plan</label><textarea id="consult-plan" class="field-control" placeholder="Care plan and advice"></textarea></div>${formField('Follow-up date','','date')}${formField('Follow-up notes','Instructions')}</div><div class="form-actions">${button('Save plan','button-primary')}</div></form></div>
  <div class="card-body tab-panel" data-panel="summary" hidden><div class="notice green">Encounter summary · KG-24018 · Outpatient · Draft demonstration record. No clinical service is connected.</div><p class="muted">Complete notes, diagnosis, orders and plan above to assemble the encounter summary.</p></div>`)}`;
}

function pharmacyPage() {
  const meds = [['Paracetamol 500 mg','MED-001','Tablet','1,200','Dec 2027','In stock'],['Amoxicillin 250 mg','MED-002','Capsule','42','May 2027','Low stock'],['ORS sachet','MED-003','Sachet','680','Aug 2027','In stock'],['Metformin 500 mg','MED-004','Tablet','18','Jan 2027','Low stock'],['Salbutamol inhaler','MED-005','Inhaler','95','Nov 2026','In stock']];
  return `${heading('Pharmacy','Review prescriptions, manage medicine inventory and track dispensing.',button(`${icon('plus')} Add medicine`,'button-primary','add-medicine'))}
  ${stats([['Pending prescriptions','12','4 ready to dispense','pharmacy','blue'],['Dispensed today','27','Across 19 patients','heart'],['Low stock items','05','Reorder recommended','chart','amber'],['Expiring in 30 days','03','Review batch dates','calendar','purple']])}
  <div class="content-grid equal">${card('Pending prescriptions',table(['Patient','Prescription','Prescriber','Time','Status',''],people.slice(0,4).map((p,i)=>`<tr data-searchable><td>${personCell(p)}</td><td>${['Paracetamol · 500 mg','Amoxicillin · 250 mg','ORS sachet','Metformin · 500 mg'][i]}</td><td>Dr. M. Kato</td><td>0${9+i}:2${i} AM</td><td>${statusBadge(i===3?'Ready':'Pending')}</td><td><button class="button button-outline button-small" data-action="dispense">Dispense</button></td></tr>`).join('')))}
  ${card('Stock alerts',`<div class="card-body">${note('2 items are below the demonstration reorder level. Review stock before dispensing.','')}<div style="margin-top:14px">${[['Amoxicillin 250 mg',42,80],['Metformin 500 mg',18,80],['Salbutamol inhaler',95,100]].map(([n,v,max])=>`<div class="metric-row"><span>${n}</span><strong>${v} units</strong></div><div class="progress-track"><div class="progress-fill ${v<50?'amber':''}" style="width:${Math.min(100,v/max*100)}%;margin-bottom:12px"></div></div>`).join('')}</div></div>`)}</div>
  ${card('Medicine catalogue & inventory',table(['Medicine','Code','Form','Stock','Expiry','Status',''],meds.map(([name,code,form,stock,expiry,status])=>`<tr data-searchable><td><strong>${name}</strong></td><td>${code}</td><td>${form}</td><td>${stock} units</td><td>${expiry}</td><td>${statusBadge(status)}</td><td><button class="button button-outline button-small" data-action="medicine-details">Details</button></td></tr>`).join('')))}
  <div style="margin-top:17px">${card('Recent dispensing',table(['Date & time','Patient','Items','Dispensed by','Status'],people.slice(0,3).map((p,i)=>`<tr data-searchable><td>Oct 10, 2026 · 0${9+i}:30 AM</td><td>${personCell(p)}</td><td>${i+1} medicine${i?'s':''}</td><td>Pharmacy team</td><td>${statusBadge('Dispensed')}</td></tr>`).join('')))}</div>`;
}

function laboratoryPage() {
  const requests = [['LAB-3812','Amara Nsubuga','Full blood count','09:15 AM','Urgent','Processing'],['LAB-3811','Daniel Okello','Blood glucose','09:05 AM','Routine','Collected'],['LAB-3810','Sarah Namusoke','Malaria rapid test','08:42 AM','Routine','Pending'],['LAB-3809','Grace Achieng','Urinalysis','08:20 AM','Priority','To verify']];
  return `${heading('Laboratory','Track requests and specimens, enter results and review verification status.',button(`${icon('plus')} New request`,'button-primary','lab-request'))}
  ${stats([['Pending requests','14','5 priority','lab','amber'],['Specimens collected','21','Today so far','heart'],['Processing','08','Across 6 test types','chart','blue'],['Results to verify','03','Awaiting review','users','purple']])}
  <div class="content-grid equal">${card('Pending laboratory requests',table(['Request','Patient','Test','Requested','Priority','Status'],requests.map(([id,name,test,time,priority,status],i)=>`<tr data-searchable><td><strong>${id}</strong></td><td>${name}<br><span class="muted">KG-2401${8-i}</span></td><td>${test}</td><td>${time}</td><td>${statusBadge(priority)}</td><td>${statusBadge(status)}</td></tr>`).join('')))}
  ${card('Specimen tracking',`<div class="card-body"><div class="metric-row"><span><strong>Collected</strong><br><small class="muted">Labelled and received</small></span>${statusBadge('21 specimens')}</div><div class="metric-row"><span><strong>Processing</strong><br><small class="muted">Analysis in progress</small></span>${statusBadge('08 processing')}</div><div class="metric-row"><span><strong>Awaiting verification</strong><br><small class="muted">Results entered</small></span>${statusBadge('03 to verify')}</div><div class="metric-row"><span><strong>Released today</strong><br><small class="muted">Available to requesting clinician</small></span>${statusBadge('16 released')}</div><div style="margin-top:16px">${note('Use the fictional specimen ID to track this sample through each processing stage.','blue')}</div></div>`)}</div>
  <div class="content-grid equal">${card('Enter test result',`<div class="card-body"><form class="demo-form" data-success="Laboratory result saved for verification."><div class="form-grid">${formField('Patient / request ID','Search patient or LAB #')}${formField('Test name','Select test','','Full blood count|Blood glucose|Malaria rapid test|Urinalysis|Haemoglobin')}${formField('Result','Enter result')}${formField('Unit','e.g. mmol/L')}${formField('Reference range','e.g. 3.9–6.1')}${formField('Comments','Optional notes')}</div><div class="form-actions">${button('Save for verification','button-primary')}</div></form></div>`)}
  ${card('Results awaiting verification',table(['Patient','Test','Result','Entered by','Status',''],requests.slice(1).map(([id,name,test,time,priority,status],i)=>`<tr data-searchable><td>${name}<br><span class="muted">${id}</span></td><td>${test}</td><td>${['5.4 mmol/L','Negative','Within expected range'][i]}</td><td>Lab team</td><td>${statusBadge('Awaiting review')}</td><td><button class="button button-outline button-small" data-action="verify-result">Review</button></td></tr>`).join('')))}</div>
  ${card('Released results',table(['Date','Patient','Test','Result','Verified by','Status'],requests.slice(0,3).map(([id,name,test,time],i)=>`<tr data-searchable><td>Oct 10, 2026</td><td>${name}</td><td>${test}</td><td>${['Within range','5.4 mmol/L','Negative'][i]}</td><td>Lab lead</td><td>${statusBadge('Released')}</td></tr>`).join('')))}
  <div style="margin-top:16px">${note('Laboratory records in this interface are fictional and are not connected to diagnostic services.','blue')}</div>`;
}

function appointmentsPage() {
  const days = ['Mon 05','Tue 06','Wed 07','Thu 08','Fri 09','Sat 10','Sun 11'];
  const events = [['Amara · General','Daniel · Cardio','Sarah · New visit',''],['Peter · Review','','Grace · Paeds','Amara · General'],['Daniel · Cardio','Sarah · Review','',''],['Grace · Paeds','Peter · Review','Amara · General',''],['Sarah · New visit','Daniel · Review','','Grace · Paeds'],['Peter · Follow-up','','',''],['','','','']];
  return `${heading('Appointments & follow-up','Schedule visits, manage follow-ups and review clinic availability.',button(`${icon('plus')} Schedule appointment`,'button-primary','schedule-appointment'))}
  ${stats([['Appointments today','26','Across 6 departments','calendar','blue'],['Confirmed','21','80% of scheduled','heart'],['Awaiting confirmation','03','Contact patients','users','amber'],['Follow-ups this week','36','Next 7 days','chart','purple']])}
  ${card('October 2026 · Week view',`<div class="tabs" role="tablist"><button class="tab" data-calendar="day">Day</button><button class="tab active" data-calendar="week">Week</button><button class="tab" data-calendar="month">Month</button><span style="margin-left:auto;padding:9px 0">${button('‹','button-outline button-small','previous-period')} <strong style="font-size:11px">Oct 05 – 11, 2026</strong> ${button('›','button-outline button-small','next-period')}</span></div><div class="card-body" style="padding:14px">${'<div class="calendar-grid">'+days.map(d=>`<div class="calendar-cell head">${d}</div>`).join('')+days.map((d,i)=>`<div class="calendar-cell"><span>${String(5+i).padStart(2,'0')}</span>${events[i].filter(Boolean).map((ev,j)=>`<div class="calendar-event ${j%3===1?'blue':j%3===2?'amber':''}">${ev}</div>`).join('')}</div>`).join('')+'</div>'}</div>`)}
  <div class="content-grid equal" style="margin-top:17px">${card('Today’s appointment list',table(['Time','Patient','Visit','Clinician','Status'],appointmentRows))}
  ${card('Schedule a visit',`<div class="card-body"><form class="demo-form" data-success="Appointment added to this demo calendar."><div class="form-grid">${formField('Patient','Search patient')}${formField('Visit type','Select visit','','General medicine|Follow-up|Specialist review|New patient')}${formField('Date','','date')}${formField('Time','','time')}${formField('Department','Select department','','Outpatient|Cardiology|Paediatrics|Maternity')}${formField('Clinician','Select clinician','','Dr. M. Kato|Dr. J. Atim|Dr. R. Ssebuufu')}</div><div class="form-actions"><button type="reset" class="button button-outline">Clear</button>${button('Save appointment','button-primary')}</div></form></div>`)}</div>
  ${card('Follow-up overview',table(['Patient','Reason','Due','Clinician','Status',''],people.slice(0,4).map((p,i)=>`<tr data-searchable><td>${personCell(p)}</td><td>Review after outpatient visit</td><td>Oct ${12+i*2}, 2026</td><td>Dr. M. Kato</td><td>${statusBadge(i===2?'Overdue':'Scheduled')}</td><td><button class="button button-outline button-small" data-action="reschedule">Reschedule</button></td></tr>`).join('')))}
  <div style="margin-top:16px">${note('Appointment actions change this local demonstration view only; reminders are not sent.','blue')}</div>`;
}

function reportsPage() {
  return `${heading('Reports & analytics','Explore fictional service activity and prepare print-friendly summaries.',`${button(`${icon('download')} Export CSV`,'button-outline','export-report')}${button('Print report','button-primary','print')}`)}
  ${stats([['Patient visits','326','This month · +8%','users'],['Appointments','412','This month · 78% attended','calendar','blue'],['Avg. queue time','18 min','Target under 20 min','reception','amber'],['Lab requests','184','This month · 92% complete','lab','purple']])}
  <div class="print-only"><h1>Kagando EMR · Monthly service summary</h1><p>Fictional demonstration report · October 2026</p></div>
  <div class="content-grid equal">${card('Daily visits',`<div class="card-body"><div class="chart-legend"><span><i class="legend-dot"></i>Outpatient visits</span><span>Oct 04–10, 2026</span></div><div class="trend-chart">${[['04',44],['05',66],['06',57],['07',82],['08',73],['09',92],['10',61]].map(([day,v])=>`<div class="chart-column"><div class="chart-bar dark" style="height:${v}%"></div><span class="chart-day">${day}</span></div>`).join('')}</div><div class="metric-row"><span>Total visits</span><strong>326</strong></div><div class="metric-row"><span>Average per day</span><strong>47</strong></div></div>`)}
  ${card('Appointments summary',`<div class="card-body"><div class="metric-row"><span>Attended</span><strong>321 · 78%</strong></div><div class="progress-track"><div class="progress-fill" style="width:78%"></div></div><div class="metric-row"><span>Rescheduled</span><strong>48 · 12%</strong></div><div class="progress-track"><div class="progress-fill blue" style="width:12%"></div></div><div class="metric-row"><span>Did not attend</span><strong>43 · 10%</strong></div><div class="progress-track"><div class="progress-fill amber" style="width:10%"></div></div><div class="metric-row"><span>Follow-ups completed</span><strong>86%</strong></div></div>`)}</div>
  <div class="content-grid three">${card('Queue performance',`<div class="card-body"><p class="muted">Average time to first review</p><div class="stat-value">18 <small style="font-size:12px">min</small></div><div class="progress-track" style="margin-top:14px"><div class="progress-fill" style="width:90%"></div></div><p class="muted">90% within 20-minute target</p></div>`)}
  ${card('Pharmacy stock',`<div class="card-body"><div class="metric-row"><span>Catalogue items</span><strong>248</strong></div><div class="metric-row"><span>Low stock</span><strong style="color:var(--amber)">05</strong></div><div class="metric-row"><span>Expiring soon</span><strong>03</strong></div><div class="metric-row"><span>Dispensed this month</span><strong>684</strong></div></div>`)}
  ${card('Laboratory activity',`<div class="card-body"><div class="metric-row"><span>Requests received</span><strong>184</strong></div><div class="metric-row"><span>Results released</span><strong>169</strong></div><div class="metric-row"><span>Processing</span><strong>12</strong></div><div class="metric-row"><span>Completion rate</span><strong>92%</strong></div></div>`)}</div>
  ${card('Visits by department',table(['Department','Visits','Share','Change'],[['Outpatient','146','45%','+8%'],['Paediatrics','62','19%','+4%'],['Cardiology','48','15%','+11%'],['Maternity','41','13%','−2%'],['Other services','29','8%','+3%']].map(([d,v,s,c])=>`<tr><td>${d}</td><td>${v}</td><td>${s}</td><td class="positive">${c}</td></tr>`).join('')))}
  <div style="margin-top:16px">${note('Report figures are fictional demo values. Verify all data sources before making operational decisions.','blue')}</div>`;
}

function administrationPage() {
  const staff = [['Martha Kato','Dr. M. Kato','Clinician','Outpatient','Active'],['John Atim','Dr. J. Atim','Clinician','Cardiology','Active'],['Ruth Ssebuufu','Nurse R. S.','Nurse','Nursing','Active'],['Alex Nambasa','Alex N.','Pharmacist','Pharmacy','Active'],['Joan Akello','Joan A.','Receptionist','Reception','Invited']];
  return `${heading('Administration','Manage demonstration staff access, roles and audit activity.',button(`${icon('plus')} Add staff member`,'button-primary','add-staff'))}
  ${stats([['Staff accounts','34','Across 8 roles','users'],['Active users','29','Last 30 days','heart'],['Pending invitations','03','Awaiting acceptance','calendar','amber'],['Audit events today','126','Demonstration log','chart','blue']])}
  <div class="content-grid equal">${card('User management',table(['Staff member','Display name','Role','Department','Status',''],staff.map(([name,display,role,dept,status],i)=>`<tr data-searchable><td><div class="person-cell"><span class="mini-avatar">${name.split(' ').map(n=>n[0]).join('')}</span><strong>${name}</strong></div></td><td>${display}</td><td>${role}</td><td>${dept}</td><td>${statusBadge(status)}</td><td><button class="button button-outline button-small" data-action="edit-staff">Edit</button></td></tr>`).join('')))}
  ${card('Roles & permissions',`<div class="card-body">${[['Administrator','Full system settings and user management','4 users'],['Clinician','Consultations, notes and care plans','8 users'],['Nurse','Triage and observations','7 users'],['Pharmacist','Dispensing and inventory','3 users'],['Laboratory staff','Specimen and result workflow','4 users'],['Receptionist','Registration and appointments','8 users']].map(([r,desc,count])=>`<div class="metric-row"><span><strong>${r}</strong><br><small class="muted">${desc}</small></span><span class="badge badge-gray">${count}</span></div>`).join('')}<div style="margin-top:14px">${note('Permissions shown are sample role descriptions only; this prototype does not authenticate users or enforce access controls.','blue')}</div></div>`)}</div>
  ${card('Audit log',table(['Date & time','User','Activity','Module','Outcome'],[['Oct 10 · 09:42','Martha Kato','Viewed patient KG-24018','Patients','Success'],['Oct 10 · 09:36','Alex Nambasa','Dispensing queue opened','Pharmacy','Success'],['Oct 10 · 09:18','Joan Akello','Appointment checked in','Reception','Success'],['Oct 10 · 09:02','Ruth Ssebuufu','Triage assessment saved','Nursing','Success'],['Oct 10 · 08:54','Dr. J. Atim','Laboratory result reviewed','Laboratory','Success']].map(row=>`<tr data-searchable>${row.map((cell,i)=>`<td>${i===4?statusBadge(cell):cell}</td>`).join('')}</tr>`).join('')))}
  <div style="margin-top:16px">${note('Sample audit activity only. This frontend does not provide real access control, authentication or an audit trail.','blue')}</div>`;
}

function settingsPage() {
  return `${heading('System settings','Review the look and feel of clinic preferences for this frontend demonstration.')}
  <div class="content-grid equal">${card('Clinic profile',`<div class="card-body"><form class="demo-form" data-success="Clinic preferences updated in this demo."><div class="form-grid">${formField('Facility name','Kagando Clinic')}${formField('Contact email','clinic@example.org','email')}${formField('Phone','+256 000 000 000','tel')}${formField('Time zone','Select time zone','','East Africa Time (UTC+3)|UTC')}${formField('Default appointment duration','30 minutes','','15 minutes|20 minutes|30 minutes|45 minutes|60 minutes')}${formField('Date format','Select format','','DD MMM YYYY|MM/DD/YYYY|YYYY-MM-DD')}</div><div class="form-actions">${button('Save preferences','button-primary')}</div></form></div>`)}
  ${card('Notifications',`<div class="card-body"><form class="demo-form" data-success="Notification preferences saved in this demo.">${[['Appointment reminders','Show local appointment reminders'],['Low stock alerts','Highlight medicines below reorder level'],['Laboratory updates','Show sample result status changes'],['Queue updates','Highlight waiting patients']].map(([a,b],i)=>`<label style="display:flex;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid #f0f1f3"><input type="checkbox" ${i<3?'checked':''} style="accent-color:var(--green)"><span><strong style="font-size:11px">${a}</strong><small style="display:block;margin-top:4px;color:var(--muted)">${b}</small></span></label>`).join('')}<div class="form-actions">${button('Save settings','button-primary')}</div></form></div>`)}</div>
  <div class="content-grid equal">${card('Data & privacy',`<div class="card-body"><h3 class="section-title">Demonstration data</h3><p class="muted" style="line-height:1.6">This interface uses temporary, fictional sample content in your browser. It does not connect to Kagando Clinic or store medical records.</p><div class="notice blue">Do not enter real patient, staff or other sensitive information into this demonstration.</div><div style="margin-top:15px">${button('Clear local demo inputs','button-outline','clear-demo')}</div></div>`)}
  ${card('About this prototype',`<div class="card-body"><dl class="detail-list"><div><dt>Product</dt><dd>Kagando EMR frontend prototype</dd></div><div><dt>Version</dt><dd>1.0 · Demonstration</dd></div><div><dt>Environment</dt><dd>Frontend only</dd></div><div><dt>Clinical connection</dt><dd>None</dd></div></dl><div style="margin-top:17px">${note('Not for clinical or operational use. Demonstration interactions do not save to a server.','blue')}</div></div>`)}</div>`;
}

function loginPage() {
  return `<div class="login-layout"><section class="login-panel"><a class="login-brand" href="index.html"><img src="images/logo.png" alt="Kagando EMR logo"><span><strong>Kagando EMR</strong><small>Care, connected.</small></span></a><div class="login-intro"><span class="eyebrow">WELCOME BACK</span><h1>Sign in to your workspace</h1><p>Enter your demonstration account details to explore the Kagando EMR interface.</p></div><form id="login-form" class="login-form"><div class="form-field"><label for="login-user">Email or username</label><input id="login-user" class="field-control" autocomplete="username" required placeholder="you@kagando.example"></div><div class="form-field"><label for="login-password">Password</label><div class="password-wrap"><input id="login-password" class="field-control" type="password" autocomplete="current-password" required placeholder="Enter your password"><button class="password-toggle" type="button" aria-label="Show password" data-action="toggle-password">Show</button></div></div><div class="login-options"><label><input type="checkbox"> Remember me</label><a href="#" data-action="forgot-password">Forgot password?</a></div><button class="button button-primary login-submit" type="submit">Sign in to demo</button><div class="login-demo-hint">Demo only · Any non-empty username and password will open the dashboard. No authentication occurs.</div></form><p class="login-footer">By continuing, you confirm this is a fictional frontend demonstration.</p></section><aside class="login-aside"><div class="aside-pattern"></div><div class="aside-content"><div class="aside-emblem">${icon('heart')}</div><p class="eyebrow">KAGANDO EMR</p><h2>Better organised care starts here.</h2><p>A calm, clear workspace for the people who care for our community.</p><div class="login-points"><span>${icon('users')} Patient-centred workflows</span><span>${icon('chart')} Clear operational overview</span><span>${icon('heart')} Thoughtful care coordination</span></div></div><div class="aside-foot">A frontend prototype · Not connected to clinical services</div></aside></div>`;
}

function modalContent(type, index = 0) {
  const patient = people[index] || people[0];
  const forms = {
    'new-patient': ['Register a patient', `<form class="demo-form" data-success="Patient saved to this local demonstration."><div class="form-grid">${formField('First name','First name')}${formField('Last name','Last name')}${formField('Date of birth','','date')}${formField('Sex','Select sex','','Female|Male|Other')}${formField('Phone','Phone number','tel')}${formField('Patient ID','Assigned on save')}</div><div class="form-actions">${button('Save patient','button-primary')}</div></form>`],
    'patient-profile': [`${patient.name} · ${patient.id}`, `<div class="person-cell" style="margin-bottom:18px"><span class="avatar">${patient.initials}</span><div><strong>${patient.name}</strong><span>${patient.age} years · ${patient.gender}</span></div></div><dl class="detail-list"><div><dt>Phone</dt><dd>${patient.phone}</dd></div><div><dt>Visit</dt><dd>${patient.reason}</dd></div><div><dt>Allergies</dt><dd>${index===0?'Penicillin':'None recorded in demo'}</dd></div><div><dt>Current medication</dt><dd>None recorded</dd></div></dl><div class="notice blue" style="margin-top:15px">Fictional patient summary. Details are for interface demonstration only.</div>`],
    'edit-patient': ['Edit patient details', `<form class="demo-form" data-success="Patient details updated in this demo."><div class="form-grid">${formField('First name','Amara')}${formField('Last name','Nsubuga')}${formField('Phone','+256 700 123 456','tel')}${formField('Email','patient@example.org','email')}${formField('Address','Kagando, Uganda')}${formField('Emergency contact','Fictional contact')}</div><div class="form-actions">${button('Save changes','button-primary')}</div></form>`],
    'triage-form': ['Start triage', '<p class="muted">Select a patient in the triage workspace and record vital signs, symptoms and notes. Use only fictional demonstration data.</p>'],
    'consultation-form': ['Start consultation', '<p class="muted">Choose a patient from the consultation queue to open a demonstration encounter workspace.</p><a class="button button-primary" href="consultations.html">Open consultation workspace</a>'],
    'start-consultation': ['Open consultation', '<p class="muted">Patient summary and fictional encounter workspace opened. Use the Consultation Notes, Orders and Plan tabs to explore the interface.</p><a class="button button-primary" href="consultations.html">Go to consultation workspace</a>'],
    'schedule-appointment': ['Schedule appointment', `<form class="demo-form" data-success="Appointment saved to this local demonstration."><div class="form-grid">${formField('Patient','Search patient')}${formField('Visit type','Select visit','','General medicine|Follow-up|Specialist review')}${formField('Date','','date')}${formField('Time','','time')}${formField('Clinician','Select clinician','','Dr. M. Kato|Dr. J. Atim')}</div><div class="form-actions">${button('Save appointment','button-primary')}</div></form>`],
    'dispense': ['Dispense prescription', `<form class="demo-form" data-success="Dispensing confirmed in this demonstration."><div class="notice blue">Patient: ${patient.name} · Sample prescription: Paracetamol 500 mg</div><div class="form-grid" style="margin-top:14px">${formField('Quantity','e.g. 12','number')}${formField('Instructions','e.g. Take as directed')}</div><div class="form-actions">${button('Confirm dispensing','button-primary')}</div></form>`],
    'lab-request': ['New laboratory request', `<form class="demo-form" data-success="Laboratory request added to this demonstration."><div class="form-grid">${formField('Patient','Search patient')}${formField('Test','Select test','','Full blood count|Blood glucose|Malaria rapid test|Urinalysis')}${formField('Priority','Select priority','','Routine|Priority|Urgent')}${formField('Clinical indication','Reason for test')}</div><div class="form-actions">${button('Create request','button-primary')}</div></form>`],
    'add-medicine': ['Add medicine to catalogue', `<form class="demo-form" data-success="Medicine added to this local demonstration."><div class="form-grid">${formField('Medicine name','Name')}${formField('Code','Medicine code')}${formField('Form','Select form','','Tablet|Capsule|Syrup|Inhaler|Sachet')}${formField('Initial stock','Units','number')}${formField('Expiry date','','date')}${formField('Reorder level','Units','number')}</div><div class="form-actions">${button('Add medicine','button-primary')}</div></form>`],
    'add-staff': ['Add staff member', `<form class="demo-form" data-success="Staff member added to this local demonstration."><div class="form-grid">${formField('Full name','Staff name')}${formField('Email','staff@example.org','email')}${formField('Role','Select role','','Administrator|Clinician|Nurse|Pharmacist|Laboratory staff|Receptionist')}${formField('Department','Select department','','Administration|Outpatient|Nursing|Pharmacy|Laboratory|Reception')}</div><div class="form-actions">${button('Save staff member','button-primary')}</div></form>`],
    'edit-staff': ['Edit staff profile', `<form class="demo-form" data-success="Staff profile updated in this demonstration."><div class="form-grid">${formField('Full name','Martha Kato')}${formField('Display name','Dr. M. Kato')}${formField('Role','Select role','','Administrator|Clinician|Nurse|Pharmacist|Laboratory staff|Receptionist')}${formField('Status','Select status','','Active|Inactive|Invited')}</div><div class="form-actions">${button('Save profile','button-primary')}</div></form>`],
    'verify-result': ['Review laboratory result', '<div class="notice blue">Sample result: Blood glucose · 5.4 mmol/L · Reference 3.9–6.1 mmol/L</div><p class="muted">Review and mark this fictional result as verified or request a recheck.</p>'],
    'medicine-details': ['Medicine batch details', '<dl class="detail-list"><div><dt>Batch</dt><dd>DEMO-2026-014</dd></div><div><dt>Stock</dt><dd>42 units</dd></div><div><dt>Expiry</dt><dd>May 2027</dd></div><div><dt>Reorder level</dt><dd>80 units</dd></div></dl>'],
    'reschedule': ['Reschedule follow-up', `<form class="demo-form" data-success="Follow-up rescheduled in this local demonstration."><div class="form-grid">${formField('New date','','date')}${formField('Time','','time')}${formField('Reason','Optional note')}</div><div class="form-actions">${button('Save new time','button-primary')}</div></form>`]
  };
  const [title, body] = forms[type] || ['Action', '<p class="muted">This control is available for demonstration.</p>'];
  return `<div class="modal-header"><h2>${title}</h2><button class="modal-close" aria-label="Close dialog" data-action="close-modal">×</button></div><div class="modal-body">${body}</div>`;
}

function renderShell(root) {
  const page = root.dataset.page || 'index';
  const isLogin = page === 'login';
  document.body.className = isLogin ? 'login-body' : '';
  if (isLogin) { root.innerHTML = loginPage(); return; }
  const nav = navGroups.map(group => `<div class="nav-label">${group.label}</div>${group.links.map(([href,label,ico])=>`<a class="nav-link ${page===href.replace('.html','')?'active':''}" href="${href}" ${page===href.replace('.html','')?'aria-current="page"':''}><span class="nav-icon">${icon(ico)}</span>${label}</a>`).join('')}`).join('');
  const role = sessionStorage.getItem('kagando-demo-role') || 'Administrator';
  const titles = { index: 'Overview', patients: 'Patients', reception: 'Reception', nursing: 'Nursing & Triage', consultations: 'Consultations', pharmacy: 'Pharmacy', laboratory: 'Laboratory', appointments: 'Appointments', reports: 'Reports', administration: 'Administration', settings: 'Settings' };
  const roles = ['Administrator','Receptionist','Nurse','Clinician','Pharmacist','Laboratory staff','Management'];
  root.innerHTML = `<div class="app-shell"><aside class="sidebar" id="sidebar"><a class="brand" href="index.html"><img src="images/logo.png" alt="Kagando EMR logo"><span class="brand-copy"><strong>Kagando EMR</strong><span>Care, connected.</span></span></a><nav class="nav-scroll" aria-label="Main navigation">${nav}</nav><div class="side-footer"><div class="demo-note"><strong>Demo workspace</strong>Fictional sample data only. Not connected to clinical services.</div></div></aside><div class="mobile-backdrop" data-action="close-sidebar"></div><div class="main-column"><header class="topbar"><button class="mobile-menu" aria-label="Open navigation" data-action="toggle-sidebar">${icon('menu')}</button><div class="top-title"><strong>${titles[page] || 'Kagando EMR'}</strong><span>Kagando Clinic · Demonstration workspace</span></div><label class="top-search">${icon('search')}<input type="search" aria-label="Search this page" placeholder="Search records…" data-global-search></label><div class="profile-menu"><button class="icon-button" aria-label="Notifications" data-action="notifications">${icon('bell')}<span class="notification-dot"></span></button><div class="dropdown" data-dropdown="notifications"><button>2 sample notifications</button><button>Queue has 9 waiting</button><button>3 lab results to verify</button></div></div><div class="profile-menu"><button class="profile-trigger" aria-haspopup="true" data-action="profile-menu"><span class="avatar">${role==='Administrator'?'AD':role==='Receptionist'?'RC':role==='Nurse'?'NS':role==='Clinician'?'CL':role==='Pharmacist'?'PH':role==='Laboratory staff'?'LB':'MG'}</span><span class="profile-info"><strong>${role==='Administrator'?'Alex Demo':role}</strong><span>${role}</span></span>${icon('grid')}</button><div class="dropdown" data-dropdown="profile"><a href="settings.html">My profile</a><strong class="dropdown-label">Demo dashboard role</strong>${roles.map(option=>`<button data-action="set-role" data-role="${option}" ${role===option?'aria-current="true"':''}>${option}${role===option?' · Current':''}</button>`).join('')}<a href="login.html">Sign out of demo</a></div></div></header><main class="page-content" id="main-content"></main></div><div class="toast-region" aria-live="polite"></div><div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"></section></div></div>`;
  const pages = { index: () => dashboard(role), patients: patientsPage, reception: receptionPage, nursing: nursingPage, consultations: consultationsPage, pharmacy: pharmacyPage, laboratory: laboratoryPage, appointments: appointmentsPage, reports: reportsPage, administration: administrationPage, settings: settingsPage };
  document.querySelector('#main-content').innerHTML = (pages[page] || pages.index)();
}

function toast(message) {
  const region = document.querySelector('.toast-region');
  if (!region) return;
  const node = document.createElement('div');
  node.className = 'toast'; node.textContent = message; region.append(node);
  window.setTimeout(() => node.remove(), 3400);
}
function openModal(type, index) {
  const backdrop = document.querySelector('.modal-backdrop');
  if (!backdrop) return;
  backdrop.querySelector('.modal').innerHTML = modalContent(type, index);
  backdrop.classList.add('open');
  backdrop.querySelector('.modal-close')?.focus();
}

document.addEventListener('click', (event) => {
  const actionNode = event.target.closest('[data-action]');
  if (actionNode) {
    const action = actionNode.dataset.action;
    if (action === 'toggle-sidebar') document.querySelector('.sidebar')?.classList.toggle('open');
    else if (action === 'close-sidebar') document.querySelector('.sidebar')?.classList.remove('open');
    else if (action === 'close-modal') document.querySelector('.modal-backdrop')?.classList.remove('open');
    else if (action === 'profile-menu' || action === 'notifications') {
      const selector = action === 'profile-menu' ? '[data-dropdown="profile"]' : '[data-dropdown="notifications"]';
      document.querySelectorAll('.dropdown').forEach(drop => { if (drop !== document.querySelector(selector)) drop.classList.remove('open'); });
      document.querySelector(selector)?.classList.toggle('open');
    } else if (action === 'set-role') {
      sessionStorage.setItem('kagando-demo-role', actionNode.dataset.role); window.location.href = 'index.html';
    } else if (action === 'toggle-password') {
      const password = document.querySelector('#login-password');
      if (password) { const visible = password.type === 'password'; password.type = visible ? 'text' : 'password'; actionNode.textContent = visible ? 'Hide' : 'Show'; actionNode.setAttribute('aria-label', visible ? 'Hide password' : 'Show password'); }
    } else if (action === 'patient-profile') openModal('patient-profile', Number(actionNode.dataset.id));
    else if (action === 'check-in') toast('Next patient called in this demonstration.');
    else if (action === 'print') window.print();
    else if (action === 'export-report') {
      const csv = 'Department,Visits,Share,Change\nOutpatient,146,45%,+8%\nPaediatrics,62,19%,+4%\nCardiology,48,15%,+11%\nMaternity,41,13%,-2%\nOther services,29,8%,+3%';
      const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'kagando-demo-report.csv'; link.click(); URL.revokeObjectURL(link.href);
    } else if (action === 'clear-demo') { document.querySelectorAll('input:not([type=checkbox]), textarea').forEach(el => { el.value = ''; }); document.querySelectorAll('input[type=checkbox]').forEach(el => { el.checked = false; }); toast('Local demo inputs cleared.'); }
    else if (action === 'forgot-password') { event.preventDefault(); toast('Password reset is not available in this frontend demonstration.'); }
    else if (action === 'date-picker') toast('Showing sample activity for October 10, 2026.');
    else if (action === 'previous-period' || action === 'next-period') toast('Calendar navigation is a local prototype interaction.');
    else if (action === 'triage-form' || action === 'new-patient' || action === 'edit-patient' || action === 'consultation-form' || action === 'start-consultation' || action === 'schedule-appointment' || action === 'dispense' || action === 'lab-request' || action === 'add-medicine' || action === 'add-staff' || action === 'edit-staff' || action === 'verify-result' || action === 'medicine-details' || action === 'reschedule') openModal(action, Number(actionNode.dataset.id || 0));
  }
  const tab = event.target.closest('[data-tab]');
  if (tab) {
    const panelName = tab.dataset.tab;
    document.querySelectorAll('[data-tab]').forEach(el => { el.classList.toggle('active', el === tab); el.setAttribute('aria-selected', el === tab ? 'true' : 'false'); });
    document.querySelectorAll('[data-panel]').forEach(el => { el.hidden = el.dataset.panel !== panelName; });
  }
  const calendar = event.target.closest('[data-calendar]');
  if (calendar) {
    document.querySelectorAll('[data-calendar]').forEach(el=>el.classList.toggle('active',el===calendar));
    toast(`${calendar.dataset.calendar[0].toUpperCase()+calendar.dataset.calendar.slice(1)} calendar view selected (sample schedule).`);
  }
  if (event.target.classList.contains('modal-backdrop')) event.target.classList.remove('open');
});

document.addEventListener('input', (event) => {
  if (event.target.matches('[data-global-search], [data-table-search]')) {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('[data-searchable]').forEach(row => { row.hidden = !row.textContent.toLowerCase().includes(query); });
  }
});
document.addEventListener('change', (event) => {
  if (event.target.matches('[data-filter]')) document.querySelectorAll('[data-searchable]').forEach(row => { row.hidden = !row.textContent.toLowerCase().includes((event.target.value || '').toLowerCase()); });
});
document.addEventListener('submit', (event) => {
  if (event.target.matches('.demo-form')) {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    const message = event.target.dataset.success || 'Saved in this frontend demonstration.';
    if (event.target.closest('.modal')) document.querySelector('.modal-backdrop')?.classList.remove('open');
    toast(message);
  }
  if (event.target.id === 'login-form') {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    sessionStorage.setItem('kagando-demo-role', 'Administrator');
    window.location.href = 'index.html';
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.modal-backdrop.open')?.classList.remove('open');
    document.querySelector('.sidebar.open')?.classList.remove('open');
    document.querySelectorAll('.dropdown.open').forEach(el=>el.classList.remove('open'));
  }
});
const appRoot = document.querySelector('[data-page]');
if (appRoot) renderShell(appRoot);

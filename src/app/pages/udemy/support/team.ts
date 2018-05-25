export class Employee {
    empId = '';
    empName = '';
    skill = '';
}

export class Department {
    deptHead = '';
    deptName = '';
}


export class Team {
    teamName = '';
    teamManager = '';
    teamDept: Department;
    employees: Employee[];
}

export const ALL_TEAMS: Team[] = [
    {
        'teamName': 'Java Team',
        'teamManager': 'Yogi',
        'teamDept': {
            'deptHead': 'Modi',
            'deptName': 'M Commerce'
        },
        'employees': [
            {
                'empId': '101',
                'empName': 'Harish',
                'skill': 'Java'
            },
            {
                'empId': '111',
                'empName': 'Mohit',
                'skill': 'Angular'
            }
        ]
    }
];

export const ALL_SKILLS = [
    { name: 'Java', displayName: 'Java' },
    { name: 'Angular', displayName: 'Angular' },
    { name: 'Dot Net', displayName: 'Dot Net' }
];

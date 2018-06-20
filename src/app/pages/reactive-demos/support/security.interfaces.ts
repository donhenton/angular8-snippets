export class User {
    login: string;
    username: string;
    userid: number;
}

export class Applications {
    applicationName: string;
    id: number;
}

export class UserWithApps {
    username: string;
    applications: Applications[];
    mappedId: number
}

export class Group {
    id: number ;
    groupName: string;
}



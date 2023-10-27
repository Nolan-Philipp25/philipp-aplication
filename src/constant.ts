import { ReactNode, SetStateAction, Dispatch } from 'react';


export interface IMyContextData {
    data: {
        users: IUser[];
        timeSheets: ITimeEntry[];
      };
      setData: Dispatch<SetStateAction<{
        users: IUser[];
        timeSheets: ITimeEntry[];
      }>>;
}

export interface IMyProviderProps {
    children: ReactNode;
}

interface IAvatar {
    link: string | null;
}

interface IDepartment {
    id: string;
    title: string;
    managerId: string;
}

interface IDivision {
    id: string;
    title: string;
    managerId: string;
}

interface IManager {
    id: string;
    firstName: string;
    lastName: string;
    archivedAt: string | Date | null;
    email: string;
    phone: string;
    position: string;
    avatar: IAvatar | null;
}

export interface ITimeEntry {
    id: string;
    assessment: number;
    breakMinutes: number;
    minutes: number;
    startTime: string;
    endTime: string;
    note: string | null;
    status: string;
    month?: string;
    locationChecked: boolean;
    approvalPersonId: string | null;
    userId: string;
    companyId: string;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    phone: string;
    roleId: number;
    managerId: string | null;
    address: string | null;
    postalCode: string | null;
    city: string | null;
    country: string | null;
    subDepartment: { id: string; title: string } | null;
    manager:IManager | null;
    avatar: IAvatar | null;
    department: IDepartment | null;
    group: string | null;
    division: IDivision | null;
}

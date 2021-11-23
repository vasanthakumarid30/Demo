export interface User {
  userMId: string;
  empId: string;
  userName: string;
  userPassword: string;
  isUserActive: boolean;
  recordStatus: number;
}

export interface Hcp {
  hcpId: string;
  isSocialMediaAcc: boolean;
  socialMedia: string;
  firstName: string;
  lastName: string;
  specilizationId: Speciality[];
  clinicId: Clinic[];
  email: string;
  isActive: boolean;
  deactivateReason: string;
  deactivationDate: Date;
  userName: string;
  pasword: string;
  registeredHcp: string;
  registrationDate: Date;
  inPerAppntmntDuration: number;
  virtualAppntmntDuration: number;
  notificationType: string;
  language: string;
  isApproved: string;
  phone: string;
  syncCalendar: string;
  isCalendarSync: boolean;
  action: string;
}

export interface Speciality{
  specialityName?: string;
  specializationId?: string;
}

export interface Clinic {
  clinicId?: string;
  clinicName?: string;
  clinicCity?: string;
  clinicPhone?: string;
  clinicAddress?: string;
  clinicPostalCode?: string;
}

export interface DashboardCounts {
  HcpCount: number;
  ClinicCount: number;
}


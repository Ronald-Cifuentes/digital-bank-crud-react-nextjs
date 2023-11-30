export interface FlashMessage {
  message: any;
  type: string;
}

export interface AuthentificationData {
  jwt: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  sellerId: string;
  sellerName: string;
  role: string;
  permissions: any;
  facilityId: string;
  sellerType: string;
  isCollector: boolean;
  apiKey: string;
  loginError: string | JSX.Element;
  isAuthenticated: boolean;
  isChecking: boolean;
  loading?: boolean;
  sellerSapClient: string | null;
  sellerSapProvider: string | null;
  sellerIsPublished: boolean | null;
}

export interface NotificationResultInterface {
  data: UserNotificationInterface[];
  count: number;
}

export interface UserNotificationInterface {
  notification: NotificationInterface;
  opened: boolean;
}

export interface NotificationInterface {
  id: string;
  icon: string;
  icon_text?: string;
  label: string;
  config: NotificationConfigInterface;
  size: string;
}

export interface NotificationConfigInterface {
  content: string;
}

export interface Document {
  content: string;
  startDate: string;
  endDate: string;
  id: string;
  approvalLimitDate: string;
}

export interface Seller {
  id: string;
  publish: boolean;
  vendor_code_801_provider: string;
  vendor_code_801_client: string;
  terms_conditions_signed: number;
}

export interface INewReputationSeller {
  reputationCategory: string;
  isNewReputation: boolean;
  isFirstLogin: boolean;
}

import React from 'react';
import { FlashMessage, AuthentificationData, Document, Seller, INewReputationSeller } from './interfaces';

export const emptyAuth = {
  jwt: '',
  email: '',
  firstName: '',
  lastName: '',
  sellerId: '',
  role: '',
  permissions: '',
  userId: '',
  facilityId: '',
  sellerName: '',
  sellerType: '',
  apiKey: '',
  isCollector: false,
  loginError: '',
  isAuthenticated: false,
  isChecking: true,
  loading: false,
};

export default React.createContext({
  auth: emptyAuth,
  setAuth: (auth: AuthentificationData) => {
    /* empty */
  },
  flashMessage: { message: '', type: '' },
  flashMessageTimeout: (msgAndType: FlashMessage) => {
    /* empty */
  },
  checkExpiration: () => {
    /* empty */
  },
  login: (values: { email: string; password: string }) => {
    /* empty */
  },
  logout: () => {
    /* empty */
  },
  // notifications: [] as UserNotificationInterface[],
  notifications: [],
  openNotification: (id: string) => {
    /* empty */
  },
  terms: [{ content: '', endDate: '', startDate: '', approvalLimitDate: '' }],
  setTerms: (terms: Document[]) => {
    /* empty */
  },
  seller: {
    id: '',
    publish: false,
    vendor_code_801_provider: '',
    vendor_code_801_client: '',
    terms_conditions_signed: 0,
  },
  setSeller: (seller: Seller) => {
    /* empty */
  },
  reputation: { reputationCategory: 'Bloqueo', isNewReputation: false },
  setReputation: (reputation: INewReputationSeller) => {
    /* empty */
  },
  statusCompleteTourGuide: false,
  setStatusCompleteTourGuide: (status: boolean) => {
    /* empty */
  },
});

import { combineReducers } from 'redux';
import { userData, tenantData, messages, notifications, docs, properties} from './reducers'
import { selectedTenantMedia } from './tenantReducer';
import { tenantPaidRent } from './paymentReducer'

const rootReducer = combineReducers({
  selectedTenantMedia: selectedTenantMedia,
  userData: userData,
  tenantData: tenantData,
  messages: messages,
  notifications: notifications,
  docs: docs,
  properties: properties
});

export default rootReducer;
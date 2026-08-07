/** Hand-picked stewardship tools + referral perks for /tools */
import { tools_investing } from './tools_investing';
import { tools_banking } from './tools_banking';
import { tools_shopping } from './tools_shopping';
import { tools_other } from './tools_other';

export const tools = [
  ...tools_investing,
  ...tools_banking,
  ...tools_shopping,
  ...tools_other,
];

import {Event} from '@strapi/database/lib/lifecycles';
import {ApiPostPost, ApiTroopTroop} from '../../../../../schemas';

export type AfterXXXEvent = Event & {result?: any, state?: any}
export type Post = ApiPostPost['attributes'] & {id: number}
export type Troop = ApiTroopTroop['attributes'] & {id: number}

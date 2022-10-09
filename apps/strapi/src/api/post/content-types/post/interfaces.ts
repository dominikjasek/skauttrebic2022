import {Event} from '@strapi/database/lib/lifecycles';
import {ApiPostPost} from '../../../../../schemas';

export type AfterXXXEvent = Event & {result?: any, state?: any}
export type Post = ApiPostPost['attributes']


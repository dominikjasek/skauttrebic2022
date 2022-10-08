import {Event} from '@strapi/database/lib/lifecycles';

export type AfterXXXEvent = Event & {result?: any, state?: any}

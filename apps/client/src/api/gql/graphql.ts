/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Id as string or int */
  Id: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Clubroom = {
  __typename?: 'Clubroom';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  photos?: Maybe<UploadFileRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ClubroomPhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ClubroomEntity = {
  __typename?: 'ClubroomEntity';
  attributes?: Maybe<Clubroom>;
  id?: Maybe<Scalars['Id']>;
};

export type ClubroomEntityResponse = {
  __typename?: 'ClubroomEntityResponse';
  data?: Maybe<ClubroomEntity>;
};

export type ClubroomInput = {
  content?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Id']>;
  name: Scalars['String'];
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
};

export type CommentNested = {
  __typename?: 'CommentNested';
  approvalStatus?: Maybe<Scalars['String']>;
  author?: Maybe<CommentAuthor>;
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Array<Maybe<CommentNested>>>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Id']>;
  removed?: Maybe<Scalars['Boolean']>;
  threadOf?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommentSingle = {
  __typename?: 'CommentSingle';
  approvalStatus?: Maybe<Scalars['String']>;
  author?: Maybe<CommentAuthor>;
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Id']>;
  removed?: Maybe<Scalars['Boolean']>;
  threadOf?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommentsComment = {
  __typename?: 'CommentsComment';
  approvalStatus?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorUser?: Maybe<UsersPermissionsUserEntityResponse>;
  blockReason?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  related?: Maybe<Scalars['String']>;
  removed?: Maybe<Scalars['Boolean']>;
  reports?: Maybe<CommentsCommentReportRelationResponseCollection>;
  threadOf?: Maybe<CommentsCommentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity';
  attributes?: Maybe<CommentsComment>;
  id?: Maybe<Scalars['Id']>;
};

export type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse';
  data?: Maybe<CommentsCommentEntity>;
};

export type CommentsCommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  reason: Enum_Commentscommentreport_Reason;
  related?: Maybe<CommentsCommentEntityResponse>;
  resolved?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity';
  attributes?: Maybe<CommentsCommentReport>;
  id?: Maybe<Scalars['Id']>;
};

export type CommentsCommentReportFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentReportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  reason?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<CommentsCommentFiltersInput>;
  resolved?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection';
  data: Array<CommentsCommentReportEntity>;
};

export type ComponentHomepageHomeImage = {
  __typename?: 'ComponentHomepageHomeImage';
  background_color?: Maybe<Scalars['String']>;
  id: Scalars['Id'];
  photo: UploadFileEntityResponse;
  text?: Maybe<Scalars['String']>;
  text_color?: Maybe<Scalars['String']>;
};

export type ComponentHomepageHomeImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageHomeImageFiltersInput>>>;
  background_color?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageHomeImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageHomeImageFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  text_color?: InputMaybe<StringFilterInput>;
};

export type ComponentHomepageHomeImageInput = {
  background_color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Id']>;
  photo?: InputMaybe<Scalars['Id']>;
  text?: InputMaybe<Scalars['String']>;
  text_color?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageTroop = {
  __typename?: 'ComponentHomepageTroop';
  age_gender_information: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Id'];
  logo: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentHomepageTroopFiltersInput = {
  age_gender_information?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageTroopFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageTroopFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageTroopFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomepageTroopInput = {
  age_gender_information?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Id']>;
  logo?: InputMaybe<Scalars['Id']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuItem = {
  __typename?: 'ComponentMenuItem';
  id: Scalars['Id'];
  items?: Maybe<Array<Maybe<ComponentMenuItem2>>>;
  label: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
};


export type ComponentMenuItemItemsArgs = {
  filters?: InputMaybe<ComponentMenuItem2FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuItem2 = {
  __typename?: 'ComponentMenuItem2';
  id: Scalars['Id'];
  label: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
};

export type ComponentMenuItem2FiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuItem2FiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentMenuItem2FiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuItem2FiltersInput>>>;
};

export type ComponentMenuItem2Input = {
  id?: InputMaybe<Scalars['Id']>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  newTab?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuItemFiltersInput>>>;
  items?: InputMaybe<ComponentMenuItem2FiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuItemFiltersInput>>>;
};

export type ComponentMenuItemInput = {
  id?: InputMaybe<Scalars['Id']>;
  items?: InputMaybe<Array<InputMaybe<ComponentMenuItem2Input>>>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  newTab?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentPersonCardKontakt = {
  __typename?: 'ComponentPersonCardKontakt';
  about?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Id'];
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<UploadFileEntityResponse>;
  role?: Maybe<Scalars['String']>;
};

export type ComponentPersonCardKontaktFiltersInput = {
  about?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentPersonCardKontaktFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  nickname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonCardKontaktFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonCardKontaktFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<StringFilterInput>;
};

export type ComponentPersonCardKontaktInput = {
  about?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Id']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['Id']>;
  role?: InputMaybe<Scalars['String']>;
};

export type ComponentPersonCardTroop = {
  __typename?: 'ComponentPersonCardTroop';
  contactCards?: Maybe<Array<Maybe<ComponentPersonCardKontakt>>>;
  id: Scalars['Id'];
  name: Scalars['String'];
};


export type ComponentPersonCardTroopContactCardsArgs = {
  filters?: InputMaybe<ComponentPersonCardKontaktFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPersonCardTroopFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPersonCardTroopFiltersInput>>>;
  contactCards?: InputMaybe<ComponentPersonCardKontaktFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonCardTroopFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonCardTroopFiltersInput>>>;
};

export type ComponentPersonCardTroopInput = {
  contactCards?: InputMaybe<Array<InputMaybe<ComponentPersonCardKontaktInput>>>;
  id?: InputMaybe<Scalars['Id']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentTotemLegend = {
  __typename?: 'ComponentTotemLegend';
  audio: UploadFileEntityResponse;
  id: Scalars['Id'];
  photo: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentTotemLegendFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTotemLegendFiltersInput>>>;
  not?: InputMaybe<ComponentTotemLegendFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTotemLegendFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentTotemLegendInput = {
  audio?: InputMaybe<Scalars['Id']>;
  id?: InputMaybe<Scalars['Id']>;
  photo?: InputMaybe<Scalars['Id']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentTotemTotemComment = {
  __typename?: 'ComponentTotemTotemComment';
  id: Scalars['Id'];
  name: Scalars['String'];
  text: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  contactCards?: Maybe<Array<Maybe<ComponentPersonCardKontakt>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactContactCardsArgs = {
  filters?: InputMaybe<ComponentPersonCardKontaktFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['Id']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  contactCards?: InputMaybe<Array<InputMaybe<ComponentPersonCardKontaktInput>>>;
};

export type CreateComment = {
  author?: InputMaybe<CreateCommentAuthor>;
  content: Scalars['String'];
  relation: Scalars['String'];
  threadOf?: InputMaybe<Scalars['Id']>;
};

export type CreateCommentAuthor = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Id'];
  name: Scalars['String'];
};

export type CreateReport = {
  commentId?: InputMaybe<Scalars['Id']>;
  content: Scalars['String'];
  reason?: InputMaybe<ReportReason>;
  relation: Scalars['String'];
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

export enum Enum_Topbar_Type {
  Info = 'info',
  Upozorneni = 'upozorneni'
}

export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate';
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  design?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  templateReferenceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailDesignerEmailTemplateEntity = {
  __typename?: 'EmailDesignerEmailTemplateEntity';
  attributes?: Maybe<EmailDesignerEmailTemplate>;
  id?: Maybe<Scalars['Id']>;
};

export type EmailDesignerEmailTemplateEntityResponse = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponse';
  data?: Maybe<EmailDesignerEmailTemplateEntity>;
};

export type EmailDesignerEmailTemplateEntityResponseCollection = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponseCollection';
  data: Array<EmailDesignerEmailTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type EmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  bodyHtml?: InputMaybe<StringFilterInput>;
  bodyText?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  design?: InputMaybe<JsonFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  templateReferenceId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>;
  bodyText?: InputMaybe<Scalars['String']>;
  design?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  templateReferenceId?: InputMaybe<Scalars['Int']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Clubroom | CommentsComment | CommentsCommentReport | ComponentHomepageHomeImage | ComponentHomepageTroop | ComponentMenuItem | ComponentMenuItem2 | ComponentPersonCardKontakt | ComponentPersonCardTroop | ComponentTotemLegend | ComponentTotemTotemComment | Contact | EmailDesignerEmailTemplate | Homepage | I18NLocale | Leader | PhotoGallery | Post | TopBar | Totem | Troop | TroopContact | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  about: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<ComponentHomepageHomeImage>>>;
  troops?: Maybe<Array<Maybe<ComponentHomepageTroop>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomepageImagesArgs = {
  filters?: InputMaybe<ComponentHomepageHomeImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomepageTroopsArgs = {
  filters?: InputMaybe<ComponentHomepageTroopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['Id']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  about?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<ComponentHomepageHomeImageInput>>>;
  troops?: InputMaybe<Array<InputMaybe<ComponentHomepageTroopInput>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['Id']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IdentifyCommentAuthor = {
  id: Scalars['Id'];
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Leader = {
  __typename?: 'Leader';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LeaderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LeaderEntity = {
  __typename?: 'LeaderEntity';
  attributes?: Maybe<Leader>;
  id?: Maybe<Scalars['Id']>;
};

export type LeaderEntityResponse = {
  __typename?: 'LeaderEntityResponse';
  data?: Maybe<LeaderEntity>;
};

export type LeaderInput = {
  content?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAbuseReport: Report;
  createComment: CommentSingle;
  createEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createTroop?: Maybe<TroopEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteClubroom?: Maybe<ClubroomEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteLeader?: Maybe<LeaderEntityResponse>;
  deletePhotoGallery?: Maybe<PhotoGalleryEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteTopBar?: Maybe<TopBarEntityResponse>;
  deleteTotem?: Maybe<TotemEntityResponse>;
  deleteTroop?: Maybe<TroopEntityResponse>;
  deleteTroopContact?: Maybe<TroopContactEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeComment: CommentSingle;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateClubroom?: Maybe<ClubroomEntityResponse>;
  updateComment: CommentSingle;
  updateContact?: Maybe<ContactEntityResponse>;
  updateEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateLeader?: Maybe<LeaderEntityResponse>;
  updatePhotoGallery?: Maybe<PhotoGalleryEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateTopBar?: Maybe<TopBarEntityResponse>;
  updateTotem?: Maybe<TotemEntityResponse>;
  updateTroop?: Maybe<TroopEntityResponse>;
  updateTroopContact?: Maybe<TroopContactEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAbuseReportArgs = {
  input: CreateReport;
};


export type MutationCreateCommentArgs = {
  input: CreateComment;
};


export type MutationCreateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateTroopArgs = {
  data: TroopInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTroopArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveCommentArgs = {
  input: RemoveComment;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateClubroomArgs = {
  data: ClubroomInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateComment;
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
};


export type MutationUpdateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateLeaderArgs = {
  data: LeaderInput;
};


export type MutationUpdatePhotoGalleryArgs = {
  data: PhotoGalleryInput;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
};


export type MutationUpdateTopBarArgs = {
  data: TopBarInput;
};


export type MutationUpdateTotemArgs = {
  data: TotemInput;
};


export type MutationUpdateTroopArgs = {
  data: TroopInput;
  id: Scalars['ID'];
};


export type MutationUpdateTroopContactArgs = {
  data: TroopContactInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PhotoGallery = {
  __typename?: 'PhotoGallery';
  createdAt?: Maybe<Scalars['DateTime']>;
  troops?: Maybe<Array<Maybe<ComponentMenuItem>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PhotoGalleryTroopsArgs = {
  filters?: InputMaybe<ComponentMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PhotoGalleryEntity = {
  __typename?: 'PhotoGalleryEntity';
  attributes?: Maybe<PhotoGallery>;
  id?: Maybe<Scalars['Id']>;
};

export type PhotoGalleryEntityResponse = {
  __typename?: 'PhotoGalleryEntityResponse';
  data?: Maybe<PhotoGalleryEntity>;
};

export type PhotoGalleryInput = {
  troops?: InputMaybe<Array<InputMaybe<ComponentMenuItemInput>>>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  public?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  schedule_publish_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  troops?: Maybe<TroopRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_likes?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type PostFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostTroopsArgs = {
  filters?: InputMaybe<TroopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostUser_LikesArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['Id']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  public?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  schedule_publish_at?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  troops?: InputMaybe<TroopFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_likes?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PostInput = {
  content?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  public?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  schedule_publish_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  troops?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  user_likes?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  clubroom?: Maybe<ClubroomEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>;
  findAllFlat?: Maybe<ResponseFindAll>;
  findAllInHierarchy: Array<Maybe<CommentNested>>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  leader?: Maybe<LeaderEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  photoGallery?: Maybe<PhotoGalleryEntityResponse>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  topBar?: Maybe<TopBarEntityResponse>;
  totem?: Maybe<TotemEntityResponse>;
  troop?: Maybe<TroopEntityResponse>;
  troopContact?: Maybe<TroopContactEntityResponse>;
  troops?: Maybe<TroopEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFindAllFlatArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  relation: Scalars['String'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFindAllInHierarchyArgs = {
  relation: Scalars['String'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTotemArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTroopArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTroopsArgs = {
  filters?: InputMaybe<TroopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RemoveComment = {
  author?: InputMaybe<IdentifyCommentAuthor>;
  id?: InputMaybe<Scalars['Id']>;
  relation: Scalars['String'];
};

export type Report = {
  __typename?: 'Report';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Id']>;
  reason?: Maybe<ReportReason>;
  related?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** Reason of abuse report */
export enum ReportReason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type ResponseFindAll = {
  __typename?: 'ResponseFindAll';
  data?: Maybe<Array<Maybe<CommentSingle>>>;
  meta?: Maybe<ResponseMeta>;
};

export type ResponseMeta = {
  __typename?: 'ResponseMeta';
  pagination?: Maybe<ResponsePagination>;
};

export type ResponsePagination = {
  __typename?: 'ResponsePagination';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TopBar = {
  __typename?: 'TopBar';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Topbar_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TopBarEntity = {
  __typename?: 'TopBarEntity';
  attributes?: Maybe<TopBar>;
  id?: Maybe<Scalars['Id']>;
};

export type TopBarEntityResponse = {
  __typename?: 'TopBarEntityResponse';
  data?: Maybe<TopBarEntity>;
};

export type TopBarInput = {
  content?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Topbar_Type>;
};

export type Totem = {
  __typename?: 'Totem';
  createdAt?: Maybe<Scalars['DateTime']>;
  legend?: Maybe<Array<Maybe<ComponentTotemLegend>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TotemLegendArgs = {
  filters?: InputMaybe<ComponentTotemLegendFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TotemEntity = {
  __typename?: 'TotemEntity';
  attributes?: Maybe<Totem>;
  id?: Maybe<Scalars['Id']>;
};

export type TotemEntityResponse = {
  __typename?: 'TotemEntityResponse';
  data?: Maybe<TotemEntity>;
};

export type TotemInput = {
  legend?: InputMaybe<Array<InputMaybe<ComponentTotemLegendInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Troop = {
  __typename?: 'Troop';
  color?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  posts?: Maybe<PostRelationResponseCollection>;
  subscribed_users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TroopPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TroopSubscribed_UsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TroopContact = {
  __typename?: 'TroopContact';
  createdAt?: Maybe<Scalars['DateTime']>;
  troop?: Maybe<Array<Maybe<ComponentPersonCardTroop>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TroopContactTroopArgs = {
  filters?: InputMaybe<ComponentPersonCardTroopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TroopContactEntity = {
  __typename?: 'TroopContactEntity';
  attributes?: Maybe<TroopContact>;
  id?: Maybe<Scalars['Id']>;
};

export type TroopContactEntityResponse = {
  __typename?: 'TroopContactEntityResponse';
  data?: Maybe<TroopContactEntity>;
};

export type TroopContactInput = {
  troop?: InputMaybe<Array<InputMaybe<ComponentPersonCardTroopInput>>>;
};

export type TroopEntity = {
  __typename?: 'TroopEntity';
  attributes?: Maybe<Troop>;
  id?: Maybe<Scalars['Id']>;
};

export type TroopEntityResponse = {
  __typename?: 'TroopEntityResponse';
  data?: Maybe<TroopEntity>;
};

export type TroopEntityResponseCollection = {
  __typename?: 'TroopEntityResponseCollection';
  data: Array<TroopEntity>;
  meta: ResponseCollectionMeta;
};

export type TroopFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TroopFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  confidential?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TroopFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TroopFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  subscribed_users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TroopInput = {
  color?: InputMaybe<Scalars['String']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  subscribed_users?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
};

export type TroopRelationResponseCollection = {
  __typename?: 'TroopRelationResponseCollection';
  data: Array<TroopEntity>;
};

export type UpdateComment = {
  author?: InputMaybe<IdentifyCommentAuthor>;
  content: Scalars['String'];
  id?: InputMaybe<Scalars['Id']>;
  relation: Scalars['String'];
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['Id']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['Id']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['Id']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['Id']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Id'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Id'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['Id']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['Id']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  post_likes?: Maybe<PostRelationResponseCollection>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  subscribing_troops?: Maybe<TroopRelationResponseCollection>;
  unsubscribeToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsUserPost_LikesArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserSubscribing_TroopsArgs = {
  filters?: InputMaybe<TroopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['Id']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  nickName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  post_likes?: InputMaybe<PostFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  subscribing_troops?: InputMaybe<TroopFiltersInput>;
  unsubscribeToken?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  post_likes?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Id']>;
  subscribing_troops?: InputMaybe<Array<InputMaybe<Scalars['Id']>>>;
  unsubscribeToken?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetClubroomDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubroomDataQuery = { __typename?: 'Query', clubroom?: { __typename?: 'ClubroomEntityResponse', data?: { __typename?: 'ClubroomEntity', attributes?: { __typename?: 'Clubroom', title?: string | null, content?: string | null, photos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: any | null, attributes?: { __typename?: 'UploadFile', name: string, previewUrl?: string | null, url: string, formats?: any | null, caption?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null } | null } | null };

export type GetContactCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactCardsQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', id?: any | null, attributes?: { __typename?: 'Contact', contactCards?: Array<{ __typename?: 'ComponentPersonCardKontakt', id: any, name: string, email?: string | null, about?: string | null, nickname?: string | null, phone?: string | null, role?: string | null, photo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type GetTroopContactCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTroopContactCardsQuery = { __typename?: 'Query', troopContact?: { __typename?: 'TroopContactEntityResponse', data?: { __typename?: 'TroopContactEntity', attributes?: { __typename?: 'TroopContact', troop?: Array<{ __typename?: 'ComponentPersonCardTroop', id: any, name: string, contactCards?: Array<{ __typename?: 'ComponentPersonCardKontakt', id: any, name: string, email?: string | null, about?: string | null, nickname?: string | null, phone?: string | null, role?: string | null, photo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null> | null } | null } | null } | null };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', about: string, images?: Array<{ __typename?: 'ComponentHomepageHomeImage', id: any, text?: string | null, background_color?: string | null, text_color?: string | null, photo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } } | null> | null, troops?: Array<{ __typename?: 'ComponentHomepageTroop', title: string, age_gender_information: string, description: string, id: any, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } } | null> | null } | null } | null } | null };

export type GetLeaderDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaderDataQuery = { __typename?: 'Query', leader?: { __typename?: 'LeaderEntityResponse', data?: { __typename?: 'LeaderEntity', attributes?: { __typename?: 'Leader', title?: string | null, content?: string | null, files?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: any | null, attributes?: { __typename?: 'UploadFile', name: string, previewUrl?: string | null, url: string, formats?: any | null, caption?: string | null } | null }> } | null } | null } | null } | null };

export type CreateCommentMutationVariables = Exact<{
  relation: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentSingle', id?: any | null } };

export type DeleteCommentMutationVariables = Exact<{
  relation: Scalars['String'];
  id: Scalars['Id'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', removeComment: { __typename?: 'CommentSingle', id?: any | null, removed?: boolean | null } };

export type GetCommentsQueryVariables = Exact<{
  relation: Scalars['String'];
}>;


export type GetCommentsQuery = { __typename?: 'Query', findAllFlat?: { __typename?: 'ResponseFindAll', data?: Array<{ __typename?: 'CommentSingle', id?: any | null, content: string, blocked?: boolean | null, createdAt?: string | null, author?: { __typename?: 'CommentAuthor', id?: any | null, name: string, email?: string | null, avatar?: string | null } | null } | null> | null } | null };

export type CreateTotemCommentMutationVariables = Exact<{
  relation: Scalars['String'];
  authorId: Scalars['Id'];
  authorName: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateTotemCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentSingle', id?: any | null } };

export type GetTotemDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotemDataQuery = { __typename?: 'Query', totem?: { __typename?: 'TotemEntityResponse', data?: { __typename?: 'TotemEntity', attributes?: { __typename?: 'Totem', legend?: Array<{ __typename?: 'ComponentTotemLegend', id: any, title: string, audio: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, photo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: any | null, attributes?: { __typename?: 'UploadFile', caption?: string | null, formats?: any | null, url: string } | null } | null } } | null> | null } | null } | null } | null };

export type ListTroopsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTroopsQuery = { __typename?: 'Query', troops?: { __typename?: 'TroopEntityResponseCollection', data: Array<{ __typename?: 'TroopEntity', id?: any | null, attributes?: { __typename?: 'Troop', name: string, color?: string | null } | null }> } | null };


export const GetClubroomDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubroomData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClubroomDataQuery, GetClubroomDataQueryVariables>;
export const GetContactCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContactCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContactCardsQuery, GetContactCardsQueryVariables>;
export const GetTroopContactCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTroopContactCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"troopContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"troop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contactCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTroopContactCardsQuery, GetTroopContactCardsQueryVariables>;
export const HomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"background_color"}},{"kind":"Field","name":{"kind":"Name","value":"text_color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"troops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"age_gender_information"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>;
export const GetLeaderDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderDataQuery, GetLeaderDataQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Id"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllFlat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"1000"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const CreateTotemCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTotemComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Id"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorName"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTotemCommentMutation, CreateTotemCommentMutationVariables>;
export const GetTotemDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotemData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTotemDataQuery, GetTotemDataQueryVariables>;
export const ListTroopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListTroops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"troops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ListTroopsQuery, ListTroopsQueryVariables>;
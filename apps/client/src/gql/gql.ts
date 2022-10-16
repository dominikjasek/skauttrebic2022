/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        troops {\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.HomepageDocument,
};

export function graphql(source: "query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        troops {\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        troops {\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
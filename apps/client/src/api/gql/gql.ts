/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query GetClubroomData {\n  clubroom {\n    data {\n      attributes {\n        title\n        content\n        photos {\n          data {\n            attributes {\n              name\n              previewUrl\n              url\n              formats\n              caption\n              width\n              height\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetClubroomDataDocument,
    "query GetContactCards {\n  contact {\n    data {\n      id\n      attributes {\n        contactCards {\n          id\n          name\n          email\n          about\n          nickname\n          phone\n          role\n          photo {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetContactCardsDocument,
    "query GetTroopContactCards {\n  troopContact {\n    data {\n      attributes {\n        troop {\n          id\n          name\n          contactCards {\n            id\n            name\n            email\n            about\n            nickname\n            phone\n            role\n            photo {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetTroopContactCardsDocument,
    "query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        about\n        troops {\n          title\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.HomepageDocument,
    "mutation CreateComment($relation: String!, $content: String!) {\n  createComment(input: {relation: $relation, content: $content}) {\n    id\n  }\n}": types.CreateCommentDocument,
    "mutation DeleteComment($relation: String!, $id: Id!) {\n  removeComment(input: {id: $id, relation: $relation}) {\n    id\n    removed\n  }\n}": types.DeleteCommentDocument,
    "query GetComments($relation: String!) {\n  findAllFlat(relation: $relation, pagination: {pageSize: 1000}) {\n    data {\n      id\n      content\n      blocked\n      author {\n        id\n        name\n        email\n        avatar\n      }\n      createdAt\n    }\n  }\n}": types.GetCommentsDocument,
    "mutation CreateTotemComment($relation: String!, $authorId: Id!, $authorName: String!, $content: String!) {\n  createComment(\n    input: {relation: $relation, content: $content, author: {id: $authorId, name: $authorName}}\n  ) {\n    id\n  }\n}": types.CreateTotemCommentDocument,
    "query GetTotemData {\n  totem {\n    data {\n      attributes {\n        legend {\n          audio {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          id\n          photo {\n            data {\n              id\n              attributes {\n                caption\n                formats\n                url\n              }\n            }\n          }\n          title\n        }\n      }\n    }\n  }\n}": types.GetTotemDataDocument,
    "query ListTroops {\n  troops {\n    data {\n      attributes {\n        name\n        color\n      }\n      id\n    }\n  }\n}": types.ListTroopsDocument,
};

export function graphql(source: "query GetClubroomData {\n  clubroom {\n    data {\n      attributes {\n        title\n        content\n        photos {\n          data {\n            attributes {\n              name\n              previewUrl\n              url\n              formats\n              caption\n              width\n              height\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetClubroomData {\n  clubroom {\n    data {\n      attributes {\n        title\n        content\n        photos {\n          data {\n            attributes {\n              name\n              previewUrl\n              url\n              formats\n              caption\n              width\n              height\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
export function graphql(source: "query GetContactCards {\n  contact {\n    data {\n      id\n      attributes {\n        contactCards {\n          id\n          name\n          email\n          about\n          nickname\n          phone\n          role\n          photo {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetContactCards {\n  contact {\n    data {\n      id\n      attributes {\n        contactCards {\n          id\n          name\n          email\n          about\n          nickname\n          phone\n          role\n          photo {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
export function graphql(source: "query GetTroopContactCards {\n  troopContact {\n    data {\n      attributes {\n        troop {\n          id\n          name\n          contactCards {\n            id\n            name\n            email\n            about\n            nickname\n            phone\n            role\n            photo {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetTroopContactCards {\n  troopContact {\n    data {\n      attributes {\n        troop {\n          id\n          name\n          contactCards {\n            id\n            name\n            email\n            about\n            nickname\n            phone\n            role\n            photo {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
export function graphql(source: "query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        about\n        troops {\n          title\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Homepage {\n  homepage {\n    data {\n      attributes {\n        images {\n          id\n          photo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n          text\n          background_color\n          text_color\n        }\n        about\n        troops {\n          title\n          age_gender_information\n          description\n          id\n          logo {\n            data {\n              attributes {\n                url\n                formats\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
export function graphql(source: "mutation CreateComment($relation: String!, $content: String!) {\n  createComment(input: {relation: $relation, content: $content}) {\n    id\n  }\n}"): (typeof documents)["mutation CreateComment($relation: String!, $content: String!) {\n  createComment(input: {relation: $relation, content: $content}) {\n    id\n  }\n}"];
export function graphql(source: "mutation DeleteComment($relation: String!, $id: Id!) {\n  removeComment(input: {id: $id, relation: $relation}) {\n    id\n    removed\n  }\n}"): (typeof documents)["mutation DeleteComment($relation: String!, $id: Id!) {\n  removeComment(input: {id: $id, relation: $relation}) {\n    id\n    removed\n  }\n}"];
export function graphql(source: "query GetComments($relation: String!) {\n  findAllFlat(relation: $relation, pagination: {pageSize: 1000}) {\n    data {\n      id\n      content\n      blocked\n      author {\n        id\n        name\n        email\n        avatar\n      }\n      createdAt\n    }\n  }\n}"): (typeof documents)["query GetComments($relation: String!) {\n  findAllFlat(relation: $relation, pagination: {pageSize: 1000}) {\n    data {\n      id\n      content\n      blocked\n      author {\n        id\n        name\n        email\n        avatar\n      }\n      createdAt\n    }\n  }\n}"];
export function graphql(source: "mutation CreateTotemComment($relation: String!, $authorId: Id!, $authorName: String!, $content: String!) {\n  createComment(\n    input: {relation: $relation, content: $content, author: {id: $authorId, name: $authorName}}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateTotemComment($relation: String!, $authorId: Id!, $authorName: String!, $content: String!) {\n  createComment(\n    input: {relation: $relation, content: $content, author: {id: $authorId, name: $authorName}}\n  ) {\n    id\n  }\n}"];
export function graphql(source: "query GetTotemData {\n  totem {\n    data {\n      attributes {\n        legend {\n          audio {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          id\n          photo {\n            data {\n              id\n              attributes {\n                caption\n                formats\n                url\n              }\n            }\n          }\n          title\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetTotemData {\n  totem {\n    data {\n      attributes {\n        legend {\n          audio {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          id\n          photo {\n            data {\n              id\n              attributes {\n                caption\n                formats\n                url\n              }\n            }\n          }\n          title\n        }\n      }\n    }\n  }\n}"];
export function graphql(source: "query ListTroops {\n  troops {\n    data {\n      attributes {\n        name\n        color\n      }\n      id\n    }\n  }\n}"): (typeof documents)["query ListTroops {\n  troops {\n    data {\n      attributes {\n        name\n        color\n      }\n      id\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
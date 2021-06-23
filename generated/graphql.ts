import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** 募集 */
export type Project = {
  __typename?: 'Project';
  /** 募集のID */
  id: Scalars['ID'];
  /** 画像URL（一覧表示用） */
  imageUrlSmall?: Maybe<Scalars['String']>;
  /** 画像URL（詳細画面用） */
  imageUrlLarge?: Maybe<Scalars['String']>;
  /** タイトル */
  title: Scalars['String'];
  /** なにをやっているのか */
  whatDescription: Scalars['String'];
  /** なぜやっているのか */
  whyDescription: Scalars['String'];
  /** どうやるのか */
  howDescription: Scalars['String'];
  /** 募集に紐づくメンバー */
  staffs?: Maybe<Array<Maybe<User>>>;
};

export type Query = {
  __typename?: 'Query';
  /** 募集一覧を返すクエリ */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** 募集IDから募集を返すクエリ */
  project?: Maybe<Project>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};

/** ユーザー */
export type User = {
  __typename?: 'User';
  /** ユーザーのID */
  id: Scalars['ID'];
  /** ユーザー名 */
  name: Scalars['String'];
  /** アバター画像URL */
  avatarUrl?: Maybe<Scalars['String']>;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = (
  { __typename?: 'Query' }
  & { projects?: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'whyDescription' | 'whatDescription' | 'howDescription' | 'imageUrlSmall' | 'imageUrlLarge'>
    & { staffs?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'avatarUrl'>
    )>>> }
  )>>> }
);


export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    title
    whyDescription
    whatDescription
    howDescription
    imageUrlSmall
    imageUrlLarge
    staffs {
      id
      name
      avatarUrl
    }
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;

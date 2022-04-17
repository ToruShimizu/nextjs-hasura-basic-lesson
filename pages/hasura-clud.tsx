import { VFC, useState, FormEvent } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from '../queries/queries'
import {
  GetUsersQuery,
  CreateUserMutation,
  DeleteUserMutation,
  UpdateUserMutation,
} from '../types/generated/graphql'
import { Layout } from '../components/Layout'
import { UserItem } from '../components/UserItem'

const HasuraCRUD: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network',
  })
  const [update_users_by_pk] = useMutation<UpdateUserMutation>(UPDATE_USER)
  const [insert_users_one] = useMutation<CreateUserMutation>(CREATE_USER, {
    // CREATEとDELETEは処理後に自動的にキャッシュが更新されないため手動で更新する
    update(cache, { data: { insert_users_one } }) {
      // 作ったユーザーのcacheIdを取得する
      const cacheId = cache.identity(insert_users_one)
      cache.modify({
        fields: {
          // existingUsers === 既存の配列
          users(existingUsers, { toReference }) {
            // toReference(cacheId)でinsert_users_oneを取得できる
            return [toReference(cacheId), ...existingUsers]
          },
        },
      })
    },
  })

  return (
    <Layout title="Hasura CRUD">
      <p className="mb-3 font-bold">Hasura CRUD</p>
    </Layout>
  )
}

export default HasuraCRUD

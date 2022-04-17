import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../graphql/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // useQueryが実行されるたびにfetchする
    // fetchPolicy: 'network-only',
    // 通信中は既存のキャッシュを表示する
    fetchPolicy: 'cache-and-network',
    // 一旦取得したデータがキャッシュにある場合はキャッシュを読みにいく。常に最初に取得したデータしか見えない。頻繁に変わる場合は不向き
    // fetchPolicy: 'cache-first',
    // fetchPolicy: 'no-cache',
  })
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )

  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain

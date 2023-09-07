import Layout from '@/components/layout'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter();
  const splitUrl = router.asPath.split('/');
  const lastSlug = splitUrl[splitUrl.length - 1];

  return (
    <Layout title={lastSlug}>
      <div id='post' className='space-y-6 lg:space-y-12'>
        <div id='divider' className='p-1'></div>
      </div>
    </Layout>

  )
}

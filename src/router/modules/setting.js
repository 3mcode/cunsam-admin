import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/setting',
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'setting/system',
      name: `${pre}setting-system`,
      meta: { ...meta, cache: true, title: '系统配置' },
      component: () => import('@/views/setting/setting/system')
    },
    {
      path: 'setting/info',
      name: `${pre}setting-info`,
      meta: { ...meta, cache: true, title: '系统信息' },
      component: () => import('@/views/setting/setting/info')
    }
  ])('setting-')
}

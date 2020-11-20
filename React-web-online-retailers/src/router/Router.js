import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

/*
[
  component: lazy(() => import('组件路径')) // 路由懒加载
  exactBol: Boolean  // 是否绝对匹配 false不写  children存在时false
  pathName: '页面路径'
  children:[ // 是否嵌套路由 有就写，没有就不写  嵌套路由只有一级
    同上
  ]
]
*/
import Hone from '@/pages/home'
const RouterList = [
  {
    component: lazy(() => import('@/pages/layout')),
    exactBol: false,
    pathName: '/',
    children: [
      {
        component: Hone,
        exactBol: true,
        pathName: '/',
      },
    ],
  },
]

const router = () => (
  <Router>
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <>
          {RouterList.map((x, i) => {
            let PageModule = x.component
            return (
              <Route
                key={'route' + i}
                path={x.pathName}
                exact={x.children ? false : x.exactBol || false}
                render={(props) => {
                  return (
                    <PageModule {...props}>
                      {x.children &&
                        x.children.length > 0 &&
                        x.children.map((child, index) => {
                          return (
                            <Route
                              key={'routeChild' + index}
                              path={child.pathName}
                              exact={child.exactBol || false}
                              component={child.component}
                            ></Route>
                          )
                        })}
                    </PageModule>
                  )
                }}
              />
            )
          })}
        </>
      </Switch>
    </Suspense>
  </Router>
)
export default router

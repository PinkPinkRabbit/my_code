import React, {useContext} from "react";
import {RouterContext} from './Router'

export default function Link({ to, children }) {
  const context = useContext(RouterContext);

  return (
    <a
      href={to}
      onClick={(ev) => {
        //防止刷新页面
        ev.preventDefault();
        //修改地址栏
        window.history.pushState({}, "", to);
        // 通知路由进行切换
        context.changePathAction(to);
      }}
    >
      {children}
    </a>
  );
}

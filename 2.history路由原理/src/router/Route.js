import React, { useContext } from "react";
import { RouterContext } from "./Router";

export default function Route(props) {
  const context = useContext(RouterContext);

  return context.path === props.path ? <props.component /> : null;
  // return context.path === props.path ? <props.component location, history, match /> : null;
  // return context.path === props.path ? {props.render({location, history, match})} : null;
  // return context.path === props.path ? {chilren} : null;
}


import React from "react";
import * as Icons from "react-icons-kit/fa";
import { Icon } from 'react-icons-kit'

export const getIcon   = ( iconName: string) => {
const icon = Icons[iconName];
return <Icon icon={icon} />;
}

export const getAllIcons = () => {
  return Object.keys(Icons)
}

import * as Icons from "react-icons-kit/fa";


export const getIcon   = ( iconName: string) => {
const icon = Icons[iconName];
return icon
}

export const getAllIcons = () => {
  return Object.keys(Icons)
}
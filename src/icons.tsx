
import React from "react";
import * as Icons from "react-icons/fa";


export const getIcon   = ( iconName: string) => {
const Icon = Icons[iconName];
return (<><Icon /></>);
}

export const getAllIcons = () => {

const icons = Object.keys(Icons);
return icons;



}
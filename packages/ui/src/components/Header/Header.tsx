'use client';

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

{/*
import React from "react";
import ResponsiveNav from "../NavBar/ResponsiveNav";
import { Metadata } from "next";

// TODO: crentralize metadata
const metadata: Metadata = {
  title: 'Monorepo pick & play',
  description: 'Here we can pick and play with our custom components'
};

const Header = () => {
  return (
    <header className="top-0 z-50 bg-custom-dark-secondary shadow-md">
      <ResponsiveNav />
    </header>
  );
};
*/}


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Menu',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'Recomendaciones',
    key: 'suggestions',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Promociones',
    key: 'disccounts',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'about',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       	Nosotros 
      </a>
    ),
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;

import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

function getItem(label, key) {
  return {
    label,
    key,
  };
}

function MainLayout({ selectedKeys, children, padding = 45 }) {
  const contentStyle = useMemo(() => {
    return { padding };
  }, [padding]);
  const { Header, Content, Sider } = Layout;
  const items = [getItem(<Link to="/list">설문조사 관리</Link>, 'list')];
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={selectedKeys}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header></Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;

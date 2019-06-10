import { Component } from 'react';
import { Layout, Menu, Icon,BackTop } from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


export default class BasicLayout extends Component {
    render() {
      return (
        <Layout>
          <Sider theme="light" breakpoint="lg" collapsible>
            <div className="logo"/>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/helloworld'>
                              <Icon type="pie-chart" />
                              <span>首页</span>
                    </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
              >
                 <Menu.Item key="2"><Link to="/account/dashboard/analysis">分析页</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/account/dashboard/monitor">监控页</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/account/dashboard/workplace">工作台</Link></Menu.Item>

              </SubMenu>
            </Menu>
          </Sider>
          <Layout >
            {/* <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header> */}
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          <div>
    <BackTop />
  </div>
        </Layout>
      )
    }
  }
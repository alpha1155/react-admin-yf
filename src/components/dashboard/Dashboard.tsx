/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/b1.jpg';
import {
    CameraOutlined,
    CloudOutlined,
    HeartOutlined,
    MailOutlined,
    RightOutlined,
    SyncOutlined,
} from '@ant-design/icons';

const pluginMap = new Map([
    [
        'weather',
        {
            title: '天气',
            content: '捕捉关键词后发送附加城市的天气',
            keyWords: ['天气'],
        },
    ],
    [
        'anime',
        {
            title: '涩涩',
            content: '捕捉关键词后发送一张动漫图片',
            keyWords: ['涩图', '我要涩涩', '开始涩涩'],
        },
    ],
    [
        'dog',
        {
            title: '舔狗日记',
            content: '捕捉关键词后发送一段舔狗日记',
            keyWords: ['舔狗日记'],
        },
    ],
    [
        'encourage',
        {
            title: '鸡汤',
            content: '捕捉关键词后发送一段鸡汤文学',
            keyWords: ['鸡汤', '毒鸡汤'],
        },
    ],
    [
        'theBeauty',
        {
            title: '看看美女',
            content: '捕捉关键词后发送一张美女图片',
            keyWords: ['MV', 'MM', 'MZ', '美女', '妹妹', '妹子'],
        },
    ],
    [
        'qrcode',
        {
            title: '生成二维码',
            content: '捕捉关键词后将附加内容转成二维码发送出来',
            keyWords: ['qr', 'qrcode', '二维码'],
        },
    ],
    [
        'whatIsHot',
        {
            title: '热搜',
            content: '捕捉关键词后发送对应热搜榜',
            keyWords: ['zhihu', '知乎', 'douyin', '抖音'],
        },
    ],
]);
const plugin = [
    {
        name: 'whatIsHot',
        title: '热搜',
        content: '捕捉关键词后发送对应热搜榜',
        keyWords: ['zhihu', '知乎', 'douyin', '抖音'],
    },
];
let sum = (value: any, key: any): any => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
};
class Dashboard extends React.Component {
    constructor(props: any) {
        super(props);
    }
    getAll() {
        let list: JSX.Element[] = [];
        pluginMap.forEach((value, key, map) => {
            list.push(
                // let list = plugin.map((value) => (
                <div className="gutter-box">
                    <Card bordered={false} title={value.title}>
                        <div className="clear y-center">
                            <div className="pull-left mr-m">
                                <RightOutlined className="text-2x text-success" />
                            </div>
                            <div className="clear">
                                <h3>{value.content}</h3>
                                <h4>关键词：{value.keyWords.join('、')}</h4>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        });
        console.log(list);
        return list;
    }
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        {this.getAll()}
                    </Col>
                    {/* <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <HeartOutlined className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CloudOutlined type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云数据</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CameraOutlined className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MailOutlined className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div> */}
                    {/* <Col className="gutter-row" md={4} /> */}
                    {/* <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>任务</h3>
                                    <small>10个已经完成，2个待完成，1个正在进行中</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <Timeline>
                                    <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                                    <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>联调接口</p>
                                        <p>功能验收</p>
                                    </Timeline.Item>

                                    <Timeline.Item color="#108ee9">
                                        <p>登录功能设计</p>
                                        <p>权限验证</p>
                                        <p>页面排版</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col> */}
                    {/* <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col> */}
                </Row>
                {/* <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">鸣人</span>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">佐助</span>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">小樱</span>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">雏田</span>
                                            <span className="text-muted">
                                                鸣人君。。。那个。。。我。。喜欢你..
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined type="sync" />
                                </span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
            </div>
        );
    }
}

export default Dashboard;

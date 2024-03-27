export default {
    name: "单嘉隆",
    birthday: "1997-10-10",
    gender: "男",
    mobile: "17826155875",
    school:'南通大学',
    major:'地理信息科学',
    workExperience:'4年',
    skills:['vue2/3','js','ts','css/scss','vite/webpack','Openlayer','leaflet','Cesium','WebGL','SuperMap iServer','Geoserver','uni-app'],
    projectList: [
        {
            name:'巨灾保险系统',
            desc:'为人保再保险公司开发,基于各类自然灾害风险因子,分析全国各区县风险等级,分配保额',
            content:[
                '搭建前端系统框架(vue2,openlayer),编写核心地图方法(图层加载,地图切换,量测工具等等)',
                '编写再保险业务核心逻辑',
                '分发页面,带领团队开发,把控项目进度',
                '系统兼容性问题解决, 性能优化'
            ],
            difficult:[
                {
                    desc:'f12调试问题,devtool源码混乱,source中很多同名文件,找不到真实的源码',
                    resolve:'配置webpack的output选项,将真实源码输出到单独目录'
                },
                {
                    desc:'浏览器兼容低版本chrome内核',
                    resolve:'package.json配置browserslist'
                }
            ]
        },
        {
            name:'xx区安全生产超级地图',
            desc:'为xx区开发,统计管理区内所有企业',
            content:[
                '搭建前端系统框架(vue3,ts,cesium),编写核心地图方法(图层加载,地图切换,量测工具等等)',
                '编写再保险业务核心逻辑',
                '分发页面,带领团队开发,把控项目进度',
                '系统兼容性问题解决, 性能优化'
            ],
            difficult:[
                {
                    desc:'f12调试问题,devtool源码混乱,source中很多同名文件,找不到真实的源码',
                    resolve:'配置webpack的output选项,将真实源码输出到单独目录'
                },
                {
                    desc:'浏览器兼容低版本chrome内核',
                    resolve:'package.json配置browserslist'
                }
            ]
        }
    ],
    workProfile: [
        {
            company: "南京国图信息技术有限公司",
            title: "WebGIS开发工程师",
            content: "负责公司GIS产品开发",
            timeRange: "2020年7月-2022年10月"
        },
        {
            company: "南京航天宏图信息技术有限公司",
            title: "WebGIS开发工程师",
            content: "负责公司GIS产品开发",
            timeRange: "2022年10月至今"
        }
    ]
}
export const config ={
    name:"emptyd-design",
    LogoSrc:require('../public/favicon.png'),
    menuList:[
        {
            pathname: '/home/home', title: '首页', icon: 'schedule'
        },
        {
            pathname: '/home/rules', title: '开发规范', icon: 'schedule',
            sub: [
                { pathname: '/home/rules/intro', title: '简介', icon: 'form', },
                { pathname: '/home/rules/web', title: 'web规范', icon: 'desktop', },
                { pathname: '/home/rules/mobile', title: '移动规范', icon: 'mobile', },
            ]
        },
        {
            pathname: '/home/components', title: '组件', icon: 'form',
            sub: [
                { pathname: '/home/components/Ebeard', title: '面包屑导航：Ebeard' },
                { pathname: '/home/components/EcodeHighlight', title: '代码高亮：EcodeHighlight'},
                { pathname: '/home/components/EcolorPicker', title: '颜色选择器：EcolorPicker'},
                { pathname: '/home/components/EDrawer', title: '抽屉组件：EDrawer'},
                { pathname: '/home/components/Eform', title: '表单组件：Eform'},
                { pathname: '/home/components/EformHoc', title: 'HOC表单组件：EformHoc'},
                { pathname: '/home/components/EHeaderHoc', title: '头部组件：EHeaderHoc'},
                { pathname: '/home/components/EListHoc', title: '列表组件：EListHoc'},
                { pathname: '/home/components/ELoading', title: 'loading组件：ELoading'},
                { pathname: '/home/components/EMenu', title: '菜单组件：EMenu'},
                { pathname: '/home/components/EsearchListHoc', title: '查询列表页面：EsearchListHoc'},
                { pathname: '/home/components/ESiderMenu', title: '侧栏导航：ESiderMenu'},
                { pathname: '/home/components/EText', title: '动态文字：EText'},
                { pathname: '/home/components/EtreeHoc', title: '树形菜单：EtreeHoc'},
                { pathname: '/home/components/EuploadHoc', title: '上传文件：EuploadHoc'},
                { pathname: '/home/components/Eviewer', title: '图片查看器：Eviewer'},
            ]
        },
    ],
    mainRoute: ["/login","/"],
    footerText:"emptyd-desigin created by lxj",
    userMsg:{
        accessToken: "048a7418-b74f-4a64-a245-1d1076db6930",
        userId: 251,
        lawenforceCode: null,
        telephone: "123",
        name: "lxj",
        roleType: 0,
        roleTypeName: null,
        deptId: 43,
        departmentIdList: "43",
        departmentNameList: "测试",
        subDepartmentId: null,
        avatarS: null,
        avatarB: null,
        leaderId: null,
        deptType: 2
    }
}
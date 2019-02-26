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
            pathname: '/home/documents', title: '组件', icon: 'form',
            sub: [
                { pathname: '/home/documents/ElistHoc', title: '列表组件：ElistHoc'},
                { pathname: '/home/documents/Ebeard', title: '面包屑导航：Ebeard' },
                { pathname: '/home/documents/EcodeHighlight', title: '代码高亮：EcodeHighlight'},
                { pathname: '/home/documents/EcolorPicker', title: '颜色选择器：EcolorPicker'},
                { pathname: '/home/documents/Edrawer', title: '抽屉组件：Edrawer'},
                { pathname: '/home/documents/EtreeHoc', title: '树形菜单：EtreeHoc'},
                { pathname: '/home/documents/Eviewer', title: '图片查看器：Eviewer'},
                { pathname: '/home/documents/EformHoc', title: 'HOC表单组件：EformHoc'},
                { pathname: '/home/documents/EheaderHoc', title: '头部组件：EheaderHoc'},
                { pathname: '/home/documents/Eloading', title: 'loading组件：ELoading'},
                { pathname: '/home/documents/EsearchListHoc', title: '查询列表页面：EsearchListHoc'},
                { pathname: '/home/documents/EText', title: '文字动效：EText'},
                { pathname: '/home/documents/EuploadImg', title: '图片上传：EuploadImg'},
                { pathname: '/home/documents/EFabButton', title: '浮动按钮：EFabButton'},
            ]
        },{
            pathname: '/home/tool', title: '样式和工具', icon: 'form',
            sub: [
                { pathname: '/home/tool/style', title: '通用样式'},
                { pathname: '/home/tool/js', title: '工具类'}
            ]
        },
    ],
    mainRoute: ["/login","/"],
    footerText:"emptyd-desigin created by freemenL",
    userMsg:{
        accessToken: "048a7418-b74f-4a64-a245-1d1076db6930",
        userId: 251,
        lawenforceCode: null,
        telephone: "123",
        name: "freemenL",
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
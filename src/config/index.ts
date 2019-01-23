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
                { pathname: '/home/rules/web', title: 'web规范', icon: 'form', },
                { pathname: '/home/rules/mobile', title: '移动规范', icon: 'table', },
            ]
        }
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
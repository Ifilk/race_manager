# 计算机竞赛管理系统

## 快速开始
控制台执行：
```shell
npm install -g yarn tyarn     #安装tyarn
tyarn                         #安装依赖文件
```

## ToDo List
- [x] 假数据生成
- [x] 假Api
- [x] 登录页面
- [x] 注册页面
- [x] 比赛管理页面
- [x] 比赛详情页面
- [ ] 管理页面跳转详情页面(目前只能url)
- [ ] css完善
- [ ] 路由守卫
- [ ] 写ppt

## 文件结构
```
+-- public                 #公共静态资源
+-- _src
|   +-- _assets            #静态资源（假数据）
|   +-- _components        #组件文件夹
|   |   +-- Footer.jsx             #页脚组件
|   |   +-- github_logo.jsx
|   |   +-- Header.jsx             #页头组件
|   |   +-- LoginBox.jsx           #登录组件
|   |   +-- Register.jsx           #注册组件
|   |   +-- RaceManagementBox.jsx  #比赛管理组件
|   |   +-- RaceDetailBox.jsx      #比赛详情项组件
|   +-- _pages             #页面文件夹
|   |   +-- LoginPage.jsx          #登录页面
|   |   +-- RegisterPage.jsx       #注册页面
|   |   +-- RaceDetailPage.jsx     #比赛详情页面
|   |   +-- RaceManagementPage.jsx #比赛管理页面
|   +-- _styles            #css文件夹
|   |   +-- main.css               #通用css
|   |   +-- theme.css              #主题css
|   +-- api.js             #假fetch接口
|   +-- Test.jsx           #生成假数据
|   +-- utils.js           #工具代码
|   +-- main.jsx           #路由声明
```

## 假fetch接口定义
### Dto定义
```ts
// 比赛 对象
interface Race{
    uid: string //r.{0,6}
    race_name: string
    apply_date: string //ISO8601标准
    start_date: string
    end_date: string
    sponsors: string
    participants: string[] //team.uid[]
}
// 队伍 对象
interface Team{
    uid: string //t.{0,6}
    team_name: string
    affiliate: string
    apply_date: string //ISO8601标准
    members: string[] //member.uid[]
}
// 成员 对象
interface Member{
    uid: string //m.{0,6}
    name: string
}
```
### API定义
```
getMemberByUid(uid: string) -> Member
通过uid获取Member

getRaceByUid(uid: string) -> Race
通过uid获取Race

getTeamByUid(uid: string) -> Teawm
通过uid获取Team

getAllRaces() -> Race[]
获取全部的Race

getAllMembers() -> Member[]
获取全部的Member

getAllTeams() -> Team[]
获取全部的Team
```
## 路由定义
```
/                  登录页面
/test              生成测试数据
/races             比赛管理页面
/races/:uid        比赛详情页面 （参数uid：race的uid）
```

## 演示

登录页面
![image.png](https://s2.loli.net/2024/10/19/43JqaIukTpwhzQ6.png)
管理页面
![image.png](https://s2.loli.net/2024/10/19/OIJPRAq4XrLz53h.png)
详情页面
![image](https://s2.loli.net/2024/10/19/gdoDjOJb1HutBFf.png)
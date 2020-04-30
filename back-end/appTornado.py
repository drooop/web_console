import tornado.ioloop
import tornado.web
import json
import time


menuList = [
    {
        'id': 1,
        'authName': 'WebConsole',
        'path': 'null',
                'children': [
                    {
                        'id': 11,
                        'authName': 'CMD Window',
                        'path': 'consoleMain',
                    },
                    {
                        'id': 12,
                        'authName': 'CMD Get',
                        'path': 'consoleGetCMD',
                    },
                    {
                        'id': 13,
                        'authName': 'Config',
                        'path': 'consoleConfig',
                    },
                ]
    },
    {
        'id': 2,
        'authName': 'Test',
        'path': 'null',
                'children': [
                    {
                        'id': 21,
                        'authName': 'test1',
                        'path': 'roles',
                    },
                    {
                        'id': 22,
                        'authName': 'test2',
                        'path': 'rights',
                    }
                ]
    },
    # {
    #     'id': 3,
    #     'authName': '商品管理',
    #     'path': 'null',
    #             'children': [
    #                 {
    #                     'id': 31,
    #                     'authName': '商品列表',
    #                     'path': 'null',
    #                 },
    #                 {
    #                     'id': 32,
    #                     'authName': '分类参数',
    #                     'path': 'null',
    #                 },
    #                 {
    #                     'id': 33,
    #                     'authName': '商品分类',
    #                     'path': 'null',
    #                 }
    #             ]
    # },
    # {
    #     'id': 4,
    #     'authName': '订单管理',
    #     'path': 'null',
    #             'children': [
    #                 {
    #                     'id': 41,
    #                     'authName': '订单列表',
    #                     'path': 'null',
    #                 },
    #                 {
    #                     'id': 42,
    #                     'authName': '订单列表2',
    #                     'path': 'null',
    #                 }

    #             ]
    # },
    # {
    #     'id': 5,
    #     'authName': '数据统计',
    #     'path': 'null',
    #             'children': [
    #                 {
    #                     'id': 51,
    #                     'authName': '数据1',
    #                     'path': 'null',
    #                 },
    #                 {
    #                     'id': 52,
    #                     'authName': '数据2',
    #                     'path': 'null',
    #                 }
    #             ]
    # }
]


class Hello(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.set_header('Access-Control-Allow-Methods',
                        'POST, GET, PUT, DELETE')
        self.write(json.dumps({'k1': 'v1'}))


class Menu(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.set_header('Access-Control-Allow-Methods',
                        'POST, GET, PUT, DELETE')
        menu = {
            'data': menuList,
            'meta': {
                'msg': '获取菜单列表成功',
                'status': 200
            }
        }
        self.write(json.dumps(menu))


class Login(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.set_header('Access-Control-Allow-Methods',
                        'POST, GET, PUT, DELETE')
        if self.request.method == "POST":
            data = self.request.get_data().decode('utf-8')
            data_dict = json.loads(data)
            if data_dict.get('username') == 'drop' and data_dict.get('password') == 'TQcps123':
                self.write(json.dumps({'data': {'token': 'test_token 123321123'},
                                       'meta': {'msg': 'success', 'status': 200}}))
            else:
                self.write(json.dumps(
                    {'meta': {'msg': 'fail to login', 'status': 400}}))
        else:
            self.write(json.dumps({'data': 'method error'}))


def make_app():
    return tornado.web.Application([
        (r"/", Hello),
        (r"/api/menus", Menu),
        (r"/api/login", Login)
    ], debug=True)


if __name__ == "__main__":
    app = make_app()
    print('ready to start...')
    app.listen(81)
    tornado.ioloop.IOLoop.current().start()

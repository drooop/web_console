import tornado.ioloop
import tornado.web
import os
# from tornado.web import StaticFileHandler as sfh


def make_app():
    # current_path = os.path.dirname(__file__)
    return tornado.web.Application([
        (
            r"/login/(.*)",
            tornado.web.StaticFileHandler, {
              "path": "dist"
            }
        ),
        (
            r"css/(.*)",
            tornado.web.StaticFileHandler, {
              "path": "dist/css"
            }
        ),
        (
            r"js/(.*)",
            tornado.web.StaticFileHandler, {
              "path": "dist/js"
            }
        ),
        (
            r"img(.*)",
            tornado.web.StaticFileHandler, {
              "path": "dist/img"
            }
        ),
        (
            r"fonts(.*)",
            tornado.web.StaticFileHandler, {
              "path": "dist/fonts"
            }
        ),
        
    ], debug=True)


if __name__ == "__main__":
    app = make_app()
    print('ready to start...')
    app.listen(82)
    tornado.ioloop.IOLoop.current().start()

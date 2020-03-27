define({ "api": [
  {
    "type": "git",
    "url": "/admin/getalladmin",
    "title": "获取管理员信息",
    "name": "getalladmin",
    "group": "admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>管理员信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "git",
    "url": "/user/getalldata",
    "title": "获取管理员信息",
    "name": "getalldata",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "user"
  }
] });

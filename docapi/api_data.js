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
    "url": "/goods/goodsadd",
    "title": "增加货品信息",
    "name": "goodsadd",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodsbykw",
    "title": "模糊商品信息",
    "name": "goodsbykw",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodsbypage",
    "title": "分页货品信息",
    "name": "goodsbypage",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodsbytype",
    "title": "分类商品信息",
    "name": "goodsbytype",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodsdel",
    "title": "删除货品信息",
    "name": "goodsdel",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodslist",
    "title": "获取商品信息",
    "name": "goodslist",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/goods/goodsupdate",
    "title": "更新货品信息",
    "name": "goodsupdate",
    "group": "goods",
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
    "filename": "router/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "git",
    "url": "/user/getalldata",
    "title": "获取用户信息",
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

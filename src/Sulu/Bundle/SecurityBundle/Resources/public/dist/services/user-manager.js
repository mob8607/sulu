define(["jquery"],function(a){"use strict";var b="/admin/api/users";return{find:function(c){var d=a.Deferred();return a.ajax(b+"/"+c,{method:"GET",contentType:"application/json; charset=utf-8",success:function(a){d.resolve(a)}.bind(this),error:function(a){d.reject(a)}.bind(this)}),d.promise()}}});
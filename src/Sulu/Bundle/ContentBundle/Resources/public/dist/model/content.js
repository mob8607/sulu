define(["mvc/relationalmodel"],function(a){"use strict";return new a({urlRoot:"/admin/api/nodes",fullSave:function(a,b,c,d,e,f,g,h){return f=_.defaults(f||{},{url:this.urlRoot+(void 0!==this.get("id")?"/"+this.get("id"):"")+"?webspace="+a+"&language="+b+(d?"&type="+d:"")+(c?"&parent="+c:"")+(g?"&force="+g:"")+(h?"&action="+h:"")}),this.save.call(this,e,f)},fullFetch:function(a,b,c,d){return d=_.defaults(d||{},{url:this.urlRoot+(void 0!==this.get("id")?"/"+this.get("id"):"")+"?webspace="+a+"&language="+b+"&breadcrumb="+!!c}),this.fetch.call(this,d)},fullDestroy:function(a,b,c,d){var e=this.get("id");if(!e)throw new Error("The model cannot be destroyed without an ID");return d=_.defaults(d||{},{url:this.urlRoot+"/"+e+"?webspace="+a+"&language="+b+"&force="+c}),this.destroy.call(this,d)},defaults:function(){return{}}})});
!function(){Ember.C3=Ember.Namespace.create(),Ember.C3.VERSION="0.1.4",Ember.libraries.register("Ember C3",Ember.C3.VERSION)}(),function(){"use strict";Ember.C3.ChartComponent=Ember.Component.extend({tagName:"div",classNames:["c3-chart-component"],data:{},axis:{},regions:{},bar:{},pie:{},donut:{},gauge:{},grid:{},legend:{},tooltip:{},subchart:{},zoom:{},size:{},padding:{},color:{},transition:{},_chart:void 0,chart:function(){var a=this;if(Ember.isEqual(a.get("_chart"),void 0)){var b=a.get("element");if(Ember.isEqual(b,void 0))return void 0;var c=a.get("_config"),d=c3.generate(c);return a.set("_chart",d),d}return a.get("_chart")}.property("_config"),_config:function(){var a=this,b=a.getProperties(["data","axis","regions","bar","pie","donut","gauge","grid","legend","tooltip","subchart","zoom","size","padding","color","transition"]);return b.bindto=a.get("element"),b}.property("data","axis","regions","bar","pie","donut","gauge","grid","legend","tooltip","subchart","zoom","size","padding","color","transition"),dataDidChange:function(){var a=this,b=a.get("chart");b.load(a.get("data"))}.observes("data").on("didInsertElement")}),Ember.Handlebars.helper("c3-chart",Ember.C3.ChartComponent)}();
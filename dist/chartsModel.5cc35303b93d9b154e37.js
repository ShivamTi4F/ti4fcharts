/*! For license information please see chartsModel.5cc35303b93d9b154e37.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ti4fcharts=e():t.ti4fcharts=e()}(self,(()=>(()=>{"use strict";var t={408:(t,e)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var o={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,a={};function n(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||o}function i(){}function l(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||o}n.prototype.isReactComponent={},n.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},n.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},i.prototype=n.prototype;var s=l.prototype=new i;s.constructor=l,r(s,n.prototype),s.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},294:(t,e,o)=>{o(408)}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{default:()=>t}),o(294);const t={connectToRestaurant:function(t){},LineChartModel:function(t){return{labels:t.labels,datasets:t.datasets}},ChartDatasetModel:function(t){return{label:t.label,data:t.data,backgroundColor:t.backgroundColor?t.backgroundColor:"",borderColor:t.borderColor?t.borderColor:"#ADD8E6",tension:t.tension?t.tension:.2,fill:!!t.fill&&t.fill,pointStyle:t.pointStyle?t.pointStyle:"rect",pointBorderColor:t.pointBorderColor?t.pointBor:"#fff",showLine:!t.showLine||t.showLine}},BarChartModel:function(t){return{labels:t.labels,datasets:t.datasets}},DonatChartModel:function(t){return{labels:t.labels,datasets:[{data:t.data,backgroundColor:t.backgroundColor?t.backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderColor:t.borderColor?t.borderColor:["#fff"],borderWidth:t.borderWidth?t.borderWidth:.5}]}}}})(),r})()));
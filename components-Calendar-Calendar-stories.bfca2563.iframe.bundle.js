"use strict";(self.webpackChunkreact_d3=self.webpackChunkreact_d3||[]).push([[978],{"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/components/Calendar/Calendar.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clickable:function(){return Clickable},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Calendar_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Clickable$parameters,_Clickable$parameters2,_Clickable$parameters3,objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Calendar=__webpack_require__("./src/components/Calendar/Calendar.tsx"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),date=__webpack_require__("./src/utils/date.ts"),useCalendar=function useCalendar(){var currentDate=new Date,currentYearMonth=(0,date.m)(currentDate),_useState=(0,react.useState)(currentDate.getDate()),_useState2=(0,slicedToArray.Z)(_useState,2),selectedDate=_useState2[0],setSelectedDate=_useState2[1],_useState3=(0,react.useState)(currentYearMonth),_useState4=(0,slicedToArray.Z)(_useState3,2),yearMonth=_useState4[0],setYearMonth=_useState4[1];return{currentDate:currentDate,yearMonth:yearMonth,selectedDate:selectedDate,handleDateClick:function handleDateClick(date){return function(){setSelectedDate(date)}},handleYearMonthUpdate:function handleYearMonthUpdate(change){return function(){setSelectedDate(0),setYearMonth((function(prev){return(0,date.RP)(prev,change)}))}}}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar_stories={title:"Components/Calendar",component:Calendar.Z,argTypes:{}},Default=function Default(){var _useCalendar=useCalendar(),currentDate=_useCalendar.currentDate,yearMonth=_useCalendar.yearMonth,selectedDate=_useCalendar.selectedDate;return(0,jsx_runtime.jsx)(Calendar.Z,{currentDate:currentDate,yearMonthData:yearMonth,selectedDate:selectedDate})},Clickable=function Clickable(){var _useCalendar2=useCalendar(),currentDate=_useCalendar2.currentDate,yearMonth=_useCalendar2.yearMonth,selectedDate=_useCalendar2.selectedDate,handleDateClick=_useCalendar2.handleDateClick;return(0,jsx_runtime.jsx)(Calendar.Z,{currentDate:currentDate,yearMonthData:yearMonth,selectedDate:selectedDate,onDateClick:handleDateClick})};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const {\n    currentDate,\n    yearMonth,\n    selectedDate\n  } = useCalendar();\n  return <Calendar currentDate={currentDate} yearMonthData={yearMonth} selectedDate={selectedDate}></Calendar>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Clickable.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Clickable.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Clickable$parameters=Clickable.parameters)||void 0===_Clickable$parameters?void 0:_Clickable$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const {\n    currentDate,\n    yearMonth,\n    selectedDate,\n    handleDateClick\n  } = useCalendar();\n  return <Calendar currentDate={currentDate} yearMonthData={yearMonth} selectedDate={selectedDate} onDateClick={handleDateClick}></Calendar>;\n}"},null===(_Clickable$parameters2=Clickable.parameters)||void 0===_Clickable$parameters2||null===(_Clickable$parameters3=_Clickable$parameters2.docs)||void 0===_Clickable$parameters3?void 0:_Clickable$parameters3.source)})});var __namedExportsOrder=["Default","Clickable"]},"./src/components/Calendar/Calendar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Calendar_Calendar}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,Calendar_style_templateObject,Calendar_style_templateObject2,Calendar_style_templateObject3,Calendar_style_templateObject4,Calendar_style_templateObject5,react=__webpack_require__("./node_modules/react/index.js"),utils_date=__webpack_require__("./src/utils/date.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),DayContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  min-width: 48px;\n  width: 48px;\n  height: 48px;\n\n  background-color: ",";\n\n  border-top-left-radius: ",";\n  border-bottom-left-radius: ",";\n\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n"])),(function(props){return props.$isInRange?theme.Z.colors.gray100:theme.Z.colors.white}),(function(props){return props.$isStart?"50%":""}),(function(props){return props.$isStart?"50%":""}),(function(props){return props.$isEnded?"50%":""}),(function(props){return props.$isEnded?"50%":""})),DayDefaultBox=styled_components_browser_esm.ZP.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 46px;\n  height: 46px;\n  background-color: ",";\n  box-sizing: border-box;\n\n  font-size: ",";\n  font-weight: 600;\n\n  cursor: ",";\n  border-radius: 50%;\n\n  &:hover {\n    border: ",";\n  }\n"])),theme.Z.colors.white,theme.Z.fontSize.small,(function(props){return props.$isClickable?"pointer":"default"}),(function(props){return props.$isClickable?"0.5px solid ".concat(theme.Z.colors.black):""})),TodayBox=(0,styled_components_browser_esm.ZP)(DayDefaultBox)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),theme.Z.colors.blue300,theme.Z.colors.blue800,theme.Z.colors.blue300),DayInRangeBox=(0,styled_components_browser_esm.ZP)(DayDefaultBox)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  background-color: inherit;\n"]))),SelectedDayBox=(0,styled_components_browser_esm.ZP)(DayDefaultBox)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n\n  color: ",";\n"])),theme.Z.colors.black,theme.Z.colors.white),DisabledDayBox=(0,styled_components_browser_esm.ZP)(DayDefaultBox)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n\n  color: ",";\n\n  pointer-events: none;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),theme.Z.colors.white,theme.Z.colors.gray300,theme.Z.colors.white),CalendarContainer=styled_components_browser_esm.ZP.div(Calendar_style_templateObject||(Calendar_style_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-block;\n"]))),CalendarHeader=styled_components_browser_esm.ZP.header(Calendar_style_templateObject2||(Calendar_style_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  margin-bottom: 6px;\n  text-align: center;\n\n  & div {\n    font-weight: 600;\n  }\n"]))),WeekOfDaysBox=(0,styled_components_browser_esm.ZP)(DayDefaultBox)(Calendar_style_templateObject3||(Calendar_style_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  color: ",";\n\n  font-size: ",";\n  font-weight: 400;\n"])),theme.Z.colors.gray400,theme.Z.fontSize.xsmall),DaysContainer=styled_components_browser_esm.ZP.div(Calendar_style_templateObject4||(Calendar_style_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 48px);\n  grid-auto-rows: 48px;\n  border-spacing: 0 2px;\n  grid-row-gap: 1px;\n"]))),DaysOfWeekContainer=(0,styled_components_browser_esm.ZP)(DaysContainer)(Calendar_style_templateObject5||(Calendar_style_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  margin-bottom: 2px;\n\n  & div {\n    color: ",";\n\n    cursor: default;\n  }\n"])),theme.Z.colors.gray600),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Day=function Day(_ref){var year=_ref.year,month=_ref.month,day=_ref.day,_ref$isToday=_ref.isToday,isToday=void 0!==_ref$isToday&&_ref$isToday,_ref$isSelected=_ref.isSelected,isSelected=void 0!==_ref$isSelected&&_ref$isSelected,_ref$isInRange=_ref.isInRange,isInRange=void 0!==_ref$isInRange&&_ref$isInRange,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isStart=_ref.isStart,isStart=void 0!==_ref$isStart&&_ref$isStart,_ref$isEnded=_ref.isEnded,isEnded=void 0!==_ref$isEnded&&_ref$isEnded,onClick=_ref.onClick,DayBox=DayDefaultBox;return isInRange&&(DayBox=DayInRangeBox),isToday&&(DayBox=TodayBox),isSelected&&(DayBox=SelectedDayBox),isDisabled&&(DayBox=DisabledDayBox),(0,jsx_runtime.jsx)(DayContainer,{$isInRange:isInRange,$isStart:isStart,$isEnded:isEnded,children:day&&(0,jsx_runtime.jsx)(DayBox,{role:onClick?"button":"none",tabIndex:onClick?0:void 0,"aria-label":year?"".concat(year,"년 ").concat(month,"월 ").concat(day,"일"):"".concat(day,"요일"),onClick:onClick,onKeyDown:function handleOptionKeyPress(event){"Enter"===event.key&&(null==onClick||onClick())},$isClickable:!!onClick,children:day})})},Day_Day=Day;try{Day.displayName="Day",Day.__docgenInfo={description:"",displayName:"Day",props:{year:{defaultValue:null,description:"년",name:"year",required:!1,type:{name:"string | number"}},month:{defaultValue:null,description:"월",name:"month",required:!1,type:{name:"string | number"}},day:{defaultValue:null,description:"날짜 또는 요일",name:"day",required:!1,type:{name:"string | number"}},isToday:{defaultValue:{value:"false"},description:"날짜가 오늘인지에 대한 여부",name:"isToday",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:{value:"false"},description:"날짜가 선택되었는지에 대한 여부",name:"isSelected",required:!1,type:{name:"boolean"}},isInRange:{defaultValue:{value:"false"},description:"날짜가 선택된 날짜 범위 안에 있는에 대한 여부",name:"isInRange",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"날짜 선택이 불가능한지에 대한 여부",name:"isDisabled",required:!1,type:{name:"boolean"}},isStart:{defaultValue:{value:"false"},description:"체크인 날짜인지에 대한 여부",name:"isStart",required:!1,type:{name:"boolean"}},isEnded:{defaultValue:{value:"false"},description:"체크아웃 날짜인지에 대한 여부",name:"isEnded",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"날짜를 클릭하면 발생할 이벤트",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/Day/Day.tsx#Day"]={docgenInfo:Day.__docgenInfo,name:"Day",path:"src/components/Calendar/Day/Day.tsx#Day"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/constants/index.ts"),Calendar=function Calendar(_ref){var currentDate=_ref.currentDate,yearMonthData=_ref.yearMonthData,dateRange=_ref.dateRange,isFutureDaysRestricted=_ref.isFutureDaysRestricted,isPastDaysRestricted=_ref.isPastDaysRestricted,hasRangeRestriction=_ref.hasRangeRestriction,maxDateRange=_ref.maxDateRange,selectedDate=_ref.selectedDate,onDateClick=_ref.onDateClick,dayBoxSize=(0,react.useMemo)((function(){return(0,utils_date.MO)(yearMonthData)}),[yearMonthData]);return(0,jsx_runtime.jsxs)(CalendarContainer,{"aria-label":"달력",tabIndex:-1,children:[(0,jsx_runtime.jsx)(CalendarHeader,{tabIndex:-1,"aria-label":"".concat(yearMonthData.year,"년 ").concat(yearMonthData.month,"월"),children:(0,jsx_runtime.jsxs)("h4",{children:[yearMonthData.year,"년 ",yearMonthData.month,"월"]})}),(0,jsx_runtime.jsx)(DaysOfWeekContainer,{children:constants.sb.map((function(day){return(0,jsx_runtime.jsx)(WeekOfDaysBox,{children:day},day)}))}),(0,jsx_runtime.jsx)(DaysContainer,{children:Array.from({length:dayBoxSize},(function(_,index){var _getDayInfo=(0,utils_date.$j)({index:index,yearMonthData:yearMonthData,currentDate:currentDate,dateRange:dateRange,maxDateRange:maxDateRange,isFutureDaysRestricted:isFutureDaysRestricted,isPastDaysRestricted:isPastDaysRestricted,hasRangeRestriction:hasRangeRestriction,selectedDate:selectedDate}),date=_getDayInfo.date,isDate=_getDayInfo.isDate,dateString=_getDayInfo.dateString,isToday=_getDayInfo.isToday,isSelected=_getDayInfo.isSelected,isInRange=_getDayInfo.isInRange,isRestricted=_getDayInfo.isRestricted,isStart=_getDayInfo.isStart,isEnded=_getDayInfo.isEnded;return isDate?(0,jsx_runtime.jsx)(Day_Day,{year:yearMonthData.year,month:yearMonthData.month,day:date,isToday:isToday,isSelected:isSelected,isInRange:isInRange,isStart:isStart,isEnded:isEnded,isDisabled:isRestricted,onClick:function onClick(){null==onDateClick||onDateClick(date,yearMonthData)}},dateString):(0,jsx_runtime.jsx)(Day_Day,{},index)}))})]})},Calendar_Calendar=Calendar;try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{currentDate:{defaultValue:null,description:"현재 Date",name:"currentDate",required:!0,type:{name:"Date"}},yearMonthData:{defaultValue:null,description:"현재 년월 정보",name:"yearMonthData",required:!0,type:{name:"YearMonth"}},dateRange:{defaultValue:null,description:"현재 선택된 날짜 범위",name:"dateRange",required:!1,type:{name:"SelectedDateRange"}},isFutureDaysRestricted:{defaultValue:null,description:"오늘 이후 날짜를 막을 것인지에 대한 여부",name:"isFutureDaysRestricted",required:!1,type:{name:"boolean"}},isPastDaysRestricted:{defaultValue:null,description:"오늘 이전 날짜를 막을 것인지에 대한 여부",name:"isPastDaysRestricted",required:!1,type:{name:"boolean"}},hasRangeRestriction:{defaultValue:null,description:"특정 범위를 벗어나는 날짜에 대해서 선택 불가능할지에 대한 여부",name:"hasRangeRestriction",required:!1,type:{name:"boolean"}},maxDateRange:{defaultValue:null,description:"최대로 선택할 수 있는 날짜 범위",name:"maxDateRange",required:!1,type:{name:"number"}},selectedDate:{defaultValue:null,description:"현재 선택된 날짜",name:"selectedDate",required:!1,type:{name:"number"}},onDateClick:{defaultValue:null,description:"특정 날짜를 선택했을 때 실행할 함수",name:"onDateClick",required:!1,type:{name:"CallableFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/Calendar/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H_:function(){return CALENDAR_MONTH_CHANGE},Yh:function(){return CALENDAR_DATE_LENGTH},l6:function(){return DEFAULT_MAX_DATE_RANGE},sb:function(){return DAYS_OF_WEEK}});var DAYS_OF_WEEK=["일","월","화","수","목","금","토"],CALENDAR_DATE_LENGTH={MIN:35,MAX:42},CALENDAR_MONTH_CHANGE={NEXT_MONTH:1,PREVIOUS_MONTH:-1},DEFAULT_MAX_DATE_RANGE=60},"./src/styles/theme.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={colors:{black:"#000000",white:"#FFFFFF",blue100:"#eaf9ff",blue200:"#A0C4FF",blue300:"#bbebff",blue400:"#4285F4",blue500:"#00b2ff",blue600:"#009ee2",blue700:"#006f9f",blue800:"#004765",gray100:"#F2F2F2",gray200:"#E0E0E0",gray300:"#BDBDBD",gray400:"#828282",gray500:"#4F4F4F",gray600:"#333333"},fontSize:{large:"32px",medium:"1rem",small:"0.875rem",xsmall:"0.75rem"}}},"./src/utils/date.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$j:function(){return getDayInfo},MO:function(){return getDayBoxSize},RP:function(){return getNewYearMonthInfo},ZU:function(){return toDate},m:function(){return getYearMonthInfo},p6:function(){return formatDate}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/index.ts"),toDate=function toDate(dateString){return new Date(dateString)},formatDate=function formatDate(_ref){var year=_ref.year,month=_ref.month,date=_ref.date;return"".concat(year,"-").concat(String(month).padStart(2,"0"),"-").concat(String(date).padStart(2,"0"))},getDayBoxSize=function getDayBoxSize(yearMonth){return yearMonth.firstDay+yearMonth.lastDate<=_constants__WEBPACK_IMPORTED_MODULE_0__.Yh.MIN?_constants__WEBPACK_IMPORTED_MODULE_0__.Yh.MIN:_constants__WEBPACK_IMPORTED_MODULE_0__.Yh.MAX},getYearMonthInfo=function getYearMonthInfo(initialDate){var month=String(initialDate.getMonth()+1).padStart(2,"0"),year=String(initialDate.getFullYear()),startDate=new Date("".concat(year,"-").concat(month)),firstDay=startDate.getDay();return{month:month,year:year,startDate:startDate,firstDay:firstDay,lastDate:new Date(initialDate.getFullYear(),initialDate.getMonth()+1,0).getDate()}},getNewYearMonthInfo=function getNewYearMonthInfo(currentDate){var change=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,startDate=new Date(currentDate.startDate);startDate.setMonth(startDate.getMonth()+change);var newMonthYear=new Date(startDate);return getYearMonthInfo(newMonthYear)},isDayWithinRange=function isDayWithinRange(dateString,startString,endString){if(!startString||!endString)return!1;var date=toDate(dateString),start=toDate(startString),end=toDate(endString);return start<=date&&date<=end},getDayInfo=function getDayInfo(_ref2){var index=_ref2.index,yearMonthData=_ref2.yearMonthData,currentDate=_ref2.currentDate,dateRange=_ref2.dateRange,maxDateRange=_ref2.maxDateRange,isFutureDaysRestricted=_ref2.isFutureDaysRestricted,isPastDaysRestricted=_ref2.isPastDaysRestricted,hasRangeRestriction=_ref2.hasRangeRestriction,selectedDate=_ref2.selectedDate,date=index-yearMonthData.firstDay+1,dateString=formatDate({year:yearMonthData.year,month:yearMonthData.month,date:date}),todayDateString=formatDate({year:currentDate.getFullYear(),month:currentDate.getMonth()+1,date:currentDate.getDate()}),isDate=index>=yearMonthData.firstDay&&yearMonthData.lastDate>=date,isToday=todayDateString===dateString,isSelected=selectedDate===date||(null==dateRange?void 0:dateRange.startDate)===dateString||(null==dateRange?void 0:dateRange.endDate)===dateString,isStart=(null==dateRange?void 0:dateRange.startDate)===dateString,isEnded=(null==dateRange?void 0:dateRange.endDate)===dateString,isInRange=!(null==dateRange||!dateRange.startDate)&&!(null==dateRange||!dateRange.endDate)&&(null==isDayWithinRange?void 0:isDayWithinRange(dateString,dateRange.startDate,dateRange.endDate)),isRestricted=isFutureDaysRestricted&&function isDayInFuture(dateString,endDateString){return!!endDateString&&toDate(dateString)>toDate(endDateString)}(dateString,todayDateString)||hasRangeRestriction&&function isDayOutOfRange(dateRange,dateString,maxDateRange){if(null==dateRange||!dateRange.startDate||null!=dateRange&&dateRange.endDate||!maxDateRange)return!1;var startDate=toDate(null==dateRange?void 0:dateRange.startDate),diffDays=(toDate(dateString).getTime()-startDate.getTime())/864e5;return diffDays<-maxDateRange||diffDays>maxDateRange}(dateRange,dateString,maxDateRange)||isPastDaysRestricted&&function isDayInPast(dateString,endDateString){return!!endDateString&&toDate(dateString)<toDate(endDateString)}(dateString,todayDateString);return{date:date,isDate:isDate,dateString:dateString,isToday:isToday,isSelected:isSelected,isInRange:isInRange,isRestricted:isRestricted,isStart:isStart,isEnded:isEnded}}}}]);
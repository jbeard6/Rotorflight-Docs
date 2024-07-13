"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3591],{12945:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=l(74848),n=l(28453);const a={sidebar_position:90},i="Power",o={id:"Tutorial-Setup/Power",title:"Power",description:"Set up all your power and battery related settings. Set the voltage and current sensor sources and calibration so that the FC can read the values and warn you accordingly. You can also check the current power measurements.",source:"@site/docs/Tutorial-Setup/Power.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Power",permalink:"/docs/Tutorial-Setup/Power",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Power.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Failsafe",permalink:"/docs/Tutorial-Setup/Failsafe"},next:{title:"Motor and ESC",permalink:"/docs/Tutorial-Setup/Motor-and-Esc"}},s={},c=[{value:"Power State",id:"power-state",level:2},{value:"Battery",id:"battery",level:2},{value:"Battery Voltage Source",id:"battery-voltage-source",level:3},{value:"Battery Current Source",id:"battery-current-source",level:3},{value:"Min/Max/Warning Cell Voltage",id:"minmaxwarning-cell-voltage",level:3},{value:"Capacity",id:"capacity",level:3},{value:"Cell Count",id:"cell-count",level:3},{value:"Voltage Meters",id:"voltage-meters",level:2},{value:"Battery",id:"battery-1",level:3},{value:"BEC",id:"bec",level:3},{value:"5V",id:"5v",level:3},{value:"EXT",id:"ext",level:3},{value:"MCU",id:"mcu",level:3},{value:"Scale",id:"scale",level:4},{value:"Divider / Multiplier Value",id:"divider--multiplier-value",level:4},{value:"Example:",id:"example",level:5}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"power",children:"Power"}),"\n",(0,r.jsx)(t.p,{children:"Set up all your power and battery related settings. Set the voltage and current sensor sources and calibration so that the FC can read the values and warn you accordingly. You can also check the current power measurements."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Power",src:l(10706).A+"",width:"828",height:"958"})}),"\n",(0,r.jsx)(t.h2,{id:"power-state",children:"Power State"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Connected"})," - Yes/No, if Yes, also shows cell count"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Voltage"})," - Voltage of the battery"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Current"})," - Current draw"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"mAh Used"})," - Capacity used in mAh"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Charge Level"})," - Battery charge percentage"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"battery",children:"Battery"}),"\n",(0,r.jsx)(t.h3,{id:"battery-voltage-source",children:"Battery Voltage Source"}),"\n",(0,r.jsx)(t.p,{children:"Select the source for the voltage measurements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"None - No voltage measurements will be available"}),"\n",(0,r.jsx)(t.li,{children:"Battery ADC - Use the ADC on the flight controller to get the voltage measurements"}),"\n",(0,r.jsx)(t.li,{children:"ESC Telemetry - Use the ESC telemetry to get the voltage measurements"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"battery-current-source",children:"Battery Current Source"}),"\n",(0,r.jsx)(t.p,{children:"Select the source for the current measurements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"None - No current measurements will be available"}),"\n",(0,r.jsx)(t.li,{children:"Battery ADC - Use the ADC on the flight controller to get the current measurements"}),"\n",(0,r.jsx)(t.li,{children:"ESC Sensor - Use the ESC telemetry to get the current measurements"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"minmaxwarning-cell-voltage",children:"Min/Max/Warning Cell Voltage"}),"\n",(0,r.jsx)(t.p,{children:"Minimum Cell Voltage - The voltage that is considered critically low, and will trigger the corresponding warnings\nMaximum Cell Voltage - The voltage of a fully charged Cell\nWarning Cell Voltage - The voltage that is considered low, and will trigger the corresponding warnings"}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:"The warning voltage should be set to a value where you can still land safely, usually 3.6-3.5V.\nThe minimum voltage should be set to a value where damage is imminent, usually 3.3V."}),(0,r.jsx)(t.p,{children:"If you fly a battery to less than 3.3V, it will start to be damaged and will not be able to hold a charge anymore, and can even be dangerous."})]}),"\n",(0,r.jsx)(t.h3,{id:"capacity",children:"Capacity"}),"\n",(0,r.jsx)(t.p,{children:"The capacity of the battery in mAh. This is used to calculate the remaining battery capacity in percent."}),"\n",(0,r.jsx)(t.h3,{id:"cell-count",children:"Cell Count"}),"\n",(0,r.jsx)(t.p,{children:"Force cell count to avoid confusion between full 11S and flat 12S for example."}),"\n",(0,r.jsx)(t.h2,{id:"voltage-meters",children:"Voltage Meters"}),"\n",(0,r.jsx)(t.p,{children:"Settings for the voltage meter to measure the battery voltage correctly."}),"\n",(0,r.jsx)(t.h3,{id:"battery-1",children:"Battery"}),"\n",(0,r.jsx)(t.p,{children:"Main Pack voltage."}),"\n",(0,r.jsx)(t.h3,{id:"bec",children:"BEC"}),"\n",(0,r.jsx)(t.p,{children:"Servo Bus voltage."}),"\n",(0,r.jsx)(t.h3,{id:"5v",children:"5V"}),"\n",(0,r.jsx)(t.p,{children:"VBus voltage."}),"\n",(0,r.jsx)(t.h3,{id:"ext",children:"EXT"}),"\n",(0,r.jsx)(t.p,{children:"External voltage input voltage."}),"\n",(0,r.jsx)(t.h3,{id:"mcu",children:"MCU"}),"\n",(0,r.jsx)(t.p,{children:"MCU voltage."}),"\n",(0,r.jsx)(t.h4,{id:"scale",children:"Scale"}),"\n",(0,r.jsx)(t.p,{children:"The scale of the voltage meter. This is used to calculate the correct voltage from the ADC value. If the battery voltage is not displayed correctly, you can adjust this value up/down to fix it"}),"\n",(0,r.jsx)(t.h4,{id:"divider--multiplier-value",children:"Divider / Multiplier Value"}),"\n",(0,r.jsx)(t.p,{children:"This defines how the value read by the ICs ADC converts into a voltage value that makes sense to the pilot. In easy terms this sets how the ratio difference between the two voltage divider resistors are used in the voltage calculation formula."}),"\n",(0,r.jsx)(t.h5,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(t.p,{children:'Scale: 110 = 10:1 voltage divider (10k:1k ohm resistors)\nDivider: 10 = sets the direct resistor to resistor ratio\nMultiplier: 1 = this is to fine tune the outcome of the calculation, a value of 1 is "no correction".'})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},10706:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/power-main-d2e61083593b5ad1bcd547b5a4937398.png"},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>o});var r=l(96540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
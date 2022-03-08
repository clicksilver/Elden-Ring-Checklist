(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3368)}])},3368:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return f}});var t=n(5893),r=n(9008),s=n(7294),a=function(){var e=(0,s.useState)(!1),i=e[0],n=e[1];return(0,s.useEffect)((function(){n("dark"===localStorage.getItem("theme"))}),[]),(0,s.useEffect)((function(){i?(localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}),[i]),(0,t.jsxs)("div",{className:"flex justify-end",children:[(0,t.jsx)("input",{id:"darkMode",type:"checkbox",className:"hidden",onChange:function(){return n(!i)},checked:i}),(0,t.jsx)("label",{htmlFor:"darkMode",className:"text-4xl select-none cursor-pointer",children:i?"\ud83c\udf11":"\ud83c\udf1e"})]})},d=[{id:1,name:"Legendary Ashen Remains",requirements:[{id:1,description:"Lhutel the Headless"},{id:2,description:"Ancient Dragon Knight Kristoff"},{id:3,description:"Black Knife Tiche"},{id:4,description:"Mimic Tear Ashes"},{id:5,description:"Redmane Knight Ogha"},{id:6,description:"Cleanrot Knight Finlay"}]},{id:2,name:"Legendary Talismans",requirements:[{id:1,description:"Radagon Icon"},{id:2,description:"Radagon's Soreseal"},{id:3,description:"Godfrey Icon"},{id:4,description:"Moon of Nokstella"},{id:5,description:"Dragoncrest Greatshield Talisman"},{id:6,description:"Marika's Soreseal"},{id:7,description:"Old Lord's Talisman"},{id:8,description:"Erdtree's Favor +2"}]},{id:3,name:"Legendary Sorceries and Incantations",requirements:[{id:1,description:"Flame of the Fell God"},{id:2,description:"Founding Rain of Stars"},{id:3,description:"Elden Stars"},{id:4,description:"Ranni's Dark Moon"},{id:5,description:"Comet Azur"},{id:6,description:"Stars of Ruin"},{id:7,description:"Greyoll's Roar"}]},{id:4,name:"Legendary Armaments",requirements:[{id:1,description:"Grafted Blade Greatsword"},{id:2,description:"Marais Executioner's Sword"},{id:3,description:"Eclipse Shotel"},{id:4,description:"Sword of Night and Flame"},{id:5,description:"Devourer's Scepter"},{id:6,description:"Golden Order Greatsword"},{id:7,description:"Ruins Greatsword"},{id:8,description:"Bolt of Gransax"},{id:9,description:"Dark Moon Greatsword"}]}],o=[{id:1,name:"Ranni the Witch",requirements:[{id:1,description:"Talk to Ranni in Ranni's Rise."},{id:2,description:"Talk to Seluvis, Iji, and Blaidd down the stairs of Ranni's Rise."},{id:3,description:"Talk to Blaidd in the Siofra River."},{id:4,description:"Talk to Seluvis in Seluvis's Rise."},{id:5,description:"Talk to Sellen at the Waypoint Ruins Cellar grace."},{id:6,description:"Talk to Blaidd in the Siofra River."},{id:7,description:"Defeat Radahn."},{id:8,description:"Get Finger Slayer Blade in Nokron."},{id:9,description:"Give the item to Ranni in Ranni's Rise. You will receive the inverted statue"},{id:10,description:"Take the inverted statue to the study hall entrance grace and place it on the table."},{id:11,description:"Get the cursemark of death from the Divine Tower of Liurnia."},{id:12,description:"Go to Renna's Rise (not Ranni's Rise) and enter the the portal."},{id:13,description:"Pick up the Miniature Ranni."},{id:14,description:'Rest at the nearby grace and "Talk to the miniature Ranni" 3 times.'},{id:15,description:"Get the Discarded Palace Key by defeating the Baleful Shadow in Nokstella. Make sure to get the Lake of Rot Shoreside grace after."},{id:16,description:"Get the Dark Moon Ring from the chest at the Raya Lucaria Grand Library by using the Discarded Palace Key."},{id:17,description:"Defeat Astel, Naturalborn of the Void."},{id:18,description:"Put the Dark Moon Ring on Ranni's Finger below the Cathedral of Manus Celes."},{id:19,description:"Defeat Blaidd outside of Ranni's Rise."},{id:20,description:"Talk to Iji about Blaidd's death."}]},{id:2,name:"Roundtable",requirements:[]},{id:3,name:"Dung Eater",requirements:[]},{id:4,name:"Volcano Manor Assassinations",requirements:[]},{id:5,name:"Millicent",requirements:[]},{id:6,name:"Alexander",requirements:[]}],c=function(e){var i=e.list,n=(0,s.useState)(new Array(i.requirements.length).fill(!1)),r=n[0],a=n[1];return(0,s.useEffect)((function(){console.log("checkedItems: ",r)}),[r]),(0,t.jsxs)("fieldset",{className:"border border-solid border-gray-300 p-3",children:[(0,t.jsx)("legend",{children:i.name}),i.requirements.map((function(e,i){var n=e.id,s=e.description;return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{id:"chk"+n,type:"checkbox",checked:r[i],onChange:function(){return function(e){var i=r.map((function(i,n){return n===e?!i:i}));a(i)}(i)}}),(0,t.jsx)("label",{className:"ml-2",htmlFor:"chk"+n,children:s})]},n)}))]})},l=function(e){var i=e.listName,n="Quests"===i?o:d;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h2",{children:[i,":"]}),n.map((function(e){return(0,t.jsx)(c,{list:e},e.id)}))]})},u=function(e){var i=e.currentTab,n=e.setCurrentTab,r="border rounded-t-lg dark:bg-zinc-700 dark:border-zinc-700",s="dark:text-zinc-400";return(0,t.jsx)("nav",{children:(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsxs)("div",{className:"flex border-b-2 dark:border-zinc-700",children:[(0,t.jsx)("h3",{className:"".concat("Quests"===i?r:s," px-2 mr-4"),children:(0,t.jsx)("button",{onClick:function(){return n("Quests")},children:"Quests"})}),(0,t.jsx)("h3",{className:"".concat("Achievements"===i?r:s," px-2 ml-4"),children:(0,t.jsx)("button",{onClick:function(){return n("Achievements")},children:"Achievements"})})]})})})},h=function(){return(0,t.jsx)("footer",{className:"flex-1 flex flex-col justify-end items-center mb-8",children:(0,t.jsxs)("span",{children:["Check out the project on"," ",(0,t.jsx)("a",{className:"text-elden-ring-green dark:text-elden-ring-gold",href:"https://github.com/Gobluebro/Elden-Ring-Checklist",children:"Github"})]})})},m=function(){var e="/Elden-Ring-Checklist";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:e+"/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:e+"/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:e+"/favicon-16x16.png"}),(0,t.jsx)("link",{rel:"manifest",href:e+"/site.webmanifest"}),(0,t.jsx)("link",{rel:"mask-icon",href:e+"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,t.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})},f=function(){var e=(0,s.useState)("Quests"),i=e[0],n=e[1];return(0,t.jsxs)("div",{className:"container mx-auto flex flex-col min-h-screen",children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"Elden Ring Checklist"}),(0,t.jsx)("meta",{name:"description",content:"A place to remember your progression in Elden Ring"}),(0,t.jsx)(m,{})]}),(0,t.jsx)("header",{className:"mb-2",children:(0,t.jsx)("h1",{className:"flex justify-center",children:"Elden Ring Checklist"})}),(0,t.jsx)(u,{currentTab:i,setCurrentTab:n}),(0,t.jsxs)("main",{className:"flex-1",children:[(0,t.jsx)(a,{}),(0,t.jsx)(l,{listName:i})]}),(0,t.jsx)(h,{})]})}},9008:function(e,i,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return i=5301,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[3],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:8,title:"Configuring file"},s=void 0,c={unversionedId:"cli/swa-config",id:"cli/swa-config",title:"Configuring file",description:"swa-cli.config.json",source:"@site/docs/cli/swa-config.md",sourceDirName:"cli",slug:"/cli/swa-config",permalink:"/static-web-apps-cli/docs/cli/swa-config",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/swa-config.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Configuring file"},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/static-web-apps-cli/docs/cli/env-vars"},next:{title:"Local Authentication",permalink:"/static-web-apps-cli/docs/cli/local-auth"}},p={},u=[{value:"<code>swa-cli.config.json</code>",id:"swa-cliconfigjson",level:2},{value:"Configuration File Example",id:"configuration-file-example",level:2},{value:"Initialize a Configuration File",id:"initialize-a-configuration-file",level:2},{value:"View Configuration",id:"view-configuration",level:2},{value:"Validate Configuration",id:"validate-configuration",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"swa-cliconfigjson"},(0,o.kt)("inlineCode",{parentName:"h2"},"swa-cli.config.json")),(0,o.kt)("p",null,"The SWA CLI gets configuration information for your Azure Static Web Apps in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from CLI options (passed in at runtime)"),(0,o.kt)("li",{parentName:"ul"},"from a CLI configuration file (created and stored in project)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, the SWA CLI looks for a configuration file called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"swa-cli.config.json"))," in the ",(0,o.kt)("strong",{parentName:"p"},"current directory"),"."))),(0,o.kt)("p",null,"The configuration file can contain multiple configurations (e.g., one per project), each identified by a unique configuration name."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If only a single configuration is present in the ",(0,o.kt)("inlineCode",{parentName:"li"},"swa-cli.config.json")," file, running ",(0,o.kt)("inlineCode",{parentName:"li"},"swa start")," will use it by default."),(0,o.kt)("li",{parentName:"ul"},"If options are loaded from a config file, no options passed in via command line will be respected. For example if we use ",(0,o.kt)("inlineCode",{parentName:"li"},"swa start app --ssl"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"ssl=true")," option will not be picked up by the CLI.")),(0,o.kt)("h2",{id:"configuration-file-example"},"Configuration File Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configurations": {\n    "app": {\n      "outputLocation": "http://localhost:3000",\n      "apiLocation": "api",\n      "run": "npm run start",\n      "swaConfigLocation": "./my-app-source"\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"initialize-a-configuration-file"},"Initialize a Configuration File"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"swa init")," to kickstart the workflow to create a configuration file for a new or existing project. If the project exists, ",(0,o.kt)("inlineCode",{parentName:"p"},"swa init")," will try to make educated guesses on the configuration settings for you, with ability to override it during creation."),(0,o.kt)("p",null,"By default the process creates these settings in a ",(0,o.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," in the ",(0,o.kt)("em",{parentName:"p"},"current working directory")," of your project. This is the default file name/location used by ",(0,o.kt)("inlineCode",{parentName:"p"},"swa")," when searching for project configuration info."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa --config <path>\n")),(0,o.kt)("p",null,"If the file contains only one named configuration, it is used by default. If multiple configurations are defined, specify the one to use at commandline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa --config-name\n")),(0,o.kt)("p",null,"When the configuration file option is used, the settings are stored in JSON format. Once created, you can manually edit the file to update settings (if preferred) or use ",(0,o.kt)("inlineCode",{parentName:"p"},"swa init")," to make updates."),(0,o.kt)("h2",{id:"view-configuration"},"View Configuration"),(0,o.kt)("p",null,"The Static Webs CLI provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"--print-config")," option that you can use to determine ",(0,o.kt)("em",{parentName:"p"},"resolved")," options for your current setup."),(0,o.kt)("p",null,"Here is an example of what that output looks like when run on a new project (i.e., shows default settings)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa --print-config\n\nOptions:\n - port: 4280\n - host: localhost\n - apiPort: 7071\n - appLocation: .\n - apiLocation: <undefined>\n - outputLocation: .\n - swaConfigLocation: <undefined>\n - ssl: false\n - sslCert: <undefined>\n - sslKey: <undefined>\n - appBuildCommand: <undefined>\n - apiBuildCommand: <undefined>\n - run: <undefined>\n - verbose: log\n - serverTimeout: 60\n - open: false\n - githubActionWorkflowLocation: <undefined>\n - env: preview\n - appName: <undefined>\n - dryRun: false\n - subscriptionId: <undefined>\n - resourceGroupName: <undefined>\n - tenantId: <undefined>\n - clientId: <undefined>\n - clientSecret: <undefined>\n - useKeychain: true\n - clearCredentials: false\n - config: swa-cli.config.json\n - printConfig: true\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"swa --print-config")," will provide the current configuration defaults."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"if the project has not yet defined a configuration file, this will automatically trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"swa init")," workflow to help you create one."))),(0,o.kt)("h2",{id:"validate-configuration"},"Validate Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," file can be validated against the following schema: ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/azure/static-web-apps-cli/schema"},"https://aka.ms/azure/static-web-apps-cli/schema")),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"docs/cli/swa"},"swa")," - The Static Web Apps CLI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"docs/cli/swa-init"},"swa-init")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"docs/cli/swa-start"},"swa-start"))))}d.isMDXComponent=!0}}]);
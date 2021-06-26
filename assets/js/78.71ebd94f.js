(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{501:function(e,t,o){"use strict";o.r(t);var n=o(27),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cleanup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),o("p",[e._v("So you've made all your SSDTs but now there's one thing left: Adding them to OpenCore")]),e._v(" "),o("p",[e._v("The 2 main locations:")]),e._v(" "),o("ul",[o("li",[e._v("EFI/OC/ACPI (Only ."),o("strong",[e._v("aml")]),e._v(" files, reminder to "),o("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("compile your SSDTs")]),e._v(")")],1),e._v(" "),o("li",[e._v("config.plist -> ACPI -> Add")])]),e._v(" "),o("p",[e._v("You can save yourself some work with the config.plist by running Cmd/Ctrl+R in ProperTree. "),o("strong",[e._v("Reminder do not add your DSDT.aml to your EFI")])]),e._v(" "),o("p",[e._v("For those who do not yet have a config.plist, you'll want to next head back to your respective OpenCore guides and create the config.plist:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Install guide"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Users of "),o("code",[e._v("FixHPET")]),e._v(" will also need to merge oc_patches.plist into their config.plist")]),e._v(" "),o("p",[e._v("Steps to do this:")]),e._v(" "),o("ul",[o("li",[e._v("Open both files,")]),e._v(" "),o("li",[e._v("Delete the "),o("code",[e._v("ACPI -> Patch")]),e._v(" section from config.plist")]),e._v(" "),o("li",[e._v("Copy the "),o("code",[e._v("ACPI -> Patch")]),e._v(" section from patches.plist")]),e._v(" "),o("li",[e._v("Paste into where old patches were in config.plist")])])])}),[],!1,null,null,null);t.default=i.exports}}]);
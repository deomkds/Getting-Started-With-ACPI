(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{506:function(e,r,t){"use strict";t.r(r);var a=t(28),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#fixing-ssdttime-could-not-locate-or-download-iasl"}},[e._v("Fixing SSDTTime: "),t("code",[e._v("Could not locate or download iasl!")])])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#cant-run-acpidumpefi-from-opencore"}},[e._v("Can't run "),t("code",[e._v("acpidump.efi")])])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#iasl-warning--unresolved"}},[e._v("iASL warning, # unresolved")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#decompiling-error"}},[e._v("Decompiling Error")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#invalid-character-0x3d-expecting-asl-keyword-or-name"}},[e._v("Invalid character (0x3D), expecting ASL keyword or name")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/troubleshooting.html#syntax-error-unexpected-parseopone-expecting-"}},[e._v("Syntax error, unexpected PARSEOP_ONE, expecting '('")])],1)]),e._v(" "),t("h2",{attrs:{id:"fixing-ssdttime-could-not-locate-or-download-iasl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-ssdttime-could-not-locate-or-download-iasl"}},[e._v("#")]),e._v(" Fixing SSDTTime: "),t("code",[e._v("Could not locate or download iasl!")])]),e._v(" "),t("p",[e._v("This is usually due to an outdated version of Python, try either updating Python or add iasl to the scripts folder for SSDTTime:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl macOS version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Windows version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Linux version"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"can-t-run-acpidump-efi-from-opencore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-t-run-acpidump-efi-from-opencore"}},[e._v("#")]),e._v(" Can't run "),t("code",[e._v("acpidump.efi")]),e._v(" from OpenCore")]),e._v(" "),t("p",[e._v("Grab "),t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenShell"),t("OutboundLink")],1),e._v(" and add it to EFI/OC/Tools and config.plist -> Misc -> Tools.")]),e._v(" "),t("p",[e._v("Next, call upon OpenCore shell and enter the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("shell> fs0: //replace with proper drive\n\nfs0:\\> dir //to verify this is the right directory\n\n  Directory of fs0:\\\n\n   01/01/01 3:30p  EFI\n\nfs0:\\> cd EFI\\OC\\Tools //note that its with forward slashes\n\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\n")])])]),t("h2",{attrs:{id:"iasl-warning-unresolved"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iasl-warning-unresolved"}},[e._v("#")]),e._v(" iASL warning, # unresolved")]),e._v(" "),t("p",[e._v("If you try to decompile your DSDT and get an error similar to this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)\n")])])]),t("p",[e._v("This happens when one ACPI table requires the rest for proper referencing, it does not accept the creation of DSDTs as we're only using it for creating a select few SSDTs. For those who are worried, you can run the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("iasl * [insert all ACPI files here]\n")])])]),t("h2",{attrs:{id:"decompiling-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decompiling-error"}},[e._v("#")]),e._v(" Decompiling Error")]),e._v(" "),t("p",[t("img",{attrs:{src:"/troubleshooting-md/decompile-error.png",alt:""}})]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Loading Acpi table from file iASLAwjHrs.aml\nAcpi table [DSDT] successfully installed and loaded\nPass 1 parse of [DSDT]\n")])])]),t("p",[e._v("This is a common error on DSDTs that have methods that aren't supported by MaciASL, the easiest way is to delete MaciASL and make sure you grab it from Acidanthera's repo: "),t("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"invalid-character-0x3d-expecting-asl-keyword-or-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invalid-character-0x3d-expecting-asl-keyword-or-name"}},[e._v("#")]),e._v(" Invalid character (0x3D), expecting ASL keyword or name")]),e._v(" "),t("p",[t("img",{attrs:{src:"/troubleshooting-md/invalid-parse.png",alt:""}})]),e._v(" "),t("p",[e._v("Similar to the above error, you're running an outdated copy of MaciASL. Make sure you're using the latest from Acidanthera's repo: "),t("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"syntax-error-unexpected-parseop-one-expecting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax-error-unexpected-parseop-one-expecting"}},[e._v("#")]),e._v(" Syntax error, unexpected PARSEOP_ONE, expecting '('")]),e._v(" "),t("p",[t("img",{attrs:{src:"/troubleshooting-md/invalid-parse.png",alt:""}})]),e._v(" "),t("p",[e._v("Similar to the above 2 errors, you're running an outdated copy of MaciASL. Make sure you're using the latest from Acidanthera's repo: "),t("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);
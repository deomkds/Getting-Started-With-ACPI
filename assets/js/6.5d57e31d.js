(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{402:function(e,t,a){e.exports=a.p+"assets/img/pnp.8c2387eb.png"},403:function(e,t,a){e.exports=a.p+"assets/img/ec.dd4b7c64.png"},404:function(e,t,a){e.exports=a.p+"assets/img/ssdt-before.b846f355.png"},405:function(e,t,a){e.exports=a.p+"assets/img/ssdt-after.7996c4b7.png"},406:function(e,t,a){e.exports=a.p+"assets/img/sta.e2d0aed0.png"},472:function(e,t,a){"use strict";a.r(t);var r=a(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"fixing-embedded-controllers-manual"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixing-embedded-controllers-manual"}},[e._v("#")]),e._v(" Fixing Embedded Controllers: Manual")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#fixing-embedded-controllers-manual"}},[e._v("Fixing Embedded Controllers: Manual")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#finding-the-acpi-path"}},[e._v("Finding the ACPI path")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#dsdt"}},[e._v("DSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#devicemanager"}},[e._v("DeviceManager")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#edge-cases"}},[e._v("Edge Cases")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#multiple-pnp0c09s-show-up"}},[e._v("Multiple PNP0C09's show up")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#no-pnp0c09-show-up"}},[e._v("No PNP0C09 show up")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("PNP0C09 already named "),r("code",[e._v("EC")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#pnp0c09-already-has-an-_sta-method"}},[e._v("PNP0C09 already has an "),r("code",[e._v("_STA")]),e._v(" method")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])])])]),e._v(" "),r("p",[e._v("TO-DO:")]),e._v(" "),r("ul",[r("li",[e._v("Finish Edge cases and sample SSDT edits")])]),e._v(" "),r("h2",{attrs:{id:"finding-the-acpi-path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-path"}},[e._v("#")]),e._v(" Finding the ACPI path")]),e._v(" "),r("p",[e._v("To find the ACPI pathing, you have 2 methods:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#DSDT"}},[e._v("DSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#devicemanager"}},[e._v("DeviceManager")])])]),e._v(" "),r("h3",{attrs:{id:"dsdt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dsdt"}},[e._v("#")]),e._v(" DSDT")]),e._v(" "),r("p",[e._v("Finding the ACPI pathing is quite easy actually, first open your decompiled DSDT you got from "),r("RouterLink",{attrs:{to:"/Manual/dump.html"}},[e._v("Dumping the DSDT")]),e._v(" and "),r("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("Decompiling and Compiling")]),e._v(" with either MaciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI extension"),r("OutboundLink")],1),e._v(" that can also help).")],1),e._v(" "),r("p",[e._v("Next, search for "),r("code",[e._v("PNP0C09")]),e._v(". You should get something similar:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(402),alt:""}})]),e._v(" "),r("p",[e._v("From the above example we see 2 main things:")]),e._v(" "),r("ul",[r("li",[e._v("Name of our embedded controller\n"),r("ul",[r("li",[e._v("In this case being "),r("code",[e._v("EC0")])])])]),e._v(" "),r("li",[e._v("Pathing of our embedded controller\n"),r("ul",[r("li",[r("code",[e._v("PC00.LPC0")])])])])]),e._v(" "),r("p",[e._v("But now we get into edge case territory, what fun!")]),e._v(" "),r("p",[e._v("The main ones to check for are:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#fixing-embedded-controllers-manual"}},[e._v("Fixing Embedded Controllers: Manual")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#finding-the-acpi-path"}},[e._v("Finding the ACPI path")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#dsdt"}},[e._v("DSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#devicemanager"}},[e._v("DeviceManager")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#edge-cases"}},[e._v("Edge Cases")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#multiple-pnp0c09s-show-up"}},[e._v("Multiple PNP0C09's show up")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#no-pnp0c09-show-up"}},[e._v("No PNP0C09 show up")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("PNP0C09 already named "),r("code",[e._v("EC")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#pnp0c09-already-has-an-_sta-method"}},[e._v("PNP0C09 already has an "),r("code",[e._v("_STA")]),e._v(" method")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])])])]),e._v(" "),r("p",[e._v("If none of the above apply to you, you're ready for the next section:")]),e._v(" "),r("h3",{attrs:{id:"devicemanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devicemanager"}},[e._v("#")]),e._v(" DeviceManager")]),e._v(" "),r("p",[e._v("If you already have Windows installed on this machine, finding the EC pathing is fairly easy.")]),e._v(" "),r("p",[e._v("Start by opening up Device Manager in Windows and looking for a device named "),r("code",[e._v("Embedded Controller")]),e._v(". Once found, click on it and select the "),r("code",[e._v("BIOS device Name")]),e._v(" entry. You should get something like this:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(403),alt:""}})]),e._v(" "),r("p",[e._v("From the above, we can see that our pathing is "),r("code",[e._v("SB.PC00.LPC0.EC0")])]),e._v(" "),r("p",[e._v("Now with the pathing, you can head here: "),r("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),r("h2",{attrs:{id:"edits-to-the-sample-ssdt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("#")]),e._v(" Edits to the sample SSDT")]),e._v(" "),r("p",[e._v("Now that we have our ACPI path, lets grab our SSDT and get to work:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC-USBX.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC-USBX"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For Skylake and newer and all AMD systems")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For Broadwell and older")])])])]),e._v(" "),r("p",[e._v("Now when opening this SSDT, you'll notice a few things. Mainly:")]),e._v(" "),r("ul",[r("li",[e._v("Some code is commented out\n"),r("ul",[r("li",[e._v("This is code for disabling our EC")]),e._v(" "),r("li",[e._v("Laptops users "),r("strong",[e._v("SHOULD NOT")]),e._v(" uncomment this")])])]),e._v(" "),r("li",[e._v("There's a new EC called "),r("code",[e._v("Device (EC)")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("DO NOT RENAME THIS")]),e._v(", this will be the EC we give to macOS")])])])]),e._v(" "),r("p",[r("strong",[e._v("Before")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("External (_SB_.PCI0.LPCB, DeviceObj) <- Rename this\n\nScope (_SB.PCI0.LPCB) <- Rename this\n")])])]),r("p",[r("img",{attrs:{src:a(404),alt:""}})]),e._v(" "),r("p",[e._v("Following the example pathing we found, the SSDT should look something like this:")]),e._v(" "),r("p",[r("strong",[e._v("After")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("External (_SB_.PC00.LPC0, DeviceObj) <- Renamed\n\nScope (_SB.PC00.LPC0) <- Renamed\n")])])]),r("p",[r("img",{attrs:{src:a(405),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"edge-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#edge-cases"}},[e._v("#")]),e._v(" Edge Cases")]),e._v(" "),r("h3",{attrs:{id:"multiple-pnp0c09-s-show-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiple-pnp0c09-s-show-up"}},[e._v("#")]),e._v(" Multiple PNP0C09's show up")]),e._v(" "),r("p",[e._v("When multiple PNP0C09 show up, we need to next check for the following properties:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("_HID")]),e._v(" (Hardware ID)")]),e._v(" "),r("li",[r("code",[e._v("_CRS")]),e._v(" (Current Resource Settings)")]),e._v(" "),r("li",[r("code",[e._v("_GPE")]),e._v(" (General Purpose Events)")])]),e._v(" "),r("p",[e._v("What these signify is whether this PNP0C09 device is real or not, as per the "),r("a",{attrs:{href:"https://uefi.org/sites/default/files/resources/ACPI_6_3_final_Jan30.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI spec"),r("OutboundLink")],1),e._v(". So one's matching the above criteria are the one's we want to disable.")]),e._v(" "),r("ul",[r("li",[e._v("Note: If _STA shows up as well, you'll need to go here: "),r("a",{attrs:{href:"#pnp0c09-already-has-an-sta-method"}},[e._v("PNP0C09 already has an "),r("code",[e._v("_STA")]),e._v(" method")])])]),e._v(" "),r("h3",{attrs:{id:"no-pnp0c09-show-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#no-pnp0c09-show-up"}},[e._v("#")]),e._v(" No PNP0C09 show up")]),e._v(" "),r("p",[e._v('When this happens, you\'ll only need to create a "dummy" EC for macOS.')]),e._v(" "),r("p",[e._v('Try searching for any devices named: "LPCB", "LPC0", "LPC", "SBRG", "PX40". If you have any of these, try using the LPC pathing of each of those device in place of the Embedded Controller\'s pathing.')]),e._v(" "),r("p",[e._v("Note that "),r("strong",[e._v("DO NOT")]),e._v(' uncomment the EC disabling code as there are no devices that are considered "EC" in your machine.')]),e._v(" "),r("h3",{attrs:{id:"pnp0c09-already-named-ec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("#")]),e._v(" PNP0C09 already named "),r("code",[e._v("EC")])]),e._v(" "),r("p",[e._v("Congrats! No need to create an SSDT-EC! However you will still want USBX if you're Skylake or newer.")]),e._v(" "),r("p",[e._v("Prebuilt can be grabbed here: "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"pnp0c09-already-has-an-sta-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09-already-has-an-sta-method"}},[e._v("#")]),e._v(" PNP0C09 already has an "),r("code",[e._v("_STA")]),e._v(" method")]),e._v(" "),r("p",[e._v("This is the equivalent of not having an EC as we can't control it with our SSDT-EC, instead we'll need to create a \"dummy\" EC for macOS. You'll still want to find the PCI and LPC pathing for this device. So follow the guide as if you were creating a laptop SSDT-EC/USBX.")]),e._v(" "),r("p",[e._v("Example of an EC with STA already:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(406),alt:"Credit to rottenpants466"}})]),e._v(" "),r("h2",{attrs:{id:"compiling-the-ssdt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[e._v("#")]),e._v(" Compiling the SSDT")]),e._v(" "),r("p",[e._v("With the SSDT done, you're now "),r("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("ready to compile the SSDT!")])],1),e._v(" "),r("h2",{attrs:{id:"wrapping-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),r("p",[e._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/cleanup.html"}},[r("strong",[e._v("Cleanup")])])],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);